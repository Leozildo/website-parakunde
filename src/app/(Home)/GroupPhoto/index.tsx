'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const images = [
    '/daniel-parakunde.png',
    '/billy-parakunde.png',
    '/jonas-parakunde.png',
    '/rodrigo-parakunde.png',
    '/nobre-parakunde.png',
];

const animation = { duration: 25000, easing: (t: number) => t };

// function formatNameFromUrl(url: string) {
//     const fileName = url.split('/').pop()?.replace('.png', '') || '';
//     const firstName = fileName.replace('-parakunde', '');
//     return firstName.charAt(0).toUpperCase() + firstName.slice(1);
// }

export function GroupPhoto() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        slides: {
            perView: 1.2,
            spacing: 10,
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: {
                    perView: 2,
                    spacing: 15,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: 3,
                    spacing: 20,
                },
            },
        },
    });

    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <div className="w-full space-y-4">
                <h2 className="text-xl md:text-3xl font-bold text-purple-900 uppercase text-center md:mb-10 uppercase">
                    Integrantes
                </h2>

                <div ref={sliderRef} className="keen-slider">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide flex flex-col items-center gap-3"
                        >
                            <Image
                                src={src}
                                alt={`Grupo Parakunde ${index + 1}`}
                                width={325}
                                height={400}
                                className="rounded-lg shadow-lg w-[325px] h-[400px] object-cover"
                            />
                            {/* <p className="text-center text-purple-900 font-medium uppercase text-xl">
                                {formatNameFromUrl(src)}
                            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
