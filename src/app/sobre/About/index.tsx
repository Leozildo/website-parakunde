export function About() {
    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-purple-900 md:mb-10 mb-5 uppercase">
                Sobre nós
            </h1>
            <div className="flex flex-col text-center md:text-left md:flex-row items-center justify-center md:justify-between md:gap-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/grupo-parakunde-estudio-2.png"
                    alt="Foto do grupo Parakundê juntos"
                    width={600}
                    height={600}
                    className="object-contain rounded-lg mb-10 md:mb-0"
                />
                <p className="text-purple-900 font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat perferendis porro possimus minima, explicabo cum,
                    voluptatum doloremque animi optio esse ex hic magni, amet
                    earum praesentium suscipit molestias non sapiente!
                    <br />
                    <br /> Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Suscipit voluptate rerum qui eos consequuntur ratione
                    consequatur cupiditate aliquid fugiat. Fugit corrupti iusto
                    dolore soluta deserunt voluptatem repellat ab consectetur
                    illum!
                    <br />
                    <br /> Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Quasi, asperiores, incidunt optio eligendi excepturi
                    laborum sed officia perspiciatis deleniti dolorem corporis
                    tempora commodi illum possimus neque perferendis soluta
                    quis! Dignissimos!
                    <br />
                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Laborum ipsa magni saepe ex. Autem, nobis dolorem
                    doloremque minima sunt eos dignissimos magni error dolorum
                    ipsam minus commodi adipisci veritatis distinctio!
                    <br />
                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Temporibus corrupti alias odit quas, labore quaerat
                    consectetur porro quod sint deserunt vero veritatis,
                    dignissimos exercitationem aut voluptates, velit fuga eaque?
                    Sapiente!
                </p>
            </div>
        </section>
    );
}
