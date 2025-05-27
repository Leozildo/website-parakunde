'use client';

import { useEffect } from 'react';
export function Form() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
                    Contrate o Parakundê
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                    Preencha o formulário abaixo e entraremos em contato com
                    você rapidamente!
                </p>
            </div>

            <div
                data-tf-live="01JW9C4WRD85VCZ08ZTGV6ZREV"
                className="w-full max-w-3xl min-h-[600px]"
            />
        </section>
    );
}
