import TeaserModal from '@/components/teaserModal';

export default function Teaser() {
    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-3xl font-bold text-purple-900 text-center md:mb-10 mb-5 uppercase">
                Conheça o Parakundê
            </h2>
            <p className="text-xl text-purple-900/80 mb-5 md:w-1/2 text-center">
                Assista ao teaser exclusivo e sinta a energia contagiante do
                samba que só o Parakundê entrega!
            </p>

            <TeaserModal />
        </section>
    );
}
