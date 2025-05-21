import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="md:px-32 px-6 pt-10 md:pt-0 md:py-2 flex md:flex-row flex-col items-center md:justify-between border-t border-purple-200">
            <Link href="/">
                <Image
                    src="/logo-parakunde-roxo.png"
                    alt="Logo"
                    priority
                    width={100}
                    height={100}
                />
            </Link>
            <div className="flex items-center justify-between gap-8 md:gap-5 py-10 md:py-0">
                <Link href="" target="_blank">
                    <FaFacebook
                        size={28}
                        className="text-purple-900 font-bold hover:text-purple-200"
                    />
                </Link>
                <Link
                    href="https://www.instagram.com/grupoparakunde"
                    target="_blank"
                >
                    <FaInstagram
                        size={28}
                        className="text-purple-900 font-bold hover:text-purple-200"
                    />
                </Link>
                <Link href="https://wa.me/5511988929289" target="_blank">
                    <FaWhatsapp
                        size={28}
                        className="text-purple-900 font-bold hover:text-purple-200"
                    />
                </Link>
                <Link href="" target="_blank">
                    <FaYoutube
                        size={28}
                        className="text-purple-900 font-bold hover:text-purple-200"
                    />
                </Link>
                <Link
                    href="https://www.tiktok.com/@grupoparakunde"
                    target="_blank"
                >
                    <FaTiktok
                        size={28}
                        className="text-purple-900 font-bold hover:text-purple-200"
                    />
                </Link>
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
        </footer>
    );
}
