'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="hero min-h-[80vh] bg-base-200 relative overflow-hidden">
          {/* Google Review Examples - Floating Cards */}
          <div className="absolute w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-[20%] left-[5%] transform -rotate-6 hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="card w-60 bg-base-100 shadow-md border border-primary">
                <div className="card-body p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Robert Williams</p>
                      <div className="flex text-warning text-sm">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-xs">"Amazing service! My restaurant's reviews improved dramatically."</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-[15%] right-[5%] transform rotate-3 hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="card w-60 bg-base-100 shadow-md border border-secondary">
                <div className="card-body p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Maria Garcia</p>
                      <div className="flex text-warning text-sm">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-xs">"These reviews boosted my salon's visibility in just two weeks!"</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] left-[15%] transform rotate-6 hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="card w-60 bg-base-100 shadow-md border border-accent">
                <div className="card-body p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">James Lee</p>
                      <div className="flex text-warning text-sm">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-xs">"Best investment for my new dental practice. Trust built quickly."</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hero-content text-center z-10">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={fadeIn}
              >
                Boost Your Business with
                <motion.span 
                  className="text-primary ml-2 block md:inline"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Premium Google Reviews
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-base-content/80"
                variants={fadeIn}
              >
                Get authentic, high-quality Google reviews that enhance your online presence and build customer trust. Our service delivers genuine reviews to help your business stand out from the competition.
              </motion.p>
              
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn btn-primary btn-lg shadow-md">
                    Get Started
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/about" className="btn btn-outline btn-accent btn-lg shadow-md">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Mobile Review Card - Only visible on small screens */}
              <motion.div 
                className="mt-12 md:hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="card bg-base-100 shadow-md border border-primary mx-auto max-w-xs">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="User" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Sarah Johnson</p>
                        <div className="flex text-warning text-sm">★★★★★</div>
                      </div>
                    </div>
                    <p className="text-xs">"These Google reviews transformed my business. New customers mention finding us through our excellent reviews every day!"</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 w-full bg-base-100 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">How Our Service Works</h2>
              <p className="text-lg max-w-2xl mx-auto text-base-content/80">Our streamlined process makes it easy to improve your Google ratings</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Step 1 */}
              <motion.div
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary p-6"
                variants={featureVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 shadow-md">1</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Initial Consultation</h3>
                  <p className="text-base-content/80">We discuss your business needs and determine the best review strategy for your goals.</p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-secondary p-6"
                variants={featureVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 shadow-md">2</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Customized Plan</h3>
                  <p className="text-base-content/80">We create a tailored review plan based on your industry, location, and target audience.</p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-accent p-6"
                variants={featureVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 shadow-md">3</div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Implementation</h3>
                  <p className="text-base-content/80">Our team begins the careful process of building authentic reviews for your business.</p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-info p-6"
                variants={featureVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-info text-info-content rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 shadow-md">4</div>
                  <h3 className="text-xl font-bold mb-3 text-info">Ongoing Support</h3>
                  <p className="text-base-content/80">We provide continuous monitoring and support to ensure long-term success.</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative background elements */}
            <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 w-full max-w-7xl mx-auto relative">
          {/* Decorative elements for visual appeal */}
          <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Why Choose Our Google Reviews Service?</h2>
            <p className="text-lg max-w-2xl mx-auto text-base-content/80">We provide the highest quality review service to help businesses improve their online reputation.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div 
              className="card bg-base-100 shadow-xl border-t-4 border-primary hover:shadow-primary/20 transition-all duration-300"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body items-center text-center">
                <div className="bg-primary text-primary-content rounded-full p-4 mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-primary">100% Authentic</h3>
                <p className="text-base-content/80">Real reviews from real accounts with established history to ensure credibility.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="card bg-base-100 shadow-xl border-t-4 border-secondary hover:shadow-secondary/20 transition-all duration-300"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body items-center text-center">
                <div className="bg-secondary text-secondary-content rounded-full p-4 mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-secondary">Quick Delivery</h3>
                <p className="text-base-content/80">Reviews delivered within 3-5 business days after your order is confirmed.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="card bg-base-100 shadow-xl border-t-4 border-accent hover:shadow-accent/20 transition-all duration-300"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body items-center text-center">
                <div className="bg-accent text-accent-content rounded-full p-4 mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-accent">Safe & Compliant</h3>
                <p className="text-base-content/80">Our methods follow Google's terms of service to ensure your account remains in good standing.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 w-full bg-gradient-to-br from-base-200 to-base-300 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Impact in Numbers</h2>
              <p className="text-lg max-w-2xl mx-auto text-base-content/80">See the real results our Google review service has delivered</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Stat 1 */}
              <motion.div
                className="p-6 bg-base-100 rounded-xl shadow-lg border-b-4 border-primary hover:shadow-xl transition-all duration-300"
                variants={featureVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-primary text-5xl font-bold mb-2">500+</div>
                <div className="text-xl font-medium text-primary/80">Businesses Helped</div>
                <p className="mt-2 text-sm text-base-content/70">Across various industries</p>
              </motion.div>
              
              {/* Stat 2 */}
              <motion.div
                className="p-6 bg-base-100 rounded-xl shadow-lg border-b-4 border-secondary hover:shadow-xl transition-all duration-300"
                variants={featureVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-secondary text-5xl font-bold mb-2">15K+</div>
                <div className="text-xl font-medium text-secondary/80">Reviews Generated</div>
                <p className="mt-2 text-sm text-base-content/70">All authentic and high-quality</p>
              </motion.div>
              
              {/* Stat 3 */}
              <motion.div
                className="p-6 bg-base-100 rounded-xl shadow-lg border-b-4 border-accent hover:shadow-xl transition-all duration-300"
                variants={featureVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-accent text-5xl font-bold mb-2">98%</div>
                <div className="text-xl font-medium text-accent/80">Client Satisfaction</div>
                <p className="mt-2 text-sm text-base-content/70">Based on client feedback</p>
              </motion.div>
              
              {/* Stat 4 */}
              <motion.div
                className="p-6 bg-base-100 rounded-xl shadow-lg border-b-4 border-info hover:shadow-xl transition-all duration-300"
                variants={featureVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-info text-5xl font-bold mb-2">42%</div>
                <div className="text-xl font-medium text-info/80">Average Traffic Increase</div>
                <p className="mt-2 text-sm text-base-content/70">For businesses using our services</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 w-full bg-base-100 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg max-w-2xl mx-auto">Hear from businesses who have already transformed their online presence with our service.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="card bg-base-200 shadow-xl"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar mr-4">
                    <div className="w-12 rounded-full">
                      <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Sarah Johnson" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm opacity-70">Johnson's Bakery</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="italic text-sm">"Since using this Google review service, our bakery has seen a 40% increase in new customers. The authentic reviews have really helped establish our reputation in the community."</p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="card bg-base-200 shadow-xl"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar mr-4">
                    <div className="w-12 rounded-full">
                      <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Michael Chen" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Michael Chen</h3>
                    <p className="text-sm opacity-70">Chen Technology Solutions</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="italic text-sm">"As a new tech business, we were struggling to get noticed. The reviews we received through this service helped potential clients trust our expertise. Highly recommended!"</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="card bg-base-200 shadow-xl"
              variants={featureVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar mr-4">
                    <div className="w-12 rounded-full">
                      <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Jennifer Taylor" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Jennifer Taylor</h3>
                    <p className="text-sm opacity-70">Taylor Family Dental</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="italic text-sm">"As a healthcare provider, trust is everything. The reviews we received were professional and highlighted our patient care, which is exactly what we wanted to showcase."</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/testimonials" className="btn btn-outline">
                View More Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </section>



        {/* FAQ Section */}
        <section className="py-20 px-4 w-full bg-base-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg max-w-2xl mx-auto">Everything you need to know about our Google review service</p>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* FAQ Item 1 */}
              <motion.div 
                className="collapse collapse-plus bg-base-200"
                variants={featureVariants}
              >
                <input type="radio" name="faq-accordion" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                  What services do we provide?
                </div>
                <div className="collapse-content"> 
                  <p>We provide a custom review package tailored to your business needs. Our packages include a specific number of reviews, and we post them gradually to ensure they appear natural and to prevent Google from detecting and removing them. This careful timing helps maintain the authenticity of your reviews. We post both positive and negative reviews depending on your business needs. </p>
                </div>
              </motion.div>
              
              {/* FAQ Item 2 */}
              <motion.div 
                className="collapse collapse-plus bg-base-200"
                variants={featureVariants}
              >
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  How quickly will I see the reviews on my business profile?
                </div>
                <div className="collapse-content"> 
                  <p>We post only 4-5 reviews per day to ensure they appear natural and to prevent Google from detecting and removing them. This careful timing helps maintain the authenticity of your reviews.</p>
                </div>
              </motion.div>
              
              {/* FAQ Item 3 */}
              <motion.div 
                className="collapse collapse-plus bg-base-200"
                variants={featureVariants}
              >
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  Can I choose what the reviews say?
                </div>
                <div className="collapse-content"> 
                  <p>While you can't dictate the exact content, you can provide us with key points about your business that you'd like highlighted. Our team will craft authentic-sounding reviews that incorporate these points naturally. All reviews are positive and professionally written.</p>
                </div>
              </motion.div>
              
              {/* FAQ Item 5 */}
              <motion.div 
                className="collapse collapse-plus bg-base-200"
                variants={featureVariants}
              >
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  What happens if a review gets removed?
                </div>
                <div className="collapse-content"> 
                  <p>While it's rare, if Google removes any review within 30 days of posting, we'll replace it at no additional cost. Our high retention rate is due to our careful approach and quality control measures.</p>
                </div>
              </motion.div>
            </motion.div>
            
         
          </div>
        </section>



        {/* Call to Action */}
        <section className="w-full bg-base-300 py-16">
          <motion.div 
            className="max-w-5xl mx-auto text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Google Ratings?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today to learn more about our custom review packages and how we can help boost your online reputation.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
