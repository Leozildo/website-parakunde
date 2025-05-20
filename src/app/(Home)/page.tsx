import Image from 'next/image';

import { Hire } from './Hire';
import { SongsPlataforms } from './SongsPlataforms';
import { StayInside } from './ StayInside';

export default async function Home() {
    // const response = await fetch(
    //     'https://opensheet.elk.sh/1zilH5wS1arLo0R7xp7Zxs6ZYNUFR-t8R35WNiRYq7cA/1'
    // );
    // const data = await response.json();
    // console.log(data);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div id="top" className="h-1 w-full absolute top-0 z-[50]" />

            <div className="relative w-full h-[250px] sm:h-[600px] md:h-[700px] md:px-0 px-6">
                {/* Camada preta fina */}
                <div className="absolute inset-0 bg-black/25 z-10" />

                {/* Imagem de fundo responsiva */}
                <Image
                    src="/grupo-parakunde-fundo.jpg"
                    alt="Grupo Parakunde"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center z-0"
                />
            </div>

            <Hire />
            <SongsPlataforms />
            <StayInside />
        </div>
    );
}
