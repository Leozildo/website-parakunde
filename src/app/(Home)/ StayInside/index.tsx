import Image from 'next/image';

export function StayInside() {
    return (
        <section className="w-full my-10 md:px-32 px-6 flex items-center justify-center flex-col">
            <p className="text-2xl md:text-xl font-bold text-purple-200 ">
                Faça o pré-save
            </p>
            <h2 className="text-2xl md:text-3xl text-purple-900 pb-10 font-semibold">
                Fique por dentro das novidades
            </h2>
            <div>
                <div>
                    <Image
                        src="/pre-save.jpg"
                        alt=""
                        width={1280}
                        height={426}
                    />
                </div>
            </div>
        </section>
    );
}
