import Image from 'next/image';

import vector5 from '../../public/imagens/vector-5.png';
import vector6 from '../../public/imagens/vector-6.png';


export default function Differential() {
  return (
    <div id="differential" className="relative flex-row  overflow-hidden top-[-80px]"> 
      <div className="flex w-full mt-[210px] relative mx-auto max-w-[1800px]">
        <div className="absolute flex left-[-180px] top-[-480px]">
          <Image className="select-none" priority={true} src={vector5} alt=""/>
        </div>
      </div>
      <div className="w-11/12 max-w-[1510px] mx-auto bg-[#57B89B] rounded-[64px]">
        <div className='h-[1040px]'>

        </div>
      </div>
      <div className="flex w-full relative mx-auto max-w-[1800px]">
        <div className="absolute flex right-[-740px] bottom-[120px]">
          <Image className="select-none" priority={true} src={vector6} alt=""/>
        </div>
      </div>
    </div>
  );
}
