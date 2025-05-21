import Agenda from './agenda';

export async function Calendar() {
    const url =
        'https://opensheet.elk.sh/1uHh61rZ5JCr12-rQz5kKOI1ECUW4mpt_aGwnIo5w3js/1';

    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();
    console.log(data);

    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex items-center justify-center flex-col">
            <div className="w-full space-y-4">
                <h2 className="text-3xl font-bold text-purple-900 text-center md:mb-5">
                    Agenda
                </h2>
                <Agenda data={data} />
            </div>
        </section>
    );
}
