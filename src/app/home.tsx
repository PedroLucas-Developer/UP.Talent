import Image from 'next/image';

import Vector1 from '../../public/imagens/vector-1.png';
import Vector2 from '../../public/imagens/vector-2.png';
import Vector3 from '../../public/imagens/vector-3.png';
import Vector4 from '../../public/imagens/vector-mobile.png';

export default function Home() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden top-[-87px] max-[1250px]:mt-[80px]">
      <div className="flex w-full relative max-w-[1800px] h-screen max-[1250px]:flex-col">
        <div className="absolute h-[1909px] flex left-[-660px] top-0 max-[1680px]:left-[-1000px] max-[1250px]:hidden">
          <Image className="select-none" priority={true} src={Vector1} alt=""/>
        </div>
        <div className='h-[462px] w-[548px] absolute right-[255px] top-[133px] max-[670px]:top-8 max-[670px]:w-10/12 max-[800px]:w-[400px] max-[400px]:left-6 max-[1400px]:right-[180px] max-[1250px]:left-8'>
          <div>
            <div className='pt-3'>
                <p className='text-[60px] font-bold leading-[60px] text-[#291234] max-[800px]:text-[45px] max-[400px]:leading-[34px] max-[400px]:text-[28px]'>
                  Talentos que voam, para sua empresa decolar.
                </p>
            </div>
            <div className='pt-16 max-w-[469px] max-[600px]:pt-8'>
                <p className='text-[30px] leading-[40px] text-[#291234] max-[600px]:text-[25px] max-[400px]:leading-[24px] max-[400px]:text-[18px]'>
                  Recrutamos o que há de melhor no mercado digital para seu negócio voar alto.
                </p>
            </div>
          </div>
          <div className='relative w-full h-[34px]'>
            <Image className='ml-auto mr-2 mt-14' priority={true} src={Vector3} alt=""/>
          </div>
        </div>
        <div className="absolute flex right-[-240px] h-[528px] top-[60px] z-10 min-[1251px]:hidden max-[670px]:top-[500px] max-[450px]:top-[550px] max-[550px]:right-[-200px] max-[400px]:top-[350px]">
          <Image className="select-none" priority={true} style={{objectFit: "contain"}} src={Vector4} alt=""/>
        </div>
        <div className="absolute flex right-[-320px] h-[528px] top-[60px] max-[670px]:top-[550px] max-[550px]:right-[-280px] max-[400px]:top-[360px]">
          <Image className="select-none" priority={true} src={Vector2} alt=""/>
        </div>
      </div>
    </div>
  );
}
