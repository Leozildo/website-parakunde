export function About() {
    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-purple-900 md:mb-10 mb-5 uppercase">
                Sobre nós
            </h1>
            <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
                <div className="flex flex-col text-center md:text-left md:flex-row items-center justify-center md:justify-between">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/grupo-parakunde-estudio-2.png"
                        alt="Foto do grupo Parakundê juntos"
                        width={600}
                        height={600}
                        className="object-contain rounded-lg mb-10 md:mb-0"
                    />
                    <p className="text-purple-900 font-semibold">
                        Parakundê grupo de pagode que surgiu na década de 90
                        representa o bom samba em forma de oração. Parakundê
                        significa ter habilidade para fazer algo ou fazer algo
                        bem-feito. E Isso é o que o grupo Parakunde faz de
                        melhor. Composto por integrantes que moram na região
                        metropolitana da grande São Paulo, mais precisamente em
                        Franco da Rocha, Francisco Morato e Caieiras.
                        <br />
                        <br /> O grupo Parakundê surge com uma estética
                        fortemente influenciada por artistas dos anos 90
                        particularmente nos grupos Fundo de Quintal, Grupo
                        Sensação, Negritude Jr e Exalta Samba.
                        <br />
                        <br /> Formada por cinco membros, o grupo iniciou seus
                        trabalhos há duas décadas e durante esse tempo gravaram
                        três trabalhos “Luzes de Artifício”, gravado em 2003,
                        “Pra ficar”, gravado em 2007 e mais recentemente em
                        2022, “Replay”.
                        <br />
                        <br /> O grupo surge com uma pegada de samba e pagode
                        mais romântico com toadas de canções do pagode
                        tradicional com um repertório mais moderno. Possui
                        grande experiência em palcos de grande porte e também em
                        pagode de mesa.
                        <br />
                        <br /> O grupo Parakundê tem uma veia mais vibrante e
                        uma música com muita emoção. O show traz uma verdadeira
                        celebração a música brasileira com uma identidade
                        própria.
                    </p>
                </div>
                <div className="flex flex-col-reverse text-center md:text-left md:flex-row items-center justify-center md:justify-between">
                    <p className="text-purple-900 font-semibold">
                        O Parakunde é mais que um grupo, é uma batida do
                        coração, um projeto com as melhores músicas da
                        atualidade que tocam com muita energia e muita raça.
                        <br />
                        <br />O grupo já participou de vários festivais, o mais
                        expressivo deles foi na rádio Band FM no Carioca Club,
                        em São Paulo, em 2014, ocupando o segundo lugar nesse
                        festival.
                        <br />
                        <br /> Faz parte do portfólio do conjunto abrir vários
                        shows dos grandes grupos e cantores do gênero, também já
                        tiveram músicas executada em rádios como Band 96,1 FM e
                        105,1 FM.
                        <br />
                        <br /> O grupo gravou seu primeiro DVD em abril de 2025,
                        com a música de trabalho de autoria de Renan Augusto
                        (que já compôs para grandes cantores como Thaeme e
                        Thiago, Luan Santana, Zé Neto e Cristiano e Maraia e
                        Maraisa) , “Eu fui para o pagode” que será executada na
                        rádio 105 FM e Ótima FM , no Vale Paraiba.
                        <br />
                        <br /> Parakundê é um grupo formado por jovens
                        talentosos que tem como premissa levar a alegria aos
                        corações de pessoas através da arte e boa música.
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/grupo-parakunde-show.png"
                        alt="Foto do grupo Parakundê juntos"
                        width={600}
                        height={600}
                        className="object-contain rounded-lg mb-10 md:mb-0"
                    />
                </div>
            </div>
        </section>
    );
}
