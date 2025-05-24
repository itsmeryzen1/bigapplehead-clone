'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {(title || description) && (
          <motion.div 
            className="text-center py-12 px-4 bg-base-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
