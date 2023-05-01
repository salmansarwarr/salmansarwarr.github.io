import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

export const metadata = {
    title: 'Muhammad Salman Sarwar',
    description: 'web developer professional portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" style={{scrollBehavior: 'smooth'}}>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
