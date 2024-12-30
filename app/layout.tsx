import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Route from '../components/Route'; // Import the Route component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'AI Blog',
  description: 'Exploring AI and Machine Learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-900`}>
          <header className="flex justify-between items-center bg-blue-600 text-white py-4 px-6 shadow-md">
            <h1 className="text-2xl font-bold">AI Blog</h1>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton showName />
              </SignedIn>
            </div>
          </header>

          
            <SignedOut>
            <main className="max-w-6xl mx-auto py-2 px-4">  {/* Render the page content when the user is not signed in */}
              {children} </main>
            </SignedOut>
            <SignedIn>
             
              <Route />
            </SignedIn>
         
          
        </body>
      </html>
    </ClerkProvider>
  );
}
