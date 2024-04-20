'use client'
import { useState } from 'react';

import Image from 'next/image';


import Maps from '../../../public/imagens/map.png';
import vector from '../../../public/imagens/vector-4.png';
import vector10 from '../../../public/imagens/vector-10.png';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const Send = () => {
    if (validarEmail(email) && name != '' && tel != '') {
      alert('enviado');
      setEmail('');
      setName('');
      setTel('');
    } else {
      alert('Por favor, insira todas as informacoes válidas.');
    }
  };


  const validarEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div  className="relative pb-20 flex justify-center flex-col">
      <div className='w-11/12 max-w-[1510px] mx-auto bg-[#291234] rounded-[64px] max-[1250px]:w-full max-[1250px]:mt-[-50px]'>
        <div id='Contact' className='relative mt-[145px]'>
          <p className="text-[60px] font-bold leading-[50px] text-[#DF887C] text-center mb-[10px] max-[800px]:text-[55px] max-[400px]:text-[45px]">
            Contato
          </p>
          <div className='mt-6 flex relative justify-center'>
            <Image loading="lazy" src={vector} alt='' />
          </div>
        </div>
        <div className='mt-[130px] w-11/12 mx-auto flex flex-row max-[830px]:flex-col max-[1250px]:mt-[50px]'>
          <div id='Form' className='w-[734px] flex flex-col w-1/2 max-[830px]:mx-auto max-[830px]:w-11/12'>
            <div className='max-w-[700px] w-full'>
              <p className="text-[30px] leading-[50px] text-[#FFFFFF] text-left mb-[10px] max-[950px]:text-[25px] max-[830px]:text-center">
                Vamos bater um papo? <b>Manda uma mensagem</b> 
                <b>pra gente e diz como podemos te ajudar hoje.</b>
              </p>
            </div>
            <div className='mt-[95px] max-[1250px]:mt-10'>
              <input value={name} onChange={(e) => setName(e.target.value)} className='w-full h-[50px] bg-[#FFFFFF] rounded-[10px] p-4' id="name" name="Nome" type="text" placeholder='Nome:' autoComplete="name" />
            </div>
            <div className='mt-[75px] max-[1250px]:mt-10'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-[50px] bg-[#FFFFFF] rounded-[10px] p-4' id="email" name="Email" type="email" placeholder='Email:' autoComplete="email" />
            </div>
            <div className='mt-[75px] max-[1250px]:mt-10'>
              <input value={tel} onChange={(e) => setTel(e.target.value)} className='w-full h-[50px] bg-[#FFFFFF] rounded-[10px] p-4' id="tel" name="Tel" type="text" placeholder='Telefone:' autoComplete="tel" />
            </div>
            <div className='mt-[75px] max-[830px]:mt-10'>
              <textarea id="mensagem" name="Mensagem" placeholder="Mensagem:"  autoComplete="off" className="w-full h-[302px] bg-[#FFFFFF] rounded-[10px] p-4">
              </textarea>
            </div>
            <div className='pt-6 mb-56 max-[830px]:mt-10 max-[830px]:mb-20' >
              <button onClick={Send} className='w-[188px] h-[54px] bg-[#57B89B] text-[22px] font-bold leading-[25px] rounded-[28px] text-[#1B0E27] text-center'>
                enviar
              </button>
            </div>
          </div>
          <div className='flex max-w-[700px] flex-col w-1/2 max-[830px]:w-11/12'>
            <div className='absolute w-[550px] max-[500px]:w-full max-[950px]:w-12/12 right-[10rem] bottom-[41.5rem] max-[1600px]:ml-10 max-[1600px]:relative max-[1600px]:bottom-0 max-[1600px]:right-0 max-[1600px]:left-20 max-[1420px]:left-0'>
              <div className='w-full'>
                <p className='text-[20px] leading-[25px] text-[#FFFFFF] text-left'>
                  Email
                </p>
                <p className='text-[30px] pt-2 font-bold leading-[50px] text-[#FFFFFF] text-left max-[950px]:text-[25px] max-[500px]:text-[20px] max-[350px]:text-[15px]'>
                  fabi@uptalentrh.com.br
                </p>
              </div>
              <div className='pt-16 w-full'>
                <p className='text-[20px] leading-[25px] text-[#FFFFFF] text-left'>
                  Endereço
                </p>
                <p className='text-[30px] pt-2 font-bold leading-[50px] text-[#FFFFFF] text-left max-[950px]:text-[25px] max-[500px]:text-[20px] max-[350px]:text-[15px]'>
                Avenida Lorem Ipsum, 000
                <br />
                00º andar – Vila Lorem Ipsum
                <br />
                00000-000 – São Paulo, SP
                </p>
              </div>
            </div>
            <div className='absolute right-[-3rem] bottom-[38rem] max-[1600px]:top-[-10rem] max-[1600px]:right-[-34rem] max-[1420px]:right-[-28rem] max-[1600px]:relative max-[950px]:hidden'>
              <Image loading="lazy" src={vector10} alt='' />
            </div>
            <div className='absolute right-10 bottom-16 max-[1600px]:relative max-[1600px]:right-[-7rem] max-[1100px]:right-[-2rem] max-[950px]:bottom-0 max-[950px]:top-20 max-[850px]:right-[-1rem]'>
              <Image loading="lazy" src={Maps} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
