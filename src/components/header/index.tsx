'use client';

import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const menus = [
    { id: 1, name: 'Início', link: '/' },
    { id: 2, name: 'Agenda', link: '/?scrollTo=agenda' },
    { id: 3, name: 'Fotos', link: '/fotos' },
    { id: 4, name: 'Sobre nós', link: '/sobre' },
    { id: 5, name: 'Contato', link: '/contato' },
];
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
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Fecha o menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Observador de scroll
    useEffect(() => {
        const setupObserver = () => {
            const target = document.getElementById('top');
            if (!target) return;

            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    setIsScrolled(!entry.isIntersecting);
                },
                { root: null, threshold: 0.1 }
            );

            observerRef.current.observe(target);
        };

        // Desconecta o anterior, se existir
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Delay para garantir que o novo DOM já foi montado
        const timeout = setTimeout(() => {
            setupObserver();
        }, 50); // pequeno atraso (~1 frame)

        return () => {
            clearTimeout(timeout);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [pathname]);

    return (
        <header
            className={`md:fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 md:px-32 md:py-7 transition-colors duration-300 ${
                isScrolled ? 'bg-zinc-100 shadow-md' : 'md:bg-transparent'
            }`}
        >
            {/* Botão menu mobile - direita */}
            <div
                className="md:hidden absolute right-6 top-6 z-50 p-2"
                ref={dropdownRef}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl"
                    aria-label="Abrir menu"
                >
                    <HiMenu
                        size={32}
                        className={`text-white transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-lg flex flex-col text-sm z-50">
                        {menus.map((menu) => (
                            <Link
                                key={menu.id}
                                href={menu.link}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-2 hover:bg-gray-50 ${
                                    pathname === menu.link
                                        ? 'bg-zinc-100 font-semibold text-purple-900'
                                        : ''
                                }`}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {menus.map((menu) => (
                    <Link
                        key={menu.id}
                        href={menu.link}
                        className={`text-2xl ${
                            pathname === menu.link ? 'underline font-bold' : ''
                        } ${
                            isScrolled
                                ? 'text-purple-900 hover:text-purple-200'
                                : 'text-white hover:text-white/60'
                        }`}
                    >
                        {menu.name}
                    </Link>
                ))}
                {socials.map((social) => (
                    <Link
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        aria-label={`Ir para ${social.name} do Grupo Parakundê`}
                        className={`text-2xl ${
                            isScrolled
                                ? 'text-purple-900 hover:text-purple-200'
                                : 'text-white hover:text-white/60'
                        }`}
                    >
                        {social.icon}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
