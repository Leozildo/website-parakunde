import Agenda from './agenda';

export async function Calendar() {
    const url =
        'https://opensheet.vercel.app/1EH3GDEjfE9ulaZSpHHi2ObrRdtL4QcnRRaWwouGSYMs/1';

    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <div className="w-full">
                <h2 className="text-xl md:text-3xl font-bold text-purple-900 text-center md:mb-10 mb-5 uppercase">
                    Agenda
                </h2>
                <Agenda data={data} />
            </div>
        </section>
    );
}
