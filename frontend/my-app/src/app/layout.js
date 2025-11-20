import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dinithi Dewmini - Full Stack Developer Portfolio",
  description: "Professional portfolio of Dinithi Dewmini, a passionate full stack developer specializing in React, Node.js, and modern web technologies. Discover my projects, skills, and experience in creating innovative digital solutions.",
  keywords: "portfolio, full stack developer, React, Next.js, Node.js, web development, JavaScript, TypeScript, frontend, backend, UI/UX, responsive design",
  author: "Dinithi Dewmini",
  creator: "Dinithi Dewmini",
  publisher: "Dinithi Dewmini",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://johndoe-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dinithi Dewmini - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing full stack development projects and expertise in modern web technologies.",
    url: 'https://johndoe-portfolio.vercel.app',
    siteName: 'Dinithi Dewmini Portfolio',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Dinithi Dewmini - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dinithi Dewmini - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing full stack development projects and expertise in modern web technologies.",
    creator: '@johndoe',
    images: ['/api/placeholder/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
