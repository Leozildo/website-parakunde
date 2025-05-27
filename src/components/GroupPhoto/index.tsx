'use client';

import { useEffect, useState } from 'react';
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

const animation = { duration: 22000, easing: (t: number) => t };

export function GroupPhoto() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: !isMobile,
        drag: isMobile,
        renderMode: 'performance',
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
        created(s) {
            if (!isMobile) {
                s.moveToIdx(5, true, animation);
            }
        },
        updated(s) {
            if (!isMobile) {
                s.moveToIdx(s.track.details.abs + 5, true, animation);
            }
        },
        animationEnded(s) {
            if (!isMobile) {
                s.moveToIdx(s.track.details.abs + 5, true, animation);
            }
        },
    });

    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <div className="w-full space-y-4">
                <h2 className="text-xl md:text-3xl font-bold text-purple-900 uppercase text-center md:mb-10">
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
                                alt={`Integrante Parakundê ${index + 1}`}
                                width={325}
                                height={400}
                                className="rounded-lg shadow-lg w-[325px] h-[400px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div id="agenda" />
        </section>
    );
}
