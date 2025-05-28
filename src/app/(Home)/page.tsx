import { Hire } from './Hire';
import { SongsPlataforms } from './SongsPlataforms';
import { StayInside } from '../../components/StayInside';
import { Calendar } from './Calendar';
import { GroupPhoto } from '../../components/GroupPhoto';
import { Suspense } from 'react';
import { ScrollToElement } from '../../components/GroupPhoto/ScrollToElement';
import { Banner } from '@/components/banner';
import { AudioPlayer } from '@/components/music';

export default async function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div id="top" className="h-1 w-full absolute top-0 z-[50]" />

            <Banner />
            <Hire />
            <GroupPhoto />
            <Calendar />
            <SongsPlataforms />

            <AudioPlayer />

            <StayInside />

            <Suspense fallback={null}>
                <ScrollToElement />
            </Suspense>
        </div>
    );
}
