import Image from 'next/image';

import vector4 from '../../../public/imagens/vector-4.png';
import vectorService from '../../../public/imagens/vector-service.png';

export default function Service() {
  return (
    <div className="relative mx-auto w-full h-[600px] max-[670px]:mt-[270px] max-[400px]:mt-[50px] flex-row flex justify-center overflow-hidden ">
      <div className='w-[653px] mx-auto max-[1250px]:ml-8 max-[1250px]:w-2/3 max-[670px]:w-11/12 max-[670px]:mx-auto'>
        <div className='mt-[208px] mb-26'>
          <p className="text-[60px] font-bold leading-[50px] text-[#E7CA29] text-center mb-[10px] max-[670px]:text-[45px]">
            Serviços
          </p>
          <div className='mt-6 flex justify-center'>
            <Image src={vector4} alt='' />
          </div>
        </div>
        <div className='mt-[4.2rem] ml-[0.2rem]'>
          <p className="text-[30px] leading-[40px] text-[#000000] text-left mb-[10px] max-[670px]:text-[24px]">
            Uma consultoria em RH focada em recrutamento e seleção de profissionais da área digital.
          </p>
        </div>
      </div>
      <div className="flex w-full absolute max-w-[1800px] max-[1250px]:w-1/3">
        <div className="absolute flex right-[-580px] top-[-290px] max-[1250px]:right-[-1000px] max-[870px]:right-[-950px] max-[670px]:hidden">
          <Image className="select-none" priority={true} style={{objectFit: "contain"}} src={vectorService} alt=""/>
        </div>
      </div>
    </div>
  );
}
