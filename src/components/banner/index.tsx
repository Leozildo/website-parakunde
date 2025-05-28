import Image from 'next/image';
import Link from 'next/link';

export function Banner() {
    return (
        <div className="relative w-full h-[380px] sm:h-[600px] md:h-[700px]">
            {/* Fundo atrás de tudo */}
            <Image
                src="/fundo-home.png"
                alt="Fundo"
                fill
                className="object-cover w-full h-full z-0"
                priority
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/grupo-sem-fundo-2.webp"
                alt="Grupo Parakunde"
                className="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-0 h-[108%] object-contain hidden md:block"
            />
            <Link
                href="/"
                aria-label="Logo do grupo que redireciona para a home"
                className="absolute block md:hidden left-1/2 top-15 transform -translate-x-1/2 z-40"
            >
                <Image
                    src="/logo-branco.png"
                    alt="Grupo Parakunde"
                    width={120}
                    height={120}
                    className="text-2xl font-bold text-white w-[150px]"
                />
            </Link>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/grupo-sem-fundo-2.webp"
                alt="Grupo Parakunde"
                className="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-0 object-contain md:hidden block"
            />
            {/* Logo por cima do grupo */}
            <Link
                href="/"
                aria-label="Logo do grupo que redireciona para a home"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 hidden md:block cursor-pointer"
            >
                <Image
                    src="/logo-branco.png"
                    alt="Logo"
                    width={140}
                    height={140}
                    loading="lazy"
                />
            </Link>
        </div>
    );
}
