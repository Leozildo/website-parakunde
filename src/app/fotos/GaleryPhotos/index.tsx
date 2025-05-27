'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FotoProps {
    lugar: string;
    data: string;
    estado: string;
    evento: string;
    url: string;
}

const SHEET_URL =
    'https://opensheet.vercel.app/1h3Bxmr6Ops3UXuTJtA82FEKC_hQkhqYDdcpyqRpByd8/1';

export function GaleryPhotos() {
    const [fotos, setFotos] = useState<FotoProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    // Detectar tamanho da tela e ajustar itens por página
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth < 768;
                setItemsPerPage(isMobile ? 10 : 20);
            }
        };

        updateItemsPerPage(); // primeira execução
        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    // Fetch dos dados da planilha
    useEffect(() => {
        async function fetchFotos() {
            try {
                const res = await fetch(SHEET_URL);
                if (!res.ok) {
                    throw new Error('Erro ao buscar dados da planilha');
                }
                const data = await res.json();
                setFotos(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Erro desconhecido');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchFotos();
    }, []);

    const totalPages = Math.ceil(fotos.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentFotos = fotos.slice(startIndex, startIndex + itemsPerPage);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full px-6 md:px-32 my-20 md:my-30">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex text-center items-center justify-center px-6 md:px-32 my-20 md:my-30">
                <p className="text-red-600 text-xl md:text-3xl">
                    Ocorreu um erro ao carregar as imagens! Tente novamente mais
                    tarde!
                </p>
            </div>
        );
    }

    return (
        <section className="w-full my-10 md:my-20 md:px-32 px-6 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-purple-900 md:mb-10 mb-5">
                Galeria de Fotos
            </h1>

            <div className="flex items-center justify-center flex-wrap gap-7">
                {currentFotos.map((foto, index) => (
                    <div
                        key={`${foto.url}-${index}`}
                        className="flex flex-col items-center justify-center max-w-[300px]"
                    >
                        <div className="w-[300px] h-[300px] relative rounded-xl overflow-hidden">
                            <Image
                                src={foto.url}
                                alt={`${foto.evento} - ${foto.lugar}`}
                                fill
                                className="object-cover"
                                priority={index < 3}
                            />
                        </div>
                        <p className="text-xl text-purple-900 max-w-[300px] font-bold pt-3 text-center">
                            {foto.evento}
                        </p>
                        <div className="flex gap-2 text-purple-900/80 text-center">
                            <span>
                                {foto.lugar} - {foto.estado}
                            </span>
                            {/* <span>
                                -{' '}
                                {new Date(foto.data).toLocaleDateString(
                                    'pt-BR',
                                    {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    }
                                )}
                            </span> */}
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-10">
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded bg-purple-600 text-white disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed"
                    >
                        Anterior
                    </button>

                    <span className="text-purple-900 font-semibold">
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded bg-purple-600 text-white disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed"
                    >
                        Próxima
                    </button>
                </div>
            )}
        </section>
    );
}
