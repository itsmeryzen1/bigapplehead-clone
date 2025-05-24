'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Socials', path: '/socials' },
  ];

  return (
    <motion.nav
      className="navbar bg-base-100 shadow-md px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="divider my-1"></div>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <div className="px-3 py-2">
              <Link href="/contact" className="btn btn-primary btn-sm w-full">
                Buy Reviews
              </Link>
            </div>
          </ul>
      </div>
        <Link href="/" className="btn btn-ghost normal-case p-0">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img 
              src="/logo.ico" 
              alt="Globe Icon" 
              className="h-6 w-6"
            />
            <span className="text-primary font-bold text-xl">GetMapRatings</span>
          </motion.div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <motion.ul
          className="menu menu-horizontal px-1"
          variants={navVariants}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        <motion.div
          className="hidden sm:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact" className="btn btn-primary">
            Buy Reviews
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
