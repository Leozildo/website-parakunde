import { groupByMonth } from '@/hooks';

interface EventProps {
    Data: string;
    Local: string;
    Cidade: string;
}

interface AgendaProps {
    data: EventProps[];
}

export default function Agenda({ data }: AgendaProps) {
    const groupedData = groupByMonth(data);

    return (
        <div className="space-y-12">
            {Object.entries(groupedData).map(
                ([month, items]: [string, EventProps[]]) => (
                    <div key={month}>
                        <h2 className="text-2xl font-bold mb-4 border-b border-purple-200 pb-2 text-purple-900 uppercase">
                            {month}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-gray-200 rounded-lg shadow-md bg-white"
                                >
                                    <p className="text-lg">
                                        <strong className="text-purple-900 uppercase">
                                            Data:
                                        </strong>{' '}
                                        {item.Data}
                                    </p>
                                    <p className="text-lg">
                                        <strong className="text-purple-900 text-lg uppercase">
                                            Local:
                                        </strong>{' '}
                                        {item.Local}
                                    </p>
                                    <p className="text-lg">
                                        <strong className="text-purple-900 text-lg uppercase">
                                            Cidade:
                                        </strong>{' '}
                                        {item.Cidade}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
