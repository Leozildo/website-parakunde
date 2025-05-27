import { groupByMonth } from '@/hooks';

interface EventProps {
    Data: string;
    Local: string;
    Cidade: string;
    Horario: string;
    // Ingresso: string;
}

interface AgendaProps {
    data: EventProps[];
}

export default function Agenda({ data }: AgendaProps) {
    const groupedData = groupByMonth(data);

    const formatDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="space-y-12">
            {Object.entries(groupedData).map(
                ([month, items]: [string, EventProps[]]) => (
                    <div key={month}>
                        <h2 className="text-2xl font-bold mb-4 border-b border-purple-200 pb-2 text-purple-900 uppercase">
                            {month}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map((item, index) => {
                                const isoDate = item.Horario
                                    ? `${formatDate(item.Data)}T${item.Horario}`
                                    : `${formatDate(item.Data)}T23:59:59`; // Considera o fim do dia caso não tenha horário

                                const eventoDate = new Date(isoDate);
                                const isPast = eventoDate < new Date();

                                return (
                                    <div
                                        key={index}
                                        className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between"
                                    >
                                        <div className="flex flex-col gap-3 flex-1">
                                            <p className="text-sm md:text-lg">
                                                <strong className="text-purple-900 uppercase">
                                                    Data:
                                                </strong>{' '}
                                                {item.Data}
                                                {item.Horario &&
                                                    ` ${item.Horario}`}
                                            </p>
                                            {isPast && (
                                                <span className="text-red-600 text-xs">
                                                    (Evento já aconteceu!)
                                                </span>
                                            )}
                                            <p className="text-sm md:text-lg">
                                                <strong className="text-purple-900 text-sm md:text-lg uppercase">
                                                    Local:
                                                </strong>{' '}
                                                {item.Local}
                                            </p>
                                            <p className="text-sm md:text-lg">
                                                <strong className="text-purple-900 text-sm md:text-lg uppercase">
                                                    Cidade:
                                                </strong>{' '}
                                                {item.Cidade}
                                            </p>
                                        </div>

                                        {/* <div className="w-full md:w-auto">
                                            {isPast ? (
                                                <span
                                                    className="bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed text-xs md:text-base w-full block text-center"
                                                    title="Evento já aconteceu"
                                                >
                                                    Comprar Ingresso
                                                </span>
                                            ) : (
                                                <Link
                                                    href={item.Ingresso}
                                                    target="_blank"
                                                    className="bg-purple-900 hover:bg-purple-900/80 text-white font-bold py-2 px-4 rounded cursor-pointer text-xs md:text-base w-full block text-center"
                                                >
                                                    Comprar Ingresso
                                                </Link>
                                            )}
                                        </div> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
