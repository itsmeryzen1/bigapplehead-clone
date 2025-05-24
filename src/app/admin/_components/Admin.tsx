'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import AdminSidebar from '@/components/AdminSidebar';
import ContactsList from '@/components/ContactsList';
import ContactDetail from '@/components/ContactDetail';
import DashboardOverview from '@/components/DashboardOverview';
import { setCookie, getCookie, deleteCookie } from '@/utils/cookies';
import CouponManagement from '@/components/CouponManagement';

type ContactSubmission = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function Admin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Check for saved authentication on component mount
  useEffect(() => {
    const savedPassword = getCookie('admin_auth');
    if (savedPassword) {
      setPassword(savedPassword);
      validateSavedAuth(savedPassword);
    } else {
      setIsInitialLoading(false);
    }
    
    // Set active view based on tab query parameter
    const tab = searchParams.get('tab');
    if (tab && ['dashboard', 'contacts', 'settings'].includes(tab)) {
      setActiveView(tab);
    }
  }, [searchParams]);

  // Validate saved authentication
  const validateSavedAuth = async (savedPassword: string) => {
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: savedPassword }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        fetchSubmissions(savedPassword);
      }
    } catch (err) {
      // If validation fails, clear the cookie
      deleteCookie('admin_auth');
    } finally {
      setIsInitialLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        // Save authentication in a cookie (expires in 1 day)
        setCookie('admin_auth', password, 1);
        fetchSubmissions();
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissions = async (authPassword: string = password) => {
    try {
      const response = await fetch('/api/contact/list', {
        headers: {
          'Authorization': `Bearer ${authPassword}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions);
      } else {
        setError('Failed to fetch submissions');
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError('An error occurred while fetching submissions');
      setIsAuthenticated(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    deleteCookie('admin_auth');
    setActiveView('dashboard');
  };

  const handleViewDetails = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
  };

  // Show loading spinner during initial auth check
  if (isInitialLoading) {
    return (
      <>
        <main className="min-h-screen py-12 px-4 flex items-center justify-center bg-base-300">
          <div className="text-center">
            <LoadingSpinner size="large" />
            <p className="mt-4 text-lg">Checking authentication...</p>
          </div>
        </main>
      </>
    );
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <>
        <main className="min-h-screen py-12 px-4 flex items-center justify-center bg-base-300">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="card bg-base-100 shadow-xl max-w-md w-full"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center">Admin Login</h2>
              <p className="text-center mb-6 text-base-content/70">Enter your password to access the admin dashboard</p>

              {error && (
                <div className="alert alert-error flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Admin Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login to Dashboard'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </main>
      </>
    );
  }

  // Admin dashboard with sidebar and mobile toggle
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-base-300 relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden sticky top-0 z-20 bg-base-300 p-3 flex items-center justify-between shadow-sm">
          <button
            onClick={toggleSidebar}
            className="btn btn-square btn-ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h2 className="text-lg font-bold">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h2>
          <div className="w-6"></div> {/* Empty div for balance */}
        </div>

        {/* Sidebar - Hidden on mobile unless toggled */}
        <div className={`${sidebarVisible ? 'block' : 'hidden'} md:block absolute md:static z-10 w-full md:w-auto h-full`}>
          <AdminSidebar
            activeView={activeView}
            setActiveView={(view) => {
              setActiveView(view);
              setSidebarVisible(false); // Close sidebar on selection on mobile
            }}
            totalSubmissions={submissions.length}
            onLogout={handleLogout}
          />
        </div>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {activeView === 'dashboard' && (
              <DashboardOverview 
                submissions={submissions} 
                onViewDetails={handleViewDetails}
              />
            )}

            {activeView === 'contacts' && (
              <div className="relative">
                <ContactsList
                  submissions={submissions}
                  onViewDetails={handleViewDetails}
                />

                <AnimatePresence>
                  {selectedSubmission && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                      onClick={() => setSelectedSubmission(null)}
                    >
                      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl">
                        <ContactDetail
                          submission={selectedSubmission}
                          onClose={() => setSelectedSubmission(null)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {activeView === 'coupons' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <CouponManagement authPassword={password} />
              </motion.div>
            )}

            {activeView === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Settings</h2>
                  <p className="text-base-content/70">Manage your admin settings</p>
                </div>

                <div className="bg-base-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Account Settings</h3>

                  <div className="form-control w-full max-w-xs mb-6">
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline btn-warning"
                    >
                      Logout from Admin
                    </button>
                  </div>

                  <div className="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>To change your admin password, update the ADMIN_PASSWORD environment variable in your .env file.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
