import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

interface EventProps {
    Data: string;
    Local: string;
    Cidade: string;
    Horario: string;
    // Ingresso: string;
}

export function groupByMonth(data: EventProps[]): Record<string, EventProps[]> {
    const groups: Record<string, EventProps[]> = {};

    data.forEach((item) => {
        const parsedDate = parse(item.Data, 'dd/MM/yyyy', new Date());
        if (!isNaN(parsedDate.getTime())) {
            const month = format(parsedDate, 'MMMM yyyy', { locale: ptBR });

            if (!groups[month]) {
                groups[month] = [];
            }

            groups[month].push(item);
        }
    });

    return groups;
}
