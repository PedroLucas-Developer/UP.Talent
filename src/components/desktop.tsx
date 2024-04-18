import Image from "next/image";

import Navigation from "./navigation";

import Logo from '../../public/imagens/logo-header.png';
import Vector from '../../public/imagens/vector-header.png';

export default function Desktop() {
  return (
    <div className="relative w-full flex justify-center overflow-x-hidden">
      <div className="flex w-full relative max-w-[1800px] h-[278px]">
        <div className="absolute left-[170px] bottom-[90px] max-[1500px]:left-8">
          <Image priority={true} src={Logo} alt="Up Talent"/>
        </div>
        <div className="absolute w-full right-0 ">
          <Navigation 
            UlStyles="flex relative pt-12 px-5 w-full ml-auto max-w-[990px] flex-row z-30 justify-between"
            Texto="text-[20px] font-bold leading-[24px] text-[#291234]" 
          />
          <div className="absolute flex right-[-14rem] top-0 z-0">
            <Image className="select-none" priority={true} src={Vector} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
