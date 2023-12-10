// pages/index.js
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="pb-12 bg-gradient-to-b from-[#015453] via-[#015453] to-[#2A6766]">
                <div class="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">

                    <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-32 h-32 rounded-full'
                        src='/salnetx.png'
                    />
                    </div>


                    <p class="mt-4 sm:px-32 text-white sm:text-3xl text-2xl font-normal tracking-tighter">
                        @salnetx 🏝️
                      </p>

                      <p class="mt-8 sm:px-44 text-white text-4xl sm:text-6xl font-normal tracking-tighter">
                        <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#FFC98A]">Building</span> good Apps, Products and Experience.
                      </p>

                      <p class="mt-8 text-white hidden sm:block sm:px-80 px-12 sm:leading-loose text-lg font-normal tracking-tighter">
                      I'm a <span className="font-semibold">fullstack developer</span>, 9 - 9 <span className="font-semibold">remote</span> worker, community builder, and a <span className="font-semibold">solo</span> traveller. I love to build <span className="font-semibold">apps</span> that solve real life problems.
                      </p>
                    </div>
                  </div>
              
                </div>
           


 <div className="text-center space-x-4 mt-6">
  <button className="bg-[#FFC98A] translate-y-1 text-[#015453] hover:bg-amber-200 sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clip-rule="evenodd" />
</svg>

    &nbsp; &nbsp;<span> Contact</span>
  </button>
</div>

</section>









<div
     className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center "
    >



<div className="sm:mx-72 sm:mt-20">
    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border">
      <div class="flex flex-col items-center justify-between w-full lg:flex-row">
      <Image className="hidden sm:block" alt="logo" width="230" height="230" src="/mobiimg.png" />
        <div class="lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            <h2 class="font-san text-left text-3xl sm:mt-0 mt-6 font-bold tracking-tight sm:text-4xl sm:leading-none max-w-lg mb-6">
            ytlink
            </h2>
            <div class="text-left text-base md:text-lg">
              <p>Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
            <div className="text-sky-600 mt-4">
             <span className="bg-neutral-200 text-sm px-4 py-1.5 rounded-md">Learn more</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 sm:border-0 rounded-xl sm:rounded-0 border sm:mt-0 mt-8">
      <div class="flex flex-col items-center justify-between w-full lg:flex-row">
        <div class="lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-left text-3xl font-bold tracking-tight sm:pt-0 pt-5 sm:text-4xl sm:leading-none max-w-lg mb-6">
             localup
            </h2>
            <div class=" text-left text-base md:text-lg">
              <p>Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
            <div className="text-sky-600 mt-4">
             <span className="bg-neutral-200 text-sm px-4 py-1.5 rounded-md">Learn more</span>
            </div>
            </div>
          </div>
          <div class="flex items-center space-x-3">
        
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