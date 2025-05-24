import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Validate required fields
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Check if the password matches the admin password in .env
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Authentication successful',
    });
  } catch (error) {
    console.error('Error in admin login:', error);
    return NextResponse.json(
      { error: 'An error occurred during authentication' },
      { status: 500 }
    );
  }
}
