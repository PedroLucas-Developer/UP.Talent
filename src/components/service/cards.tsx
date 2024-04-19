import Card from './card';

import Find from "../../../public/imagens/find.png";
import Interview from "../../../public/imagens/interview.png";
import Meets from "../../../public/imagens/meets.png";
import Gift from "../../../public/imagens/gift.png";
import Recruting from "../../../public/imagens/recruting.png";

export default function Cards() {
  return (
    <div className="flex flex-row relative">
      <div className='w-full mt-[9rem] mx-auto max-w-[1450px] flex flex-row max-[1250px]:mt-10 max-[1500px]:flex-col'>
        <div className='flex flex-row w-[830px] mx-auto justify-between max-[1500px]:w-11/12 max-w-[900px] max-[820px]:flex-col'>
          <div className='flex flex-row mr-auto w-[519px] max-[1500px]:w-2/3 max-[820px]:w-full max-[820px]:mx-auto justify-between max-[450px]:flex-col max-w-[600px] max-[450px]:w-[320px]'>
            <div className='max-[1500px]:w-1/2 max-[450px]:mx-auto'>
              <Card full='w-[201px]' Img={Find}>
                Recrutamento
                <br />
                e seleção.
              </Card>
            </div>
            <div className='max-[1500px]:w-1/2 max-[450px]:mx-auto'>
              <Card full='w-[209px]' Img={Interview}>
                Entrevista de
                <br />
                desligamento.
              </Card>
            </div>
          </div>
          <div className='flex max-[1500px]:w-1/3 mx-auto max-[820px]:w-[320px]'>
            <Card full='w-[260px] mx-auto' Img={Meets}>
              One a one após 3
              <br />
              meses do início do
              <br />
              colaborador.
            </Card>
          </div>
        </div>
        <div className='flex flex-row w-[532px] ml-auto justify-between max-[1500px]:mx-auto max-[1500px]:w-11/12 max-w-[600px] max-[450px]:flex-col max-[450px]:w-[320px]'>
          <div className='max-[1500px]:w-1/2 max-[450px]:mx-auto'>
            <Card full='w-[260px]' Img={Gift}>
              Welcome kit
              <br />
              personalizado
              <br />
              (fazer diagnóstico)
            </Card>
          </div>
          <div className='max-[1500px]:w-1/2 max-[450px]:mx-auto'>
            <Card full='w-[212px]' Img={Recruting}>
              Recrutamento
              <br />
              Taylor Made
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};