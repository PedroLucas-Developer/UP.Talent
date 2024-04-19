import Image from 'next/image';

import vector4 from '../../../public/imagens/vector-4.png';
import vectorService from '../../../public/imagens/vector-service.png';
import Cards from './cards';

export default function Service() {
  return (
    <div id="serviços" className='relative mx-auto w-full'>
      <div className="relative mx-auto w-full flex-row flex justify-center">
        <div className='w-[651px] relative mx-auto max-[670px]:w-11/12'>
          <div className='relative pt-16 max-[400px]:pt-0'>
            <p className="text-[60px] font-bold leading-[50px] text-[#E7CA29] text-center mb-[10px] max-[800px]:text-[55px] max-[400px]:text-[50px]">
              Serviços
            </p>
            <div className='mt-6 flex relative justify-center'>
              <Image loading="lazy" src={vector4} alt='' />
            </div>
          </div>
          <div className='mt-[4.2rem] ml-[0.2rem]'>
            <p className="text-[30px] leading-[40px] text-[#000000] text-left mb-[10px] max-[1250px]:text-center max-[800px]:text-[25px]">
              Uma consultoria em RH focada em recrutamento e seleção de profissionais da área digital.
            </p>
          </div>
        </div>
        <div className="flex w-full absolute max-w-[1800px] max-[1250px]:hidden">
          <div className="absolute flex right-[-580px] top-[-440px]">
            <Image className="select-none" priority={true} style={{objectFit: "contain"}} src={vectorService} alt=""/>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
}
