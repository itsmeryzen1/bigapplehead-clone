'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Coupon {
  id: string;
  code: string;
  createdAt: string;
}

interface CouponManagementProps {
  authPassword: string;
}

const CouponManagement: React.FC<CouponManagementProps> = ({ authPassword }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [newCouponCode, setNewCouponCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch all coupons on component mount
  useEffect(() => {
    fetchCoupons();
  }, [authPassword]);

  const fetchCoupons = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/coupons', {
        headers: {
          'Authorization': `Bearer ${authPassword}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCoupons(data.coupons);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch coupons');
      }
    } catch (err) {
      setError('An error occurred while fetching coupons');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCouponCode.trim()) {
      setError('Please enter a coupon code');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authPassword}`,
        },
        body: JSON.stringify({ code: newCouponCode.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Coupon added successfully!');
        setNewCouponCode('');
        // Refetch coupons to update the list
        fetchCoupons();
      } else {
        setError(data.error || 'Failed to add coupon');
      }
    } catch (err) {
      setError('An error occurred while adding the coupon');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCoupon = async (couponId: string) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/coupons/${couponId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authPassword}`,
        },
      });

      if (response.ok) {
        setSuccess('Coupon deleted successfully!');
        // Update local state by removing the deleted coupon
        setCoupons(coupons.filter(coupon => coupon.id !== couponId));
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to delete coupon');
      }
    } catch (err) {
      setError('An error occurred while deleting the coupon');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Coupon Management</h2>
        <p className="text-base-content/70">Add, view, and delete coupon codes</p>
      </div>

      {/* Add Coupon Form */}
      <div className="bg-base-100 p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-bold mb-4">Add New Coupon</h3>

        <form onSubmit={handleAddCoupon} className="space-y-4">
          <div className="flex gap-2">
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              value={newCouponCode}
              onChange={(e) => setNewCouponCode(e.target.value)}
              className="input input-bordered flex-grow"
              placeholder="Enter coupon code"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting || !newCouponCode.trim()}
            >
              Add Coupon
            </motion.button>
          </div>

          {error && (
            <div className="alert alert-error mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{success}</span>
            </div>
          )}
        </form>
      </div>

      {/* Coupons List */}
      <div className="bg-base-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold p-6 border-b border-base-200">Existing Coupons</h3>

        {isLoading ? (
          <div className="flex justify-center items-center p-12">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : coupons.length === 0 ? (
          <div className="p-6 text-center text-base-content/70">
            No coupons found. Add your first coupon above.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.id} className="hover">
                    <td>
                      <div className="font-semibold">{coupon.code}</div>
                    </td>
                    <td>{formatDate(coupon.createdAt)}</td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-error btn-sm"
                        onClick={() => handleDeleteCoupon(coupon.id)}
                        disabled={isLoading}
                      >
                        Delete
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponManagement;
