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

// 🔥 UPDATED METADATA (SEO + LINK PREVIEW)
export const metadata = {
  title: "Hari Prakash | Data Analyst & AI Developer",
  description:
    "AI Developer & Data Analyst building intelligent systems, ML pipelines, and data-driven solutions.",

  openGraph: {
    title: "Hari Prakash Portfolio",
    description:
      "Explore AI projects, ML systems, and data-driven solutions built by Hari Prakash.",
    url: "https://portfolio-56lrsnpr7-hprakashkathirvel-gmailcoms-projects.vercel.app/",
    siteName: "Hari Prakash Portfolio",
    images: [
      {
        url: "/preview.png", // 🔥 MUST ADD THIS FILE IN /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hari Prakash Portfolio",
    description:
      "AI Developer & Data Analyst portfolio showcasing ML, NLP, and analytics projects.",
    images: ["/preview.png"],
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