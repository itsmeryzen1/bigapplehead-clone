'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BuyReviewsForm from '@/components/BuyReviewsForm';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function BuyReviews() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buy Google Reviews
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Boost your business with authentic Google reviews. Our service ensures high-quality, genuine reviews that improve your online reputation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-base-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Why Buy Reviews From Us?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-primary-content">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">100% Authentic Reviews</h3>
                      <p>All reviews come from real accounts with established history to ensure credibility.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-primary-content">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Safe Delivery Process</h3>
                      <p>We post only 4-5 reviews per day to prevent Google from detecting and removing them.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-primary-content">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Custom Review Content</h3>
                      <p>Reviews are tailored to your business and contain relevant details that sound natural.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-primary-content">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Coupon System</h3>
                      <p>Use coupon codes to track your orders and get special attention from our team.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BuyReviewsForm />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
