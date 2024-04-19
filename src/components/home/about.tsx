import Image from 'next/image';

import Vector2 from '../../../public/imagens/vector-2.png';
import Vector3 from '../../../public/imagens/vector-3.png';
import Vector4 from '../../../public/imagens/vector-mobile.png';

export default function AboutUs() {
  return (
    <div id="home" className="relative mx-auto w-full flex justify-center overflow-hidden">
      <div className="flex w-full relative h-[1000px] max-[1250px]:h-[650px] max-[670px]:h-[1100px] max-[400px]:h-[1000px] max-w-[1800px] max-[1250px]:flex-col">
        <div className='h-[462px] w-[548px] absolute right-[255px] top-[133px] max-[670px]:top-8 max-[670px]:w-10/12 max-[800px]:w-[400px] max-[400px]:left-6 max-[1400px]:right-[180px] max-[1250px]:left-8'>
          <div className='flex flex-col'>
            <div className='pt-3 max-[670px]:pt-0'>
              <p className='text-[60px] font-bold leading-[60px] text-[#291234] max-[800px]:text-[45px] max-[400px]:leading-[34px] max-[400px]:text-[40px]'>
                Talentos que voam, para sua empresa decolar.
              </p>
            </div>
            <div className='pt-16 max-w-[469px] max-[600px]:pt-8'>
              <p className='text-[30px] leading-[40px] text-[#291234] max-[670px]:text-[25px] max-[400px]:leading-[24px]'>
                Recrutamos o que há de melhor no mercado digital para seu negócio voar alto.
              </p>
            </div>
          </div>
          <div className='relative w-full h-[34px]'>
            <Image className='ml-auto mr-2 mt-14' priority={true} src={Vector3} alt=""/>
          </div>
        </div>
        <div className="absolute flex right-[-240px] h-[528px] top-[60px] z-10 min-[1251px]:hidden max-[670px]:top-[500px] max-[450px]:top-[550px] max-[670px]:right-[-200px] max-[400px]:top-[400px]">
          <Image className="select-none" priority={true} style={{objectFit: "contain"}} src={Vector4} alt=""/>
        </div>
        <div className="absolute flex right-[-320px] h-[528px] top-[60px] max-[670px]:top-[550px] max-[670px]:right-[-280px] max-[400px]:top-[450px]">
          <Image className="select-none" priority={true} src={Vector2} alt=""/>
        </div>
      </div>
    </div>
  );
}
