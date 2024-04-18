import Image from 'next/image';

import Vector1 from '../../public/imagens/vector-1.png';
import Vector2 from '../../public/imagens/vector-2.png';
import Vector3 from '../../public/imagens/vector-3.png';

export default function Home() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden top-[-87px] max-[1250px]:mt-[80px]">
      <div className="flex w-full relative max-w-[1800px] h-screen">
        <div className="absolute h-[1909px] flex left-[-660px] top-0 max-[1680px]:left-[-1000px]">
          <Image className="select-none" priority={true} src={Vector1} alt=""/>
        </div>
        <div className='h-[462px] w-[548px] absolute right-[255px] top-[133px] max-[1400px]:right-[180px] '>
          <div>
            <div className='pt-3'>
                <p className='text-[60px] font-bold leading-[60px] text-[#291234]'>
                  Talentos que voam, para sua empresa decolar.
                </p>
            </div>
            <div className='pt-16 max-w-[469px]'>
                <p className='text-[30px] leading-[40px] text-[#291234]'>
                  Recrutamos o que há de melhor no mercado digital para seu negócio voar alto.
                </p>
            </div>
          </div>
          <div className='absolute right-2 bottom-0  h-[34px]'>
            <Image priority={true} src={Vector3} alt=""/>
          </div>
        </div>
        <div className="absolute flex right-[-320px] h-[528px] top-[60px]">
          <Image className="select-none" priority={true} src={Vector2} alt=""/>
        </div>
      </div>
    </div>
  );
}
