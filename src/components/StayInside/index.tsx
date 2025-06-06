import Image from 'next/image';
import Link from 'next/link';

export function StayInside() {
    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <Link
                href="https://hypeddit.com/ldfse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-purple-900/80 uppercase hover:opacity-70 transition-opacity"
            >
                Faça o pré-save clicando aqui
            </Link>
            <h2 className="text-xl md:text-3xl text-purple-900 pb-10 font-semibold uppercase">
                Fique por dentro das novidades
            </h2>
            <div>
                {/**
                 * https://hypeddit.com/lm7obp
                 */}
                <Link
                    href="https://hypeddit.com/ldfse"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/pre-save.jpg"
                        alt="Pré-save da música"
                        width={1280}
                        height={426}
                        className="hover:opacity-90 transition-opacity"
                    />
                </Link>
            </div>
        </section>
    );
}
