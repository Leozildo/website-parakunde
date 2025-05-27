import { MembersCard } from './card';

const members = [
    {
        name: 'Jonas',
        role: 'Vocal',
        birthday: '04 de fevereiro de 1985 (38 anos)',
        hobby: 'Jogar e assistir futebol',
        maritalStatus: 'Casado',
        favoriteFood: 'Arroz e feijão básico',
        img: '/jonas-parakunde.png',
    },
    {
        name: 'Billy',
        role: 'Vocal e Pandeiro',
        birthday: '30 de abril de 1981 (42 anos)',
        hobby: 'Viajar, assistir futebol, filmes e séries, tocar violão',
        maritalStatus: 'Casado',
        favoriteFood: 'Churrasco, caldos, sopas, massas',
        timeInGroup: '20 anos',
        img: '/billy-parakunde.png',
    },
    {
        name: 'Nobre',
        role: 'Tantan e Percussão',
        birthday: '04 de outubro de 1981 (42 anos)',
        hobby: 'Vídeo game, futebol',
        maritalStatus: 'Casado',
        favoriteFood: 'Churrasco e massas',
        timeInGroup: '12 anos',
        img: '/nobre-parakunde.png',
    },
    {
        name: 'Daniel Moreno',
        role: 'Voz e Violão',
        birthday: '24 de maio de 1984 (40 anos)',
        hobby: 'Vídeo game',
        maritalStatus: 'Solteiro',
        favoriteFood: 'Macarrão',
        img: '/daniel-parakunde.png',
    },
    {
        name: 'Rodrigo Moura',
        role: 'Voz e Cavaco',
        birthday: '06 de julho de 1985 (39 anos)',
        hobby: 'Música',
        maritalStatus: 'Casado',
        favoriteFood: 'Churrasco',
        img: '/rodrigo-parakunde.png',
    },
];

export function AboutIndividual() {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-purple-900 md:mb-10 mb-5 uppercase">
                Conheça o Grupo
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {members.map((i) => (
                    <MembersCard key={i.name} {...i} />
                ))}
            </div>
        </section>
    );
}
