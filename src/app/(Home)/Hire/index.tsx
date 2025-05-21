import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

export function Hire() {
    return (
        <section className="my-20 flex flex-col items-center justify-center gap-10 md:px-32 px-6 w-full">
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl text-purple-200">NÃO PERCA TEMPO</p>
                <h2 className="text-3xl font-bold text-purple-900">
                    C O N T R A T E
                </h2>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center gap-5 md:gap-15">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="space-y-2 text-left w-full">
                        <p className="text-xl font-bold text-purple-900">
                            Israel Pereira
                        </p>
                        <Link
                            href="https://wa.me/5511988929289"
                            className="flex  items-center justify-start gap-5 text-xl hover:opacity-50"
                            target="_blank"
                        >
                            <FaWhatsapp size={32} className="text-purple-900" />{' '}
                            (11) 98892-9289 (Shows)
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xl font-bold text-purple-900">
                            Daniel Silva
                        </p>
                        <Link
                            href="https://wa.me/5511910049353"
                            className="flex items-center justify-center gap-5 text-xl hover:opacity-50"
                            target="_blank"
                        >
                            <FaWhatsapp size={32} className="text-purple-900" />{' '}
                            (11) 91004-9353 (Imprensa)
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="space-y-2">
                        <p className="text-xl font-bold text-purple-900">
                            Leozildo Barros
                        </p>
                        <Link
                            href="https://wa.me/5511999890103"
                            className="flex items-center justify-center gap-5 text-xl hover:opacity-50"
                            target="_blank"
                        >
                            <FaWhatsapp size={32} className="text-purple-900" />{' '}
                            (11) 99989-0103 (Marketing)
                        </Link>
                    </div>
                    <div className="space-y-2 text-left w-full">
                        <p className="text-xl font-bold text-purple-900">
                            Leozildo Barros
                        </p>
                        <Link
                            href="mailto:grupoparakunde2021@gmail.com"
                            className="flex items-center justify-start gap-1 hover:opacity-50"
                            target="_blank"
                        >
                            <IoIosSend
                                size={32}
                                className="text-purple-900 text-xl"
                            />{' '}
                            <span className="text-[18px]">
                                grupoparakunde2021@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
