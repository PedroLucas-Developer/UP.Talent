import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Header(){
  return (
    <div className='flex w-full justify-center relative z-40'>
      <div className="w-full relative flex flex-row justify-center">
        <div className="max-[1250px]:hidden w-full flex justify-center">
          <Desktop />
        </div>
        <div className="min-[1251px]:hidden flex w-full h-[100px]">
          <Mobile />
        </div>
      </div>
    </div>
  );
}