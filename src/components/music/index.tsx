'use client';

import { useEffect, useRef, useState } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi';
import { MiniAudioPlayer } from './miniAudioPlayer';

function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, '0');
    return `${minutes}:${seconds}`;
}

export function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const time = Number(e.target.value);
        audio.currentTime = time;
        setCurrentTime(time);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onLoadedMetadata = () => setDuration(audio.duration);
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };

        audio.addEventListener('loadedmetadata', onLoadedMetadata);
        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('ended', onEnded);

        let raf: number;

        const update = () => {
            setCurrentTime(audio.currentTime);
            raf = requestAnimationFrame(update);
        };

        if (!audio.paused) {
            setIsPlaying(true);
            raf = requestAnimationFrame(update);
        }

        return () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('ended', onEnded);
            cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        let raf: number;

        if (isPlaying) {
            const update = () => {
                setCurrentTime(audio.currentTime);
                raf = requestAnimationFrame(update);
            };
            raf = requestAnimationFrame(update);
        }

        return () => {
            cancelAnimationFrame(raf);
        };
    }, [isPlaying]);

    return (
        <section className="my-10 md:my-20 flex flex-col items-center justify-center gap-10 md:px-32 px-6 w-full">
            <div className="flex flex-col items-center justify-center md:mb-5">
                <p className="text-xl font-bold text-purple-900/80 uppercase">
                    não perca tempo
                </p>
                <h2 className="text-xl md:text-3xl font-bold text-purple-900 uppercase">
                    escute a música nova
                </h2>
            </div>
            <div className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-6 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/audio/capa-musica.webp"
                    alt="Capa da música"
                    width={256}
                    height={256}
                    loading="lazy"
                    className="rounded-lg object-cover w-40 h-40 sm:w-1/2 sm:h-76"
                />

                <div className="flex flex-col justify-between w-full gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-purple-800">
                            Parakundê
                        </h2>
                        <p className="text-sm text-purple-600">
                            EU FUI PRO PAGODE: Ao Vivo 2025
                        </p>
                    </div>

                    <audio
                        ref={audioRef}
                        preload="auto"
                        src="/audio/eu-fui-pro-pagode.m4a"
                    />

                    {/* Barra de progresso */}
                    <div className="w-full flex items-center gap-2">
                        <span className="text-sm text-purple-700 w-10 text-right">
                            {formatTime(currentTime)}
                        </span>

                        <input
                            type="range"
                            ref={progressRef}
                            min={0}
                            max={duration || 0}
                            value={currentTime}
                            step={0.1}
                            onChange={handleSeek}
                            className="w-full accent-purple-700"
                            aria-label="Barra de progresso da música"
                        />

                        <span className="text-sm text-purple-700 w-10 text-left">
                            {formatTime(duration)}
                        </span>
                    </div>

                    <button
                        onClick={togglePlay}
                        className="flex items-center justify-center text-xl gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
                    >
                        {isPlaying ? (
                            <>
                                <HiPause size={40} />
                                Pausar
                            </>
                        ) : (
                            <>
                                <HiPlay size={40} />
                                Tocar
                            </>
                        )}
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-6 mt-10">
                <h3 className="text-xl md:text-2xl font-bold text-purple-900">
                    Ouça também:
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                    <MiniAudioPlayer
                        title="Cabeça Fraca"
                        subtitle="Retrô Romântico"
                        src="/audio/cabeca-fraca.mp3"
                    />

                    <MiniAudioPlayer
                        title="Joga no Pretinho"
                        subtitle="Pagodinho"
                        src="/audio/joga-pro-pretinho-master.mp3"
                    />
                </div>
            </div>
        </section>
    );
}
