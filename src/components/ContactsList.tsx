'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type ContactSubmission = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
};

interface ContactsListProps {
  submissions: ContactSubmission[];
  onViewDetails: (submission: ContactSubmission) => void;
}

const ContactsList = ({ submissions, onViewDetails }: ContactsListProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubmissions = submissions.filter(submission => {
    const fullName = `${submission.firstName} ${submission.lastName}`.toLowerCase();
    const searchLower = searchTerm.toLowerCase();
    
    return (
      fullName.includes(searchLower) ||
      submission.email.toLowerCase().includes(searchLower) ||
      submission.message.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Contact Submissions</h2>
        <p className="text-base-content/70">View and manage all contact form submissions</p>
      </div>

      <div className="bg-base-100 p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="form-control w-full md:w-96">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by name, email, or message..."
                className="input input-bordered w-full pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="badge badge-lg">
            {filteredSubmissions.length} total submissions
          </div>
        </div>

        {filteredSubmissions.length === 0 ? (
          <div className="text-center py-10">
            {submissions.length === 0 ? (
              <p className="text-lg">No submissions yet.</p>
            ) : (
              <p className="text-lg">No submissions match your search.</p>
            )}
          </div>
        ) : (
          <>
            {/* Desktop view - Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <motion.tr 
                      key={`table-${submission.id}`}
                      whileHover={{ backgroundColor: 'rgba(var(--primary-rgb), 0.05)' }}
                      className="cursor-pointer hover"
                      onClick={() => router.push(`/admin/submissions/${submission.id}`)}
                    >
                      <td className="whitespace-nowrap">
                        {formatDate(submission.createdAt)}
                      </td>
                      <td>{`${submission.firstName} ${submission.lastName}`}</td>
                      <td className="max-w-[200px] truncate">
                        <a 
                          href={`mailto:${submission.email}`} 
                          className="text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {submission.email}
                        </a>
                      </td>
                      <td className="max-w-[200px]">
                        <div className="flex items-center">
                          <span>{submission.message.substring(0, 20)}{submission.message.length > 20 ? '...' : ''}</span>
                          <div className="ml-2 badge badge-sm badge-ghost">view</div>
                        </div>
                      </td>
                      <td>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(submission);
                          }} 
                          className="btn btn-sm btn-outline"
                        >
                          Details
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile view - Cards */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {filteredSubmissions.map((submission) => (
                <motion.div
                  key={`card-${submission.id}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="card bg-base-200 shadow-sm cursor-pointer"
                  onClick={() => onViewDetails(submission)}
                >
                  <div className="card-body p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="card-title text-base">
                        {`${submission.firstName} ${submission.lastName}`}
                      </h3>
                      <div className="badge badge-sm">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <a 
                      href={`mailto:${submission.email}`} 
                      className="text-primary text-sm hover:underline mb-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {submission.email}
                    </a>
                    
                    <p className="text-sm opacity-80 mb-3">
                      {submission.message.substring(0, 60)}{submission.message.length > 60 ? '...' : ''}
                    </p>
                    
                    <div className="card-actions justify-end">
                      <button 
                        className="btn btn-sm btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewDetails(submission);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ContactsList;
