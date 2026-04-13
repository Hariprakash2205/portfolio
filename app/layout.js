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

// 🔥 FINAL METADATA (SEO + LINK PREVIEW)
export const metadata = {
  title: "Hari Prakash | Data Analyst & AI Developer",
  description:
    "AI Developer & Data Analyst specializing in machine learning, NLP, and data-driven systems. Explore projects, experience, and technical expertise.",

  keywords: [
    "Hari Prakash",
    "Data Analyst",
    "AI Developer",
    "Machine Learning",
    "NLP",
    "Portfolio",
    "Python Developer",
    "Data Science",
  ],

  authors: [{ name: "Hari Prakash" }],

  openGraph: {
    title: "Hari Prakash Portfolio",
    description:
      "Explore AI projects, ML pipelines, and intelligent systems built by Hari Prakash.",
    url: "https://portfolio-56lrsnpr7-hprakashkathirvel-gmailcoms-projects.vercel.app/",
    siteName: "Hari Prakash Portfolio",
    images: [
      {
        url: "/preview.png", // ✅ Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Hari Prakash Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hari Prakash Portfolio",
    description:
      "AI Developer & Data Analyst portfolio showcasing ML, NLP, and analytics projects.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}