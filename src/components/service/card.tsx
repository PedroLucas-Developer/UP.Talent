import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
  Img: string | StaticImport;
  full: string;
  children: React.ReactNode;
}

export default function Card ({Img, full, children}: CardProps ) {
  return (
    <div className="flex flex-row w-full justify-center flex flex-col justify-center">
      <div className="flex mx-auto h-[160px]">
        <div className='pt-5'>
          <Image priority={true} src={Img} alt="" />
        </div>
      </div>
      <div className={"flex flex-col justify-center mx-auto" + full}>
        <p className="text-[30px] mt-6 h-[120px] text-[#E7CA29] leading-[30px] max-[1500px]:text-center max-[600px]:text-[25px] max-[1500px]:mt-0">
          {children}
        </p>
      </div>
    </div>
  )
};