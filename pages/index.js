// pages/index.js
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="bg-gradient-to-b from-[#F5F5F5] via-[#F5F5F5] to-[#888]">
                <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                    <div className="flex flex-col sm:items-center items-start justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-28 h-28 sm:w-32 sm:h-32 rounded-full'
                        src='/sal.png'
                    />
                    </div>


                    <p className="mt-4 sm:px-32 text-black sm:text-3xl text-2xl font-normal tracking-tighter">
                        @salnetx
                      </p>

                      <p className="mt-8 sm:px-44 text-black leading-10 text-4xl sm:text-6xl font-normal tracking-tighter">
                        <span className="underline leading-10 underline-offset-8	decoration-4 decoration-[#FFC98A]">Building</span> good Software, Products and Experience.
                      </p>

                      <p className="mt-4 text-[#333] sm:px-64 mr-12 sm:mr-0 sm:leading-loose sm:text-lg text-xs font-normal tracking-tighter">
                      I'm a <span className="font-semibold">fullstack developer</span>, 9 - 9 <span className="font-semibold">remote</span> worker, community builder, and a <span className="font-semibold">solo</span> traveller. I love to build <span className="font-semibold">apps</span> that solve real life problems.
                      </p>
                    </div>
                  </div>
              
                </div>
           


 <div className="sm:text-center m-8 sm:m-0 space-x-4 pb-12 sm:pb-16">
  <button className="bg-[#16161d] translate-y-1 text-[#fff] hover:bg-amber-200 text-sm font-bold py-3.5 px-6  rounded-full inline-flex items-center">
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
</svg>

    &nbsp; &nbsp;<span className="text-sm">Newsletter</span>
  </button>
</div>

</section>









<div
     className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center "
    >



<div className="sm:mx-72 sm:mt-20 mt-8">
    
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border">
      <div className="flex flex-col items-center justify-between w-full lg:flex-row">
      <Image className="hidden sm:block" alt="logo" width="230" height="230" src="/mobiimg.png" />
        <div className="lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="text-left text-xl sm:mt-0 mt-6 font-semibold tracking-tight sm:text-2xl sm:leading-none max-w-lg mb-6">
            Github Daily
            </h2>
            <div className="text-left text-base md:text-lg">
              <p>Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
            <div className="text-sky-600 mt-4">
             <span className="bg-neutral-200 text-lg px-4 py-1.5 rounded-md">mywapp.site</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 sm:border-0 rounded-xl sm:rounded-0 border sm:mt-0 mt-8">
      <div className="flex flex-col items-center justify-between w-full lg:flex-row">
        <div className="lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
            <h2 className="text-left text-xl font-semibold tracking-tight sm:pt-0 pt-5 sm:text-2xl sm:leading-none max-w-lg mb-6">
             Sipson
            </h2>
            <div className=" text-left text-base md:text-lg">
              <p>Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
            <div className="text-sky-600 mt-4">
             <span className="bg-neutral-200 text-lg px-4 py-1.5 rounded-md">sipson.tech</span>
            </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
        
          </div>
        </div>
        <Image className="hidden sm:block" alt="logo" width="230" height="230" src="/mobiimg.png" />
      </div>
    </div>

</div>


<Footer />



    </div>
    
            
    </>
  );
}