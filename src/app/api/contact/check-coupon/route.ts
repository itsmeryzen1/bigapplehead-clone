import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Get the coupon code from the query parameters
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.json(
        { valid: false, message: 'No coupon code provided' },
        { status: 400 }
      );
    }

    // Check if the coupon exists in the database
    const coupon = await prisma.coupons.findFirst({
      where: {
        code: code,
      },
    });

    if (coupon) {
      return NextResponse.json(
        { valid: true, message: 'Coupon code is valid' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { valid: false, message: 'Invalid coupon code' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error checking coupon:', error);
    return NextResponse.json(
      { valid: false, message: 'Error checking coupon code' },
      { status: 500 }
    );
  }
}
