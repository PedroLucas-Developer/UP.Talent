import Image from "next/image";

import Navigation from "./navigation";

import Logo from '../../public/imagens/logo-footer.png';
import Facebook from '../../public/imagens/facebook.png';
import Instagram from '../../public/imagens/Instagram.png';
import Linkdin from '../../public/imagens/linkedin.png';

export default function Footer() {
  return (
    <div className="max-w-[1600px] mx-auto px-[20px] relative z-50">
      <div className="flex w-full flex-row justify-between">
        <div className="w-full flex-col justify-center">
          <div className="pb-[30px]">
            <a href="#home">
              <Image src={Logo} alt="Up Talent"/>
            </a>
          </div>
          <div className="w-full">
            <Navigation 
              UlStyles="flex w-full max-w-[1044px] flex-row justify-between"
              Texto="text-[18px] leading-[24px] text-[#1B0E27]" />
          </div>
        </div>
        <div className="max-w-[263px] max-[1350px]:pl-8 w-full flex self-end flex-row justify-between">
          <a href="https://www.facebook.com/" target="_blank" rel='noopener'>
            <Image src={Facebook} alt="Facebook"/>
          </a>
          <a href="https://www.instagram.com/uptalentrh/" target="_blank" rel='noopener'>
            <Image src={Instagram} alt="Instagram"/>
          </a>
          <a href="https://www.linkedin.com/company/uptalentrh/" rel='noopener' target="_blank">
            <Image src={Linkdin} alt="Linkedin"/>
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
