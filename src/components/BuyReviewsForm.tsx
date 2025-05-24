'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { validateBuyReviewsForm } from '@/utils/validation';
import ErrorMessage from './ErrorMessage';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  reviewAmount: number | string;
  couponCodes: string[];
};

const BuyReviewsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    reviewAmount: '',
    couponCodes: [],
  });
  
  const [couponInput, setCouponInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [couponError, setCouponError] = useState<string | null>(null);
  const [couponSuccess, setCouponSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'reviewAmount') {
      // Allow any input, including empty input
      const numValue = value === '' ? '' : parseInt(value, 10);
      
      setFormData((prev) => ({
        ...prev,
        [name]: numValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const checkCoupon = async () => {
    if (!couponInput.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (formData.couponCodes.includes(couponInput.trim())) {
      setCouponError('This coupon has already been added');
      return;
    }

    setIsSubmitting(true);
    setCouponError(null);
    setCouponSuccess(null);

    try {
      const response = await fetch(`/api/contact/check-coupon?code=${encodeURIComponent(couponInput.trim())}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setFormData(prev => ({
          ...prev,
          couponCodes: [...prev.couponCodes, couponInput.trim()]
        }));
        setCouponSuccess('Coupon added successfully!');
        setCouponInput('');
      } else {
        setCouponError(data.message || 'Invalid coupon code');
      }
    } catch (error) {
      setCouponError('An error occurred while checking the coupon. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeCoupon = (couponToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      couponCodes: prev.couponCodes.filter(coupon => coupon !== couponToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors({});
    
    // Prepare the submission data - convert reviewAmount to number
    const submissionData = {
      ...formData,
      // Convert to number or use 5 as default if empty or not a valid number
      reviewAmount: formData.reviewAmount === '' || isNaN(Number(formData.reviewAmount)) 
        ? 5 
        : Number(formData.reviewAmount)
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          message: 'Thank you for your order! We will begin processing your reviews soon. Message on Telegram @itsmeryzen For faster Response.',
          success: true,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          reviewAmount: '',
          couponCodes: [],
        });
        setCouponInput('');
      } else {
        // Handle validation errors from the backend
        if (data.validationErrors) {
          setValidationErrors(data.validationErrors);
        } else {
          setSubmitStatus({
            message: data.error || 'Something went wrong. Please try again.',
            success: false,
          });
        }
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
      <h2 className="text-2xl font-bold text-center mb-6">Order Google Reviews</h2>
      
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
            <label className="label">
              <span className="label-text">Number of Reviews (5-500)*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="number"
              name="reviewAmount"
              className={`input input-bordered w-full ${validationErrors.reviewAmount ? 'input-error' : ''}`}
              value={formData.reviewAmount}
              onChange={handleChange}
              placeholder="Enter number of reviews (5-500)"
            />
            {validationErrors.reviewAmount && (
              <label className="label">
                <span className="label-text-alt text-error">{validationErrors.reviewAmount}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Coupon Codes</span>
            </label>
            <div className="flex gap-2">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                className={`input input-bordered flex-grow ${couponError ? 'input-error' : ''}`}
                placeholder="Enter coupon code"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className={`btn btn-secondary ${isSubmitting ? 'loading' : ''}`}
                onClick={checkCoupon}
                disabled={isSubmitting || !couponInput.trim()}
              >
                Add
              </motion.button>
            </div>
            {couponError && (
              <label className="label">
                <span className="label-text-alt text-error">{couponError}</span>
              </label>
            )}
            {couponSuccess && (
              <label className="label">
                <span className="label-text-alt text-success">{couponSuccess}</span>
              </label>
            )}
            
            {formData.couponCodes.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-semibold mb-2">Applied Coupons:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.couponCodes.map((code, index) => (
                    <div key={index} className="badge badge-primary gap-2">
                      {code}
                      <button 
                        type="button" 
                        className="btn btn-xs btn-ghost btn-circle"
                        onClick={() => removeCoupon(code)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="form-control">
            <label className="label block" >
              <span className="label-text">Additional Information</span>
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea w-full textarea-bordered h-32 ${validationErrors.message ? 'textarea-error' : ''}`}
              placeholder="Tell us about your business and any specific requirements for your reviews"
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
            {isSubmitting ? 'Processing...' : 'Buy Reviews Now'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default BuyReviewsForm;
