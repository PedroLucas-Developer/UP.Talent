import Image from 'next/image';

import Vector1 from '../../public/imagens/vector-1.png';
import AboutUs from '@/components/home/about';
import Service from '@/components/service/service';

export default function Home() {
  return (
    <div className="relative flex justify-center flex-col top-[-87px] max-[1250px]:top-0">
      <div className="flex w-full relative mx-auto max-w-[1800px]">
        <div className="absolute h-[1909px] flex left-[-660px] top-0 max-[1680px]:left-[-1000px] max-[1250px]:hidden">
          <Image className="select-none" priority={true} src={Vector1} alt=""/>
        </div>
      </div>
      <AboutUs />
      <Service />
    </div>
  );
}
