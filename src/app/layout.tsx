import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; // Import your Header component
import Footer from "@/components/Footer"; // Import your Footer component
import "@/styles/globals.css"; // Your global styles

// Custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for your site
export const metadata = {
  title: "Gyanpedia",
  description: "A digital learning platform for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can add any additional meta tags here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Include Header, main content, and Footer */}
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header /> {/* The header will appear on every page */}
          <main className="flex-grow">{children}</main>{" "}
          {/* Page-specific content will go here */}
          <Footer /> {/* The footer will appear on every page */}
        </div>
      </body>
    </html>
  );
}
