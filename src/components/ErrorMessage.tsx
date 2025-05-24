'use client';

import { motion } from 'framer-motion';

type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <motion.div
      className="alert alert-error shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2">{message}</span>
        </div>
        
        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm"
            onClick={onRetry}
          >
            Try Again
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorMessage;
