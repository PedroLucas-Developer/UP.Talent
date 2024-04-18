import Image from "next/image";

import Navigation from "./navigation";

import Logo from '../../public/imagens/logo-header.png';
import vector from '../../public/imagens/vector-header.png';

export default function Header() {
  return (
    <div className="relative w-full flex justify-center overflow-x-hidden">
      <div className="flex w-full relative max-w-[1800px] h-[278px]">
        <div className="absolute left-[170px] bottom-[90px]  z-30 max-[1500px]:left-8">
          <Image priority={true} src={Logo} alt="Up Talent"/>
        </div>
        <Navigation 
          UlStyles="flex relative pt-10 px-5 w-full ml-auto max-w-[951px] flex-row z-30 justify-between"
          Texto="text-[20px] font-bold leading-[24px] text-[#291234]" 
        />
        <div className="absolute flex right-[-14rem] top-0 z-0">
          <Image className="select-none" priority={true} src={vector} alt=""/>
        </div>
      </div>
    </div>
  );
}
