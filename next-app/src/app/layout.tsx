import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const unifont = localFont({
    src: '../../public/fonts/unifont-5_1.ttf',
    display: 'swap',
    weight: '45 920',
    variable: '--font-unifont',
});

export const metadata: Metadata = {
    title: 'AngelPlayer Next Test App',
    description: 'AngelPlayer Next Test App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body className={`${unifont.className}`}>{children}</body>
        </html>
    );
}
