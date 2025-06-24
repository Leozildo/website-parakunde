'use client';

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function TeaserModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="bg-purple-900 hover:bg-purple-900/80 cursor-pointer text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
            >
                Assista ao teaser
            </button>

            {isOpen && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-6xl h-[60vh] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute cursor-pointer top-3 right-3 z-10 bg-black/70 hover:bg-black/90 p-2 rounded-full text-white"
                        >
                            <IoMdClose className="w-6 h-6" />
                        </button>

                        <video
                            className="w-full h-full object-contain bg-black"
                            controls
                            autoPlay
                            preload="metadata"
                            poster="/videos/teaser-thumb.png"
                        >
                            <source src="/videos/teaser.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}
