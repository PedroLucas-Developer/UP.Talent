import Image from 'next/image';

import Vector4 from '../../public/imagens/vector-4.png';
import Yo from '../../public/imagens/yo.png';
import Trip from '../../public/imagens/trip.png';
import Point from '../../public/imagens/point.png';

export default function Customers() {
  return (
    <div id='customers' className="relative flex justify-center flex-col top-[-87px]">
      <div className='relative pt-14'>
        <p className="text-[60px] font-bold leading-[50px] text-[#E7CA29] text-center mb-[10px]">
          Nossos clientes
        </p>
        <div className='mt-6 flex relative justify-center'>
          <Image loading="lazy" src={Vector4} alt='' />
        </div>
      </div>
      <div className='my-[4.5rem] mx-auto w-11/12 max-w-[1509px] border-[#EABD11] border-[5px] rounded-[69px]'>
        <div className='mx-auto w-11/12 my-[6.5rem] flex flex-row justify-between max-w-[1214px] max-[1250px]:flex-col'>
          <div className='flex w-2/3 flex-row justify-between max-[830px]:flex-col max-[1250px]:w-10/12 mx-auto' >
            <div className='my-auto max-[830px]:mx-auto max-[1250px]:pr-8 max-[830px]:pr-0'>
              <Image loading="lazy" src={Yo} alt='Yo' />
            </div>
            <div className='my-auto max-[830px]:my-20 max-[830px]:mx-auto'>
              <Image loading="lazy" src={Trip} alt='Trip Maker' />
            </div>
          </div>
          <div className='my-auto w-1/3 max-[1250px]:mx-auto max-[1250px]:pb-10 max-[830px]:w-10/12'>
            <Image className='ml-auto max-[830px]:mx-auto' loading="lazy" src={Point} alt='Point Media' />
          </div>
        </div>
      </div>
    </div>
  );
}
