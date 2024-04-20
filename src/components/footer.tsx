import Image from "next/image";

import Navigation from "./navigation";

import Logo from '../../public/imagens/logo-footer.png';
import Facebook from '../../public/imagens/facebook.png';
import Instagram from '../../public/imagens/instagram.png';
import Linkdin from '../../public/imagens/linkedin.png';

export default function Footer() {
  return (
    <div className="max-w-[1600px] mx-auto pt-[6rem] px-8 relative z-20 max-[430px]:px-2">
      <div className="flex w-full flex-row justify-between max-[700px]:flex-col">
        <div className="w-full flex flex-col justify-center">
          <div className="pb-[30px] flex max-[700px]:justify-center max-[1100px]:pb-[10px]">
            <a href="#home">
              <Image loading="lazy" src={Logo} alt="Up Talent"/>
            </a>
          </div>
          <div className="w-full flex mx-auto max-[700px]:max-w-[550px]">
            <Navigation 
              UlStyles="flex w-full max-w-[1044px] flex-row justify-between max-[1100px]:justify-start gap-4 max-[700px]:justify-center max-[1100px]:flex-wrap"
              Texto="text-[18px] leading-[24px] text-[#1B0E27] hover:font-bold"/>
          </div>
        </div>
        <div className="max-w-[263px] w-full flex self-end flex-row justify-between max-[1400px]:pl-8 max-[700px]:mt-8 max-[700px]:pl-0 max-[1050px]:mx-auto">
          <a href="https://www.facebook.com/" target="_blank" rel='noopener'>
            <Image loading="lazy" src={Facebook} className='cursor-pointer transition-transform transform hover:scale-110' alt="Facebook"/>
          </a>
          <a href="https://www.instagram.com/uptalentrh/" target="_blank" rel='noopener'>
            <Image loading="lazy" src={Instagram} className='cursor-pointer transition-transform transform hover:scale-110' alt="Instagram"/>
          </a>
          <a href="https://www.linkedin.com/company/uptalentrh/" rel='noopener' target="_blank">
            <Image loading="lazy" src={Linkdin} className='cursor-pointer transition-transform transform hover:scale-110' alt="Linkedin"/>
          </a>
        </div>
      </div>
      <div className="w-full mt-[40px] pb-8">
        <p className="text-[12px] leading-[40px] text-[#291234] text-center">
          Copyright © 2022 Up Talent
        </p>
      </div>
    </div>
  );
}
