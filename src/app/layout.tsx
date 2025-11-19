import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dev-links',
  description: 'Dev-links é um projeto para criar links de perfil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
}
