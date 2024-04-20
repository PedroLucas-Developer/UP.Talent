import Image from 'next/image';

import vector5 from '../../public/imagens/vector-5.png';
import vector6 from '../../public/imagens/vector-6.png';
import vector7 from '../../public/imagens/vector-7.png';

export default function Differential() {
  return (
    <div id="differential" className="relative flex-row overflow-hidden top-[-200px] max-[1250px]:top-0"> 
      <div className="flex w-full relative mx-auto max-w-[1800px]">
        <div className="absolute flex left-[-180px] top-[-280px] max-[1700px]:left-[-350px] max-[1350px]:left-[-450px] max-[1350px]:top-[-300px] max-[1250px]:hidden">
          <Image className="select-none" loading="lazy" src={vector5} alt=""/>
        </div>
      </div>
      <div className="w-11/12 mt-[200px] max-w-[1510px] mx-auto bg-[#57B89B] rounded-[64px] max-[1250px]:my-20">
        <div className='h-[1040px] w-10/12 mx-auto max-[1250px]:h-full pb-10'>
          <div className='relative pt-[180px] max-[1250px]:pt-[50px]'>
            <p className="text-[60px] font-bold leading-[50px] text-[#FFFFFF] text-center mb-[10px] max-[800px]:text-[42px]">
              Nosso diferencial
            </p>
            <div className='mt-6 flex relative justify-center'>
              <Image loading="lazy" src={vector7} alt='' />
            </div>
          </div>
          <div className='pt-[100px] max-w-[778px] mx-auto max-[1250px]:pt-20'>
            <p className="text-[30px] leading-[40px] text-[#000000] max-[600px]:text-[20px] max-[1250px]:text-center">
              Uma consultoria de RH focada em recrutamento e seleção de profissionais da área digital. Prezamos pela qualidade da seleção, prazo e assertividade. Com passagens desde 2008, em grandes agências e consultorias sempre focada no digital como por exemplo: Predicta, Isobar e DBG. Com foco em R&S, estruturação do departamento de R.H, entrevistas de desligamentos, mapeamento de áreas, pesquisa de clima e qualidade de vida para os colaboradores.
            </p>
          </div>
          <div className='mt-[45px] h-[154px] bg-[#291234] max-w-[646px] mx-auto rounded-[100px] max-[600px]:h-[60px]'>
            <a href="#" className='cursor-poitner'>
              <button className='text-[60px] h-[154px] w-full font-bold leading-[50px] text-[#EABD11] max-[1250px]:text-[45px] max-[600px]:text-[30px] max-[600px]:h-[60px]'>
                Conheça mais
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full relative mx-auto max-w-[1800px]">
        <div className="absolute flex right-[-740px] bottom-[120px] max-[1700px]:right-[-950px] max-[1250px]:hidden">
          <Image className="select-none" loading="lazy" src={vector6} alt=""/>
        </div>
      </div>
    </div>
  );
}
