import Image from 'next/image';
import { About } from './About';
import { StayInside } from '../../components/StayInside';
import { GroupPhoto } from '@/components/GroupPhoto';

export default function Sobre() {
    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div id="top" className="h-1 w-full absolute top-0 z-[50]" />

            <div className="relative w-full h-[380px] sm:h-[600px] md:h-[700px]">
                {/* Fundo atrás de tudo */}
                <Image
                    src="/fundo-home.png"
                    alt="Fundo"
                    fill
                    className="object-cover w-full h-full z-0"
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/grupo-sem-fundo-2.webp"
                    alt="Grupo Parakunde"
                    className="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-0 h-[108%] object-contain hidden md:block"
                />
                <div className="absolute block md:hidden left-1/2 top-15 transform -translate-x-1/2 z-40">
                    <Image
                        src="/logo-branco.png"
                        alt="Grupo Parakunde"
                        width={120}
                        height={120}
                        className="text-2xl font-bold text-white w-[150px]"
                    />
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/grupo-sem-fundo-2.webp"
                    alt="Grupo Parakunde"
                    className="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-0 object-contain md:hidden block"
                />
                {/* Logo por cima do grupo */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <Image
                        src="/logo-branco.png"
                        alt="Logo"
                        width={140}
                        height={140}
                        loading="lazy"
                    />
                </div>
            </div>
            <About />
            <GroupPhoto />
            <StayInside />
        </div>
    );
}
