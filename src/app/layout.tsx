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
    metadataBase: new URL('https://www.grupoparakunde.com.br'),

    title: 'Grupo Parakundê',
    description: 'Grupo de samba de são paulo',

    openGraph: {
        title: 'Grupo Parakundê | Oficial',
        description: 'Confira a agenda, shows e muito mais!',
        url: 'https://www.grupoparakunde.com.br',
        siteName: 'Grupo Parakundê',
        images: [
            {
                url: '/opengraph-image.webp',
                width: 1883,
                height: 698,
                alt: 'Grupo Parakundê',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Grupo Parakundê | Oficial',
        description: 'Confira a agenda, shows e muito mais!',
        images: ['/twitter-image.webp'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${robotoSans.className} antialiased bg-zinc-50 scroll-smooth`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
