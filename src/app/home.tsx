import Image from 'next/image';

import Vector1 from '../../public/imagens/vector-1.png';
import AboutUs from '@/components/home/about';
import Service from '@/components/service/service';

export default function Home() {
  return (
    <div id="home" className="relative w-full flex justify-center flex-col overflow-hidden top-[-87px] max-[1250px]:mt-[80px]">
      <div className="flex w-full relative mx-auto max-w-[1800px] max-[1250px]:flex-col ">
        <div className="absolute h-[1909px] flex left-[-660px] top-0 max-[1680px]:left-[-1000px] max-[1250px]:hidden">
          <Image className="select-none" priority={true} src={Vector1} alt=""/>
        </div>
        <AboutUs />
      </div>
      <Service />
    </div>
  );
}
