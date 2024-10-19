import React from 'react';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata = {
    title: 'Mental Health Support Platform',
    description: 'A safe space for sharing and support',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={geistSans.variable}>
                <header className="bg-blue-600 p-4 text-white">
                    <nav className="flex justify-between">
                        <div>
                            <Link href="/" className="mr-4">Home</Link>
                            <Link href="/quiz" className="mr-4 text-yellow-300 font-bold">Quiz</Link>
                            <Link href="/resources" className="mr-4">Resources</Link>
                            <Link href="/forums" className="mr-4">Forums</Link>
                        </div>
                    </nav>
                </header>
                <main className="p-4">{children}</main>
                <footer className="bg-gray-200 p-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Mental Health Support Platform</p>
                </footer>
            </body>
        </html>
    );
}
