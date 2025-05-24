'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg mb-8">
              Oops! The page you're looking for doesn't seem to exist. It might have been moved or deleted.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/" className="btn btn-primary btn-lg">
                Return to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
