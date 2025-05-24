# Next Steps for Google Reviews Service Website

## Setup and Configuration

1. **Database Setup**
   - Set up your Neon PostgreSQL database (https://neon.tech)
   - Update your `.env` file with the following variables:
     ```
     DATABASE_URL="postgresql://username:password@your-neon-db-host:5432/dbname"
     ADMIN_PASSWORD="your-secure-admin-password"
     ```

2. **Run Database Migrations**
   - Execute the following command to apply the database schema:
     ```
     npx prisma migrate dev --name init
     ```

3. **Install Dependencies** (if not already done)
   - Run `npm install` to ensure all dependencies are installed

## Running the Application

1. **Development Mode**
   - Start the development server with:
     ```
     npm run dev
     ```
   - Access the site at http://localhost:3000

2. **Production Build**
   - Build the application with:
     ```
     npm run build
     ```
   - Start the production server:
     ```
     npm start
     ```

## Project Structure Overview

- `/src/app` - Main application pages using Next.js App Router
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and database client
- `/prisma` - Database schema and migrations

## Testing the Admin Dashboard

1. Access the admin dashboard at http://localhost:3000/admin
2. Use the password you set in the ADMIN_PASSWORD environment variable
3. You should be able to see all contact form submissions

## Customization Options

- **Theme**: Modify colors and theme in `tailwind.config.js`
- **Content**: Update text content in page files
- **Images**: Add your own images to the `/public` directory
- **Animations**: Customize animations in Framer Motion components

## Deployment

1. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set up environment variables in the Vercel dashboard
   - Deploy with a single click

2. **Other Hosting Options**
   - Follow standard Next.js deployment procedures for your preferred hosting provider
   - Ensure database connection strings are properly configured in production