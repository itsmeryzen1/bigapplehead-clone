'use client';

import React from 'react';
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

interface DashboardOverviewProps {
  submissions: ContactSubmission[];
  onViewDetails: (submission: ContactSubmission) => void;
}

const DashboardOverview = ({ submissions, onViewDetails }: DashboardOverviewProps) => {
  const router = useRouter();
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
  const submissionsToday = submissions.filter(submission => {
    const submissionDate = new Date(submission.createdAt);
    return submissionDate.toDateString() === today.toDateString();
  });
  
  const submissionsThisWeek = submissions.filter(submission => {
    const submissionDate = new Date(submission.createdAt);
    return submissionDate >= startOfWeek;
  });
  
  const submissionsThisMonth = submissions.filter(submission => {
    const submissionDate = new Date(submission.createdAt);
    return submissionDate >= startOfMonth;
  });
  
  const stats = [
    {
      title: 'Today',
      value: submissionsToday.length,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-info/20 text-info'
    },
    {
      title: 'This Week',
      value: submissionsThisWeek.length,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-success/20 text-success'
    },
    {
      title: 'This Month',
      value: submissionsThisMonth.length,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-warning/20 text-warning'
    },
    {
      title: 'Total',
      value: submissions.length,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
      ),
      color: 'bg-primary/20 text-primary'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-base-content/70">Overview of your contact submissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-base-100 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg mr-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-base-content/70">{stat.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {submissions.length > 0 && (
        <div className="bg-base-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-4">Recent Submissions</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.slice(0, 5).map((submission) => (
                  <tr 
                    key={submission.id} 
                    className="cursor-pointer hover"
                    onClick={() => router.push(`/admin/submissions/${submission.id}`)}
                  >
                    <td className="whitespace-nowrap">
                      {new Date(submission.createdAt).toLocaleDateString()}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DashboardOverview;
