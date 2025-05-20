import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const robotoSans = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Parakundê',
    description: 'Grupo de samba de são paulo',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${robotoSans.className} antialiased bg-zinc-50`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
