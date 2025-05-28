import { useEffect, useRef, useState } from 'react';
import { HiPause, HiPlay } from 'react-icons/hi';

export function MiniAudioPlayer({
    title,
    subtitle,
    src,
}: {
    title: string;
    subtitle?: string;
    src: string;
}) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow w-full">
            <div>
                <p className="font-semibold text-purple-900">{title}</p>
                <p className="text-sm text-purple-900">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
                <audio ref={audioRef} src={src} preload="metadata" />
                <button
                    onClick={togglePlay}
                    className="text-purple-900 hover:text-purple-900/80 transition"
                    name={isPlaying ? 'Pausar' : 'Tocar'}
                    title={isPlaying ? 'Botão de Pausar' : 'Botão de Tocar'}
                >
                    {isPlaying ? <HiPause size={40} /> : <HiPlay size={40} />}
                </button>
            </div>
        </div>
    );
}
