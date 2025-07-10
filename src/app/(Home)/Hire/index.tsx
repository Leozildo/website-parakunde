import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

export function Hire() {
    return (
        <section className="my-20 flex flex-col items-center justify-center gap-10 md:px-32 px-6 w-full">
            <div className="flex flex-col items-center justify-center md:mb-5">
                <p className="text-xl text-purple-900/80">NÃO PERCA TEMPO</p>
                <h1 className="text-3xl font-bold text-purple-900">
                    C O N T R A T E
                </h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center gap-10 md:gap-20">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="space-y-4">
                        <p className="text-xl font-bold text-purple-900 text-center">
                            Leozildo Barros
                        </p>
                        <Link
                            href="https://wa.me/5511999890103"
                            className="flex items-center justify-center gap-5 text-xl hover:opacity-50"
                            target="_blank"
                        >
                            <FaWhatsapp size={32} className="text-purple-900" />{' '}
                            (11) 99989-0103
                        </Link>
                        <Link
                            href="mailto:leozildo.barros@gmail.com"
                            className="flex items-center justify-start gap-1 hover:opacity-50"
                            target="_blank"
                        >
                            <IoIosSend
                                size={32}
                                className="text-purple-900 text-xl"
                            />{' '}
                            <span className="text-[18px]">
                                leozildo.barros@gmail.com
                            </span>
                        </Link>
                        <Link
                            href="mailto:grupoparakundeagenda@gmail.com"
                            className="flex items-center justify-start gap-1 hover:opacity-50"
                            target="_blank"
                        >
                            <IoIosSend
                                size={32}
                                className="text-purple-900 text-xl"
                            />{' '}
                            <span className="text-[18px]">
                                grupoparakundeagenda@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
