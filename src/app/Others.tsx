import Image from 'next/image';

import Vector1 from '../../public/imagens/vector-9.png';
import Contract from '@/components/Others/Contract';
import Contact from '@/components/Others/contact';

export default function Others() {
  return (
    <div className="relative flex justify-center flex-col top-[-87px] overflow-hidden">
      <div className="flex w-full w-full relative mx-auto max-w-[1800px]">
        <div className="absolute select-none flex w-[2530px] top-[-190px] left-[-360px] max-[1700px]:left-[-460px] max-[1600px]:left-[-560px] max-[1500px]:top-[-150px] max-[850px]:top-0 max-[1350px]:top-[-100px] max-[1100px]:left-[-200px] max-[1500px]:left-[-350px] max-[1350px]:left-[-300px] max-[1500px]:w-[140%] max-[800px]:w-[110%] max-[800px]:left-[-50px] max-[600px]:left-[-20px]">
          <Image className="select-none  w-[2530px] max-[1500px]:w-full" style={{objectFit: "contain"}}  priority={true} src={Vector1} alt=""/>
        </div>
      </div>
      <Contract />
      <Contact />
    </div>
  );
}
