import Image from 'next/image';

import Vector from '../../../public/imagens/vector-11.png';
import Caledar from '../../../public/imagens/calendar.png';
import Fee from '../../../public/imagens/fee.png';
import Hub from '../../../public/imagens/hub.png';

export default function Contract() {
  return (
    <div  className="relative flex justify-center flex-col">
      <div className='pt-[300px] relative mx-auto max-[370px]:pt-[180px]'>
        <div id='Contract' className='relative max-[1250px]:pt-14 max-[400px]:pt-0 mx-auto max-[600px]:bg-[#df887c]'>
          <p className="text-[60px]  max-[800px]:w-10/12 mx-auto font-bold leading-[50px] text-[#291234] text-center mb-[10px] max-[800px]:text-[55px] max-[400px]:text-[45px]">
            Modelos de contratação
          </p>
          <div className='mt-6 flex relative justify-center'>
            <Image loading="lazy" src={Vector} alt='' />
          </div>
        </div>
      </div>
      <div className='max-[1250px]:bg-[#df887c] pb-[150px]'>
        <div className='pt-[220px] relative mx-auto w-11/12 max-w-[1270px] max-[800px]:pt-[100px]'>
          <div className='flex w-full flex-row justify-between max-[1250px]:flex-col'>
            <div className='flex flex-row justify-between w-[812px] max-[1250px]:w-full max-[800px]:flex-col'>
              <div className="w-[272px] mb-auto flex flex-col justify-center max-[1250px]:w-1/2 max-[800px]:w-full">
                <div className="flex mx-auto">
                  <div className='h-[280px]'>
                    <Image loading="lazy" src={Caledar} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-center mx-auto">
                  <p className="text-[40px] text-[#FFFFFF] leading-[40px] font-bold text-center">
                    Job Pontual
                  </p>
                  <p className="text-[30px] mt-12 text-[#FFFFFF] leading-[40px] text-center">
                    Contrato pot vaga
                  </p>
                </div>
              </div>
              <div className="w-[353px] mb-auto flex flex-col justify-center max-[1250px]:w-1/2 max-[800px]:w-full max-[800px]:pt-10">
                <div className="flex mx-auto">
                  <div className='h-[280px]'>
                    <Image loading="lazy" src={Fee} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-center mx-auto">
                  <p className="text-[40px] text-[#FFFFFF] leading-[40px] font-bold text-center">
                    Fee por período
                  </p>
                  <p className="text-[30px] mt-12 text-[#FFFFFF] leading-[40px] text-center">
                    Com a quantidade de
                    <br />
                    vagas a combinar
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[353px] mb-auto flex flex-col justify-center max-[1250px]:pt-10 max-[1250px]:w-full">
              <div className="flex mx-auto">
                <div className='pt-4 h-[280px]'>
                  <Image loading="lazy" src={Hub} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-[40px] text-[#FFFFFF] leading-[40px] font-bold text-center">
                  Hub dedicado
                </p>
                <p className="text-[30px] mt-12 text-[#FFFFFF] leading-[40px] text-center">
                  para atender o RH da
                  <br />
                  empresa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
