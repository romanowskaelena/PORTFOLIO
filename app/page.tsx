import Image from "next/image";



export default function Home() {
  return (
  //  bg:
  <div className="flex items-end justify-start h-screen w-screen relative bg-cover bg-[url('/assets/bg.jpg')] bg-left-top md:bg-left-top lg:bg-fixe">
      <div className="absolute inset-0 bg-black opacity-45"></div> 
  
    {/* див контент */}
    <div className="w-2/3 pl-[70px] pb-[70px] flex flex-col gap-[5px] z-[10] ">

      <h1 className="text-[50px] text-white ">
        Transforming ideas into <br></br>
        <span className="text-[#d20001] -500">Digital Reality</span>
      </h1>
      <p className="text-[16px] text-gray-200 max-w-[400px]">
      Development of clean semantic HTML/CSS code, as well as integration with various JavaScript frameworks. Transforming design layouts into functional web pages that look equally good on all devices and meet modern web development standards
      </p>
  </div>

  </div>
  );
}
