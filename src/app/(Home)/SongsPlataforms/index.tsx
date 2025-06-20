import Link from 'next/link';
import { FaSpotify, FaDeezer, FaApple, FaYoutube } from 'react-icons/fa';
import { TbBrandAmazon } from 'react-icons/tb';

const plataforms = [
    { name: 'Spotify', icon: <FaSpotify size={40} />, id: 1, link: '' },
    { name: 'Deezer', icon: <FaDeezer size={40} />, id: 2, link: '' },
    { name: 'Apple Music', icon: <FaApple size={40} />, id: 3, link: '' },
    {
        name: 'Youtube',
        icon: <FaYoutube size={40} />,
        id: 4,
        link: 'https://www.youtube.com/@grupo.parakunde',
    },
    {
        name: 'Amazon Music',
        icon: <TbBrandAmazon size={40} />,
        id: 5,
        link: '',
    },
];

export function SongsPlataforms() {
    return (
        <section className="bg-purple-900 w-full mb-10 p-10">
            <div className="md:px-32 px-6 w-full flex flex-col md:flex-row items-center justify-between flex-wrap gap-6">
                {plataforms.map((plataform) => (
                    <Link
                        key={plataform.id}
                        href={plataform.link}
                        target="_blank"
                        className="flex items-center font-bold text-white hover:opacity-30 justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                        {plataform.icon}
                        <span className="text-white text-2xl">
                            {plataform.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
