import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all coupons
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const password = authHeader.substring(7);
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Fetch all coupons
    const coupons = await prisma.coupons.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ coupons });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return NextResponse.json({ error: 'Failed to fetch coupons' }, { status: 500 });
  }
}

// POST a new coupon
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const password = authHeader.substring(7);
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const body = await request.json();
    const { code } = body;

    // Validate the coupon code
    if (!code || typeof code !== 'string' || code.trim().length < 2) {
      return NextResponse.json(
        { error: 'Coupon code must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Check if the coupon already exists
    const existingCoupon = await prisma.coupons.findFirst({
      where: { code: code.trim() },
    });

    if (existingCoupon) {
      return NextResponse.json(
        { error: 'Coupon code already exists' },
        { status: 400 }
      );
    }

    // Create the coupon
    const coupon = await prisma.coupons.create({
      data: { code: code.trim() },
    });

    return NextResponse.json(
      { message: 'Coupon created successfully', coupon },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating coupon:', error);
    return NextResponse.json({ error: 'Failed to create coupon' }, { status: 500 });
  }
}
