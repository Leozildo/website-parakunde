import { groupByMonth } from '@/hooks';

interface EventProps {
    Data: string;
    Local: string;
    Cidade: string;
    Horario: string;
}

interface AgendaProps {
    data: EventProps[];
}

export default function Agenda({ data }: AgendaProps) {
    const groupedData = groupByMonth(data);

    const formatDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/');
        const paddedDay = day.padStart(2, '0');
        const paddedMonth = month.padStart(2, '0');
        return `${year}-${paddedMonth}-${paddedDay}`;
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
                                const eventoDate = new Date(
                                    `${formatDate(item.Data)}T00:00:00`
                                );

                                const Datenow = new Date();
                                const today = new Date(
                                    Datenow.getFullYear(),
                                    Datenow.getMonth(),
                                    Datenow.getDate()
                                );

                                const isPast = eventoDate < today;

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
