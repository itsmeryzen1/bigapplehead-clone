'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeIn}
            >
              About Our <span className="text-primary">Google Review</span> Service
            </motion.h1>
            <motion.p 
              className="text-lg max-w-3xl mx-auto"
              variants={fadeIn}
            >
              We're dedicated to helping businesses enhance their online presence through authentic Google reviews.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                Our mission is to provide businesses with authentic, high-quality Google reviews that accurately reflect the quality of their products and services. We believe that every business deserves a chance to showcase their excellence online.
              </p>
              <p className="text-lg">
                We've helped hundreds of businesses across various industries improve their online reputation, increase customer trust, and drive more sales through our professional review service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <div className="bg-base-200 h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Trusted by 500+ Businesses</h3>
                  <p className="text-lg">From small local shops to large enterprises</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-base-200 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">How Our Service Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                  <h3 className="card-title text-xl">You Contact Us</h3>
                  <p>Fill out our simple contact form with details about your business and review needs.</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                  <h3 className="card-title text-xl">We Develop a Plan</h3>
                  <p>Our team creates a custom review strategy tailored to your specific business needs.</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                  <h3 className="card-title text-xl">Reviews Start Flowing</h3>
                  <p>Watch as authentic, high-quality reviews begin appearing on your Google Business profile.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <h3 className="card-title">Authenticity</h3>
                  <p>We believe in real reviews from real people</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <h3 className="card-title">Quality</h3>
                  <p>Every review reflects the excellence of your business</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <h3 className="card-title">Integrity</h3>
                  <p>We operate with honesty and transparency</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <h3 className="card-title">Results</h3>
                  <p>We're committed to delivering tangible improvements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
