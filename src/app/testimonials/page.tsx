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

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Johnson's Bakery",
    text: "Since using this Google review service, our bakery has seen a 40% increase in new customers. The authentic reviews have really helped establish our reputation in the community.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    business: "Chen Technology Solutions",
    text: "As a new tech business, we were struggling to get noticed. The reviews we received through this service helped potential clients trust our expertise. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Amanda Rodriguez",
    business: "AR Interior Design",
    text: "I was skeptical at first, but the quality of the reviews was impressive. They were detailed and specific to my business, which gave them authenticity. My booking rate has improved significantly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "David Wilson",
    business: "Wilson Auto Repair",
    text: "Our auto shop had great service but few reviews to show for it. This service helped us build our online reputation, and now we're the highest-rated repair shop in the area!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Jennifer Taylor",
    business: "Taylor Family Dental",
    text: "As a healthcare provider, trust is everything. The reviews we received were professional and highlighted our patient care, which is exactly what we wanted to showcase.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "Robert Patel",
    business: "Patel Legal Services",
    text: "I've tried other review services before, but this one provided the most natural and authentic reviews. They understand my business needs and delivered exactly what I was looking for.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses like yours have to say about our Google review service.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <div className="avatar mr-4">
                      <div className="w-16 rounded-full">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                    <div>
                      <h2 className="card-title">{testimonial.name}</h2>
                      <p className="text-sm opacity-70">{testimonial.business}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="italic">"{testimonial.text}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-base-200 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Start building your business's online reputation today with our professional Google review service.
            </p>
            <motion.a 
              href="/contact"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
