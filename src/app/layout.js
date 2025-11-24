import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pardeep Singh | Full Stack MERN Developer Portfolio",
  description: "Portfolio of Pardeep Singh, a passionate Full Stack MERN Developer specializing in React.js, Next.js, Node.js, Express.js, Nest.js, MongoDB, and PostgreSQL. Final year BCA student from Punjab with expertise in building modern web applications.",
  keywords: [
    "Pardeep Singh",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "BCA Student",
    "Punjab Developer",
    "Abohar Developer",
    "Fazilka Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Nest.js Developer",
    "Prisma Developer",
    "Tailwind CSS",
    "Express.js",
    "AI Powered Applications",
    "Yudo Examen",
    "Yudo Scheduler",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Pardeep Singh", url: "https://github.com/pardeepsidhu" }],
  creator: "Pardeep Singh",
  publisher: "Pardeep Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Pardeep Singh | Full Stack MERN Developer",
    description: "Passionate Full Stack MERN Developer from Punjab, India. Building modern web applications with React, Next.js, Node.js, and cutting-edge technologies.",
    siteName: "Pardeep Singh Portfolio",
    images: [
      {
        url: "/profile.png", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Pardeep Singh - Full Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pardeep Singh | Full Stack MERN Developer",
    description: "Passionate Full Stack MERN Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/profile.png"], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Pardeep Singh" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Abohar, Punjab" />
        <meta property="profile:first_name" content="Pardeep" />
        <meta property="profile:last_name" content="Singh" />
        <meta property="profile:username" content="pardeepsidhu" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pardeep Singh",
              jobTitle: "Full Stack MERN Developer",
              url: "https://yourwebsite.com",
              sameAs: [
                "https://www.linkedin.com/in/pardeep-singh-85848a2b1",
                "http://github.com/pardeepsidhu"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abohar",
                addressRegion: "Punjab",
                addressCountry: "IN"
              },
              email: "sidhupardeep618@yahoo.com",
              telephone: "+91-8284012817",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Abhishek Group of Institution",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "Punjab",
                  addressCountry: "IN"
                }
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "Nest.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Full Stack Development",
                "MERN Stack",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Toaster position="top-right" reverseOrder={false} />
         
        {children}
      </body>
     
    </html>
  );
}