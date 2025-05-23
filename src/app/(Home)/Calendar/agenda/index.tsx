import { groupByMonth } from '@/hooks';

interface EventProps {
    Data: string; // formato dd/mm/yyyy
    Local: string;
    Cidade: string;
    Horario: string; // formato HH:mm
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
                                                {isPast && '(Evento passado)'}
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
                                            <button
                                                type="button"
                                                disabled={isPast}
                                                className="bg-purple-900 hover:bg-purple-900/80 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-base"
                                            >
                                                Comprar Ingresso
                                            </button>
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
