import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message, reviewAmount, couponCodes } = body;

    // Validate all fields and collect validation errors
    const validationErrors: Record<string, string> = {};

    // Validate required fields
    if (!firstName || firstName.trim().length < 2) {
      validationErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!lastName || lastName.trim().length < 2) {
      validationErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!message || message.trim().length < 10) {
      validationErrors.message = 'Additional information must be at least 10 characters';
    }

    // Validate review amount
    if (reviewAmount === undefined || reviewAmount === null) {
      validationErrors.reviewAmount = 'Number of reviews is required';
    } else if (reviewAmount < 5 || reviewAmount > 500 || !Number.isInteger(reviewAmount)) {
      validationErrors.reviewAmount = 'Review amount must be between 5 and 500';
    }

    // If validation errors exist, return them
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { validationErrors },
        { status: 400 }
      );
    }

    // Verify all coupon codes exist if any are provided
    if (couponCodes && couponCodes.length > 0) {
      const validCoupons = await prisma.coupons.findMany({
        where: {
          code: {
            in: couponCodes,
          },
        },
      });

      // Check if all provided coupon codes were found
      if (validCoupons.length !== couponCodes.length) {
        return NextResponse.json(
          { error: 'One or more coupon codes are invalid' },
          { status: 400 }
        );
      }
    }

    // Create new submission with reviewAmount
    const submission = await prisma.contactFormSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        message,
        reviewAmount,
        // Connect the submission to the coupon codes if provided
        ...(couponCodes && couponCodes.length > 0 ? {
          coupons: {
            connect: couponCodes.map((code: string) => ({
              code: code,
            })),
          },
        } : {}),
      },
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving review order submission:', error);
    return NextResponse.json(
      { error: 'Failed to save your order. Please try again.' },
      { status: 500 }
    );
  }
}
