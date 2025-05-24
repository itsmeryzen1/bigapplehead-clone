'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getCookie } from '@/utils/cookies';

type Coupon = {
  id: string;
  code: string;
};

type ContactSubmission = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
  reviewAmount: number;
  coupons: Coupon[];
};

export default function SubmissionPage() {
  const router = useRouter();
  const params = useParams();
  const [submission, setSubmission] = useState<ContactSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchSubmission = async () => {
      const adminAuth = getCookie('admin_auth');
      
      if (!adminAuth) {
        router.push('/admin');
        return;
      }
      
      try {
        const response = await fetch(`/api/contact/${params.id}`, {
          headers: {
            'Authorization': `Bearer ${adminAuth}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setSubmission(data.submission);
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch submission');
          
          // If unauthorized, redirect to admin login
          if (response.status === 401) {
            router.push('/admin');
          }
        }
      } catch (err) {
        setError('An error occurred while fetching the submission');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSubmission();
  }, [params.id, router]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  // Loading state
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-base-300 flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="large" />
            <p className="mt-4 text-lg">Loading submission...</p>
          </div>
        </div>
      </>
    );
  }
  
  // Error state
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-base-300 p-6">
          <div className="max-w-4xl mx-auto mt-12">
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
            <div className="mt-4">
              <Link href="/admin" className="btn btn-primary">
                Return to Admin
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  // If submission not found
  if (!submission) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-base-300 p-6">
          <div className="max-w-4xl mx-auto mt-12">
            <div className="alert alert-warning">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Submission not found</span>
            </div>
            <div className="mt-4">
              <Link href="/admin" className="btn btn-primary">
                Return to Admin
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-300 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link 
              href="/admin"
              className="btn btn-outline btn-sm mr-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Admin
            </Link>
            <h1 className="text-2xl font-bold">Submission Details</h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-base-100 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header with sender info */}
            <div className="p-6 border-b border-base-300">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    {submission.firstName} {submission.lastName}
                  </h2>
                  <div className="flex items-center text-base-content/70">
                    <a 
                      href={`mailto:${submission.email}`} 
                      className="text-primary hover:underline flex items-center mr-4"
                    >
                      {submission.email}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <span className="text-sm">
                      Received on {formatDate(submission.createdAt)}
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    href={`/admin?tab=contacts`}
                    className="btn btn-ghost btn-sm"
                  >
                    View All Submissions
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Details */}
            <div className="p-6 border-b border-base-300">
              <h3 className="text-lg font-bold mb-3">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <span className="font-semibold">Number of Reviews:</span> 
                    <span className="ml-2 badge badge-primary badge-lg">{submission.reviewAmount}</span>
                  </div>
                  
                  {submission.coupons && submission.coupons.length > 0 ? (
                    <div>
                      <span className="font-semibold">Coupon Codes:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {submission.coupons.map((coupon) => (
                          <div key={coupon.id} className="badge badge-secondary">
                            {coupon.code}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="font-semibold">Coupon Codes:</span>
                      <span className="ml-2 text-base-content/70">No coupons used</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Reviews @ 4-5 per day</span>
                    <span>{submission.reviewAmount} reviews</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-3">
                    <span>Delivery Time:</span>
                    <span>{Math.ceil(submission.reviewAmount / 4)} days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message content */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3">Additional Information</h3>
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap">
                  {submission.message}
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="p-6 bg-base-200 flex justify-between items-center">
              <div className="flex space-x-2">
                <Link
                  href={`/admin/submissions/${params.id === 'prev' ? 'next' : 'prev'}`}
                  className="btn btn-outline btn-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Previous
                </Link>
                <Link
                  href={`/admin/submissions/${params.id === 'next' ? 'prev' : 'next'}`}
                  className="btn btn-outline btn-sm"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <Link 
                href="/admin?tab=contacts"
                className="btn btn-primary btn-sm"
              >
                Back to List
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
