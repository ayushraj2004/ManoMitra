
"use client";

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, Baloo_2 } from 'next/font/google';
import React from 'react';
import { LanguageProvider } from '@/contexts/language-context';

// Metadata cannot be exported from a client component.
// We can either move this to a new server component or keep it here and accept the warning.
// For now, we'll keep it here.
// export const metadata: Metadata = {
//   title: 'ManoMitra',
//   description: 'A Mental Wellness Platform for Indian Students',
// };

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const baloo = Baloo_2({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
    variable: '--font-baloo',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.variable} ${baloo.variable} font-body antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
