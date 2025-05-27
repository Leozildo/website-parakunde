import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa';

const socials = [
    {
        id: 1,
        icon: <FaInstagram size={28} />,
        name: 'Instagram',
        link: 'https://www.instagram.com/grupoparakunde',
    },
    {
        id: 2,
        icon: <FaYoutube size={28} />,
        name: 'Youtube',
        link: 'https://www.youtube.com/@grupo.parakunde',
    },
    {
        id: 3,
        icon: <FaTiktok size={28} />,
        name: 'Tiktok',
        link: 'https://www.tiktok.com/@grupoparakunde',
    },
    {
        id: 4,
        icon: <FaWhatsapp size={28} />,
        name: 'Whatsapp',
        link: 'https://wa.me/5511988929289',
    },
    {
        id: 5,
        icon: <FaFacebook size={28} />,
        name: 'Tiktok',
        link: 'https://www.facebook.com/grupoparakunde',
    },
];

export function Footer() {
    return (
        <footer className="md:px-32 px-6 ">
            <div className="flex md:flex-row flex-col items-center md:justify-between border-t border-purple-200 pt-10 md:pt-0">
                <Link href="/">
                    <Image
                        src="/logo-parakunde-roxo.png"
                        alt="Logo"
                        loading="lazy"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="flex items-center justify-between gap-8 md:gap-5 py-10 md:py-0">
                    {socials.map((social) => (
                        <Link
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            aria-label={`Ir para ${social.name} do Grupo Parakundê`}
                            className="text-2xl text-purple-900 hover:text-purple-200"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center md:justify-center justify-start mb-5 md:mb-0">
                    <Link
                        className="text-purple-900 hover:text-purple-200"
                        href="https://devluizalthman.vercel.app"
                        target="_blank"
                    >
                        Desenvolvido por{' '}
                        <span className="font-semibold">Luiz Althman</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
