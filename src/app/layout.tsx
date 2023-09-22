import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WASSP Multibeam',
  description: 'WASSP development test for Web Guys',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
