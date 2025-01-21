import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kadence Indonesia | KTP Checker',
    description: 'KTP Checker | Kadence Indonesia',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link
                rel="icon"
                href="https://kadence-internal-tools.s3.ap-southeast-3.amazonaws.com/assets/logo/kadence-square.svg"
                sizes="any"
            />
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
