import { groupByMonth } from '@/hooks';
import Link from 'next/link';

interface EventProps {
    Data: string;
    Local: string;
    Cidade: string;
    Horario: string;
    Ingresso: string;
}

interface AgendaProps {
    data: EventProps[];
}

export default function Agenda({ data }: AgendaProps) {
    const groupedData = groupByMonth(data);

    // Função para converter "dd/mm/yyyy" para "yyyy-mm-dd"
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
                                const isoDate = `${formatDate(item.Data)}T${
                                    item.Horario
                                }`;
                                const eventoDate = new Date(isoDate);
                                const isPast = eventoDate < new Date();

                                return (
                                    <div
                                        key={index}
                                        className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex items-center justify-between"
                                    >
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm md:text-lg">
                                                <strong className="text-purple-900 uppercase">
                                                    Data:
                                                </strong>{' '}
                                                {item.Data} {item.Horario}{' '}
                                            </p>
                                            <span>
                                                {isPast &&
                                                    '(Evento já aconteceu!)'}
                                            </span>
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
                                        <div>
                                            {isPast ? (
                                                <span
                                                    className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed opacity-50 text-xs md:text-base"
                                                    title="Evento já aconteceu"
                                                >
                                                    Comprar Ingresso
                                                </span>
                                            ) : (
                                                <Link
                                                    href={item.Ingresso}
                                                    target="_blank"
                                                    className="bg-purple-900 hover:bg-purple-900/80 text-white font-bold py-2 px-4 rounded cursor-pointer text-xs md:text-base"
                                                >
                                                    Comprar Ingresso
                                                </Link>
                                            )}
                                        </div>
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
