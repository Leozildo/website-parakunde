import { Banner } from '@/components/banner';
import { Form } from './form';

export default function Contato() {
    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div id="top" className="h-1 w-full absolute top-0 z-[50]" />

            <Banner />
            <Form />
        </div>
    );
}
