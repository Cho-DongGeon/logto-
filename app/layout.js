import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: '동건의 logto  테스트',
    description: '동건의 logto 테스트 프로젝트입니다.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <Navigation />
                {children}
            </body>
        </html>
    );
}
