'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { validateContactForm } from '@/utils/validation';
import ErrorMessage from './ErrorMessage';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors({});
    
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          message: 'Thank you for your message! We will get back to you soon.',
          success: true,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          message: data.error || 'Something went wrong. Please try again.',
          success: false,
        });
      }
    } catch (error) {
      setSubmitStatus({
        message: 'An error occurred. Please try again later.',
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto p-6 bg-base-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
      
      {submitStatus && (
        <motion.div
          className={`alert ${
            submitStatus.success ? 'alert-success' : 'alert-error'
          } mb-6`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            {submitStatus.success ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
          <span>{submitStatus.message}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`input input-bordered w-full ${validationErrors.firstName ? 'input-error' : ''}`}
              required
            />
            {validationErrors.firstName && (
              <label className="label">
                <span className="label-text-alt text-error">{validationErrors.firstName}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`input input-bordered w-full ${validationErrors.lastName ? 'input-error' : ''}`}
              required
            />
            {validationErrors.lastName && (
              <label className="label">
                <span className="label-text-alt text-error">{validationErrors.lastName}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input input-bordered w-full ${validationErrors.email ? 'input-error' : ''}`}
              required
            />
            {validationErrors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{validationErrors.email}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label block" >
              <span className="label-text">Message</span>
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea w-full textarea-bordered h-32 ${validationErrors.message ? 'textarea-error' : ''}`}
              required
            />
            {validationErrors.message && (
              <label className="label">
                <span className="label-text-alt text-error">{validationErrors.message}</span>
              </label>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
