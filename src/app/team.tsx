import Image from 'next/image';

import Vector from '../../public/imagens/vector-team.png';
import Vector2 from '../../public/imagens/vector-8.png';
import Team1 from '../../public/imagens/perfil-1.png';
import Team2 from '../../public/imagens/perfil-2.png';

export default function Team() {
  return (
    <div id='Team' className="relative flex justify-center flex-col top-[-90px] overflow-hidden">
      <div className='flex w-full relative mx-auto max-w-[1800px]'>
        <div className='w-10/12 mx-auto flex justify-center flex-col'>
          <div className='relative pt-[4rem]'>
            <p className="text-[60px] font-bold leading-[50px] text-[#291234] text-center mb-[10px] max-[800px]:text-[45px] max-[400px]:text-[40px]">
              Conheça nossa equipe
            </p>
            <div className='mt-6 flex relative justify-center'>
              <Image loading="lazy" src={Vector} alt='' />
            </div>
          </div>
          <div className='w-full pt-[120px] mx-auto'>
            <div className='w-[941px] mx-auto flex flex-row justify-between max-[1250px]:w-full max-[550px]:flex-col'>
              <div className='flex flex-col w-[387px] mr-10 max-[1250px]:1/2 max-[550px]:mx-auto max-[550px]:w-10/12'>
                <div>
                  <Image loading="lazy" src={Team1} alt=""/>
                </div>
                <div className='pt-8'>
                  <p className='text-[30px] font-bold leading-[40px] text-[#291234] text-center max-[670px]:text-[25px] max-[550px]:text-[29px] mb-[10px]'>Fabiana Secchis</p>
                  <p className='text-[20px] leading-[40px] text-[#291234] text-center max-[670px]:text-[15px] max-[550px]:text-[20px] mb-[10px]'>
                    Sócia Diretora
                  </p>
                </div>
              </div>
              <div className='flex flex-col w-[387px] ml-10 max-[1250px]:1/2 max-[550px]:mx-auto max-[550px]:mt-20 max-[550px]:w-10/12'>
                <div>
                  <Image loading="lazy" src={Team2} alt=""/>
                </div>
                <div className='pt-8 w-full'>
                  <p className='text-[30px] font-bold leading-[40px] text-[#291234] text-center max-[670px]:text-[25px] max-[550px]:text-[29px] mb-[10px]'>Caroline Secchis</p>
                  <p className='text-[20px] leading-[40px] text-[#291234] text-center max-[670px]:text-[15px] max-[550px]:text-[20px] mb-[10px]'>
                    Consultora de Talentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex left-[-240px] h-[528px] top-0 max-[1500px]:left-[-350px] max-[1250px]:hidden">
          <Image className="select-none" loading="lazy" src={Vector2} alt=""/>
        </div>
      </div>
    </div>
  );
}
