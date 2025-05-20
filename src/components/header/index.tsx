'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const menus = [
    { id: 1, name: 'Início', link: '/' },
    { id: 2, name: 'Agenda', link: '/agenda' },
    { id: 3, name: 'Eventos', link: '/eventos' },
    { id: 4, name: 'Sobre nós', link: '/sobre' },
    { id: 5, name: 'Contato', link: '/contato' },
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
        const target = document.getElementById('top');
        if (!target) return;

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting);
            },
            { root: null, threshold: 0.1 }
        );

        observerRef.current.observe(target);

        return () => {
            if (observerRef.current && target) {
                observerRef.current.unobserve(target);
            }
        };
    }, []);

    return (
        <header
            className={`md:fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 md:px-32 py-4 md:py-7 transition-colors duration-300 ${
                isScrolled
                    ? 'bg-zinc-100 shadow-md'
                    : 'md:bg-transparent bg-zinc-100'
            }`}
        >
            {/* Logo Desktop */}
            {/* <Link href="/">
                <Image
                    src={
                        isScrolled
                            ? '/logo-parakunde-roxo.png'
                            : '/logo-branco.png'
                    }
                    alt="Logo"
                    priority
                    width={100}
                    height={100}
                    className="hidden md:block"
                />
            </Link> */}

            {/* Logo Mobile Centralizado */}
            <div className="md:hidden flex-1 flex justify-center">
                <Link href="/">
                    <Image
                        src="/logo-parakunde-roxo.png"
                        alt="Logo"
                        priority
                        width={70}
                        height={70}
                        className=""
                    />
                </Link>
            </div>

            {/* Botão menu mobile - agora à direita */}
            <div className="md:hidden absolute right-4" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl"
                    aria-label="Abrir menu"
                >
                    <HiMenu
                        size={32}
                        className={`text-purple-900 transform transition-transform duration-300 ${
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
                                        ? 'bg-zinc-100 font-semibold'
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
            </nav>
        </header>
    );
}
