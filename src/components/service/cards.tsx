import Image from 'next/image';

import Find from "../../../public/imagens/find.png";
import Interview from "../../../public/imagens/interview.png";
import Meets from "../../../public/imagens/meets.png";
import Gift from "../../../public/imagens/gift.png";
import Recruting from "../../../public/imagens/recruting.png";

export default function Cards() {
  return (
    <div className="flex flex-row relative">
      <div className='w-11/12 flex flex-row mx-auto max-w-[1400px] mt-[140px] max-[1250px]:mt-[50px] max-[1550px]:mt-[200px] max-[1550px]:flex-col'>
        <div className='flex flex-row max-[910px]:flex-col mx-auto max-[910px]:w-full'>
          <div className='flex flex-row max-[550px]:flex-col max-[910px]:w-full max-[910px]:justify-between'>
            <div className="w-[201px] mb-auto flex flex-col justify-center mx-auto">
              <div className="flex mx-auto h-[160px] max-[1250px]:h-[120px]">
                <div>
                  <Image loading="lazy" src={Find} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-[30px] mt-6 h-[120px] max-[1550px]:h-full text-[#E7CA29] leading-[30px] max-[1550px]:text-center max-[600px]:text-[25px] max-[550px]:mt-2">
                  Recrutamento
                  <br />
                  e seleção.
                </p>
              </div>
            </div>
            <div className="w-[209px] mb-auto ml-[95px] max-[550px]:mt-8  flex flex-col max-[910px]:mx-auto max-[550px]:mx-auto justify-center">
              <div className="flex mx-auto h-[160px] max-[1250px]:h-[120px]">
                <div className='pt-2 max-[1550px]:pt-0'>
                  <Image loading="lazy" src={Interview} alt="" />
                </div>
              </div>
              <div className="flex ml-[20px] flex-col justify-center mx-auto">
                <p className="text-[30px] mt-6 h-[120px] max-[1550px]:h-full text-[#E7CA29] leading-[30px] max-[1550px]:text-center max-[600px]:text-[25px] max-[550px]:mt-2">
                  Entrevista de
                  <br />
                  desligamento.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[252px] mb-auto ml-[70px] flex flex-col max-[910px]:mx-auto max-[910px]:mt-8 justify-center max-[600px]:w-full">
            <div className="flex mx-auto h-[160px] max-[1250px]:h-[120px]">
              <div className='mt-3 max-[1550px]:mt-0'>
                <Image loading="lazy" src={Meets} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-[30px] mt-6 h-[120px] text-[#E7CA29] leading-[30px] max-[1550px]:text-center max-[600px]:text-[25px] max-[550px]:mt-2">
                One a one após 3
                <br />
                  meses do início do
                <br />
                colaborador.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row max-[550px]:flex-col max-[1550px]:mt-5 mx-auto max-[910px]:w-full max-[910px]:justify-between'>
          <div className="w-[260px] mb-auto ml-[85px] max-[1550px]:ml-0 flex flex-col max-[550px]:mx-auto justify-center max-[910px]:w-1/2 max-[600px]:w-full">
            <div className="flex mx-auto h-[160px] max-[1250px]:h-[120px]">
              <div className='mr-20 mt-7 max-[1550px]:mr-0 max-[1550px]:mt-0'>
                <Image loading="lazy" src={Gift} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-[30px] mt-6 h-[120px] max-[1550px]:h-full text-[#E7CA29] leading-[30px] max-[1550px]:text-center max-[600px]:text-[25px] max-[550px]:mt-2">
                Welcome kit
                <br />
                personalizado
                <br />
                (fazer diagnóstico)
              </p>
            </div>
          </div>
          <div className="w-[212px] mb-auto ml-[55px] max-[910px]:mr-0 max-[550px]:mx-auto max-[1550px]:mx-auto max-[910px]:w-1/2 max-[550px]:mt-8 flex flex-col justify-center max-[600px]:w-full">
            <div className="flex mx-auto h-[160px] max-[1250px]:h-[120px]">
              <div className='pt-10 max-[1550px]:pt-0'>
                <Image loading="lazy" src={Recruting} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[30px] mt-6 h-[120px] max-[1550px]:h-full text-[#E7CA29] leading-[30px] max-[1550px]:text-center max-[600px]:text-[25px] max-[550px]:mt-2">
                Recrutamento
                <br />
                Taylor Made
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};