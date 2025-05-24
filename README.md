# Google Reviews Service Website

A modern, animated landing page for a Google reviews service business. This project allows customers to learn about the service, view testimonials, and submit contact information to purchase Google reviews.

## Features

- 🎨 **Beautiful UI**: Built with Tailwind CSS and DaisyUI (light theme)
- ✨ **Smooth Animations**: Enhanced user experience with Framer Motion animations
- 📱 **Fully Responsive**: Works on all devices - mobile, tablet, and desktop
- 📝 **Contact Form**: Customer information collection for lead generation
- 🔒 **Admin Dashboard**: Password-protected area to view all submissions
- 🗄️ **Database Integration**: PostgreSQL database via Neon and Prisma

## Pages

- **Home**: Landing page with animated hero section and features
- **About Us**: Information about the business and service
- **Contact Us**: Contact form for potential customers
- **Testimonials**: Customer success stories
- **Socials**: Links to social media profiles
- **Admin**: Password-protected dashboard

## Tech Stack

- [Next.js](https://nextjs.org) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com) - Tailwind CSS component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Prisma](https://www.prisma.io) - ORM for database access
- [Neon](https://neon.tech) - Serverless PostgreSQL database

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (via Neon or other provider)

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://username:password@your-neon-db-host:5432/dbname"
ADMIN_PASSWORD="your-secure-admin-password"
```

### Installation

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev --name init

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Admin Access

Navigate to `/admin` and enter the password defined in your `.env` file to access the dashboard and view contact form submissions.

## Deployment

This Next.js application can be easily deployed to Vercel or any other hosting platform that supports Next.js applications.

For more information, check out our [NEXT_STEPS.md](./NEXT_STEPS.md) file for detailed deployment instructions.
