import { About } from './About';
import { StayInside } from '../../components/StayInside';
import { Banner } from '@/components/banner';
import { AboutIndividual } from './AboutIndividual';

export default function Sobre() {
    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div id="top" className="h-1 w-full absolute top-0 z-[50]" />

            <Banner />
            <About />
            <AboutIndividual />

            <StayInside />
        </div>
    );
}
