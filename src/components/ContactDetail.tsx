'use client';

import React from 'react';
import { motion } from 'framer-motion';

type ContactSubmission = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
};

interface ContactDetailProps {
  submission: ContactSubmission | null;
  onClose: () => void;
}

const ContactDetail = ({ submission, onClose }: ContactDetailProps) => {
  if (!submission) return null;

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="bg-base-100 rounded-lg shadow-lg p-4 sm:p-6 w-full max-h-[90vh] overflow-y-auto"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">Contact Details</h3>
        <button 
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="divider my-2"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm opacity-70">Full Name</p>
          <p className="font-medium">{submission.firstName} {submission.lastName}</p>
        </div>
        <div>
          <p className="text-sm opacity-70">Submitted On</p>
          <p className="font-medium">{formatDate(submission.createdAt)}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm opacity-70">Email Address</p>
        <a 
          href={`mailto:${submission.email}`} 
          className="font-medium text-primary hover:underline flex items-center"
        >
          {submission.email}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      <div>
        <p className="text-sm opacity-70 mb-1">Message</p>
        <div className="bg-base-200 p-4 rounded-lg whitespace-pre-wrap">{submission.message}</div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-2">
        <button 
          onClick={onClose}
          className="btn btn-outline btn-sm w-full sm:w-auto"
        >
          Close
        </button>
        <a 
          href={`mailto:${submission.email}?subject=Re: Your Contact Submission`} 
          className="btn btn-primary btn-sm w-full sm:w-auto"
        >
          Reply via Email
        </a>
      </div>
    </motion.div>
  );
};

export default ContactDetail;
