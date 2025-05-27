'use client';

import { useEffect, useState } from 'react';
import { FiRotateCcw } from 'react-icons/fi';

type Members = {
    name: string;
    role: string;
    birthday: string;
    hobby: string;
    maritalStatus: string;
    img: string;
    favoriteFood?: string;
    timeInGroup?: string;
};

export function MembersCard({
    name,
    role,
    birthday,
    hobby,
    maritalStatus,
    img,
    favoriteFood,
    timeInGroup,
}: Members) {
    const [flipped, setFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <div
            className="w-[260px] h-[360px] perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative w-full h-full transform-style preserve-3d transition-transform duration-700 ${
                    flipped ? 'flipped' : ''
                } group-hover:rotate-y-180`}
            >
                {/* Frente */}
                <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-md bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-70 object-cover"
                    />
                    <div className="p-1 text-center text-purple-900">
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="text-sm text-gray-700">{role}</p>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center text-xs text-gray-400 gap-1 animate-pulse">
                            <FiRotateCcw className="w-4 h-4" />
                            <span>
                                {isMobile
                                    ? 'Toque para ver mais'
                                    : 'Clique para ver mais'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Verso */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="flex flex-col justify-center items-center h-full p-4 text-sm text-purple-900 space-y-2 text-center">
                        <p>
                            🎂 <strong>{birthday}</strong>
                        </p>
                        <p>
                            ⚽ <strong>{hobby}</strong>
                        </p>
                        <p>
                            💍 <strong>{maritalStatus}</strong>
                        </p>
                        {favoriteFood && (
                            <p>
                                🍽️ <strong>{favoriteFood}</strong>
                            </p>
                        )}
                        {timeInGroup && (
                            <p>
                                🕰️ <strong>{timeInGroup} de grupo</strong>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
