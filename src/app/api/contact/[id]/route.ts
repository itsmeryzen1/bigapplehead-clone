import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = request.headers.get('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const password = authHeader.substring(7)
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const submissionId = (await params).id
    if (!submissionId) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 })
    }

    const submission = await prisma.contactFormSubmission.findUnique({
      where: { id: submissionId },
      include: {
        coupons: true
      }
    })

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    return NextResponse.json({ submission })
  } catch (error) {
    console.error('Error fetching contact submission:', error)
    return NextResponse.json({ error: 'Failed to fetch contact submission' }, { status: 500 })
  }
}
