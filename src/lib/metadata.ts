import type { Metadata } from 'next';

// Base metadata configuration for the site
export const baseMetadata: Metadata = {
  title: {
    default: 'Google Reviews Service',
    template: '%s | Google Reviews Service',
  },
  description: 'Professional Google Reviews Service - Get High-Quality Google Reviews for Your Business',
  keywords: [
    'google reviews',
    'business reviews',
    'online reputation',
    'review service',
    'business rating',
    'customer reviews',
  ],
  authors: [{ name: 'Google Reviews Service' }],
  creator: 'Google Reviews Service',
  publisher: 'Google Reviews Service',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://googlereviewsservice.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Google Reviews Service',
    title: 'Google Reviews Service',
    description: 'Professional Google Reviews Service - Get High-Quality Google Reviews for Your Business',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Reviews Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Reviews Service',
    description: 'Professional Google Reviews Service - Get High-Quality Google Reviews for Your Business',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Function to generate page-specific metadata
export function generateMetadata(
  title: string,
  description?: string,
  overrides: Partial<Metadata> = {}
): Metadata {
  return {
    ...baseMetadata,
    title,
    description: description || baseMetadata.description,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: description || baseMetadata.openGraph?.description,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: description || baseMetadata.twitter?.description,
    },
    ...overrides,
  };
}
