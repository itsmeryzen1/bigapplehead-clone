import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// DELETE a coupon by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const password = authHeader.substring(7);
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const couponId = (await params).id;
    if (!couponId) {
      return NextResponse.json({ error: 'Coupon ID is required' }, { status: 400 });
    }

    // Check if the coupon exists
    const existingCoupon = await prisma.coupons.findUnique({
      where: { id: couponId },
    });

    if (!existingCoupon) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 });
    }

    // Check if the coupon is linked to any submissions
    const linkedSubmissions = await prisma.contactFormSubmission.findMany({
      where: {
        coupons: {
          some: {
            id: couponId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    // If there are linked submissions, we need to handle the relationship
    if (linkedSubmissions.length > 0) {
      // Option 1: Prevent deletion if coupon is in use
      // return NextResponse.json(
      //   { error: 'Cannot delete coupon that is used in submissions' },
      //   { status: 400 }
      // );

      // Option 2: Allow deletion and remove the relationship
      // This is what we'll implement
      await Promise.all(
        linkedSubmissions.map(async (submission) => {
          await prisma.contactFormSubmission.update({
            where: { id: submission.id },
            data: {
              coupons: {
                disconnect: {
                  id: couponId,
                },
              },
            },
          });
        })
      );
    }

    // Delete the coupon
    await prisma.coupons.delete({
      where: { id: couponId },
    });

    return NextResponse.json(
      { message: 'Coupon deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting coupon:', error);
    return NextResponse.json({ error: 'Failed to delete coupon' }, { status: 500 });
  }
}
