// pages/index.js
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import React, { useState, useEffect } from 'react';
import Head from "next/head";


const OpenSource = ()=>{

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/opensource')
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <div imgUrl={'https://www.salnet.xyz/sal.png'} title={'salnetx'} description = {'I am a fullstack developer, 9 - 9 remote worker, community builder, and a solo traveller. I love to build apps that solve real life problems.'} xuser={'@salnetx'} weburl={'salnet.xyz'} summary={'Hi there. This is Sal.'}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7123797226885173"
     crossorigin="anonymous"></script>
      </Head>
      <section>
                <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                    <div className="flex flex-col sm:items-center items-start justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-28 h-28 sm:w-32 sm:h-32 rounded-full'
                        src='/5.png'
                    />
                    </div>


                    <p className="mt-4 sm:px-32 sm:text-3xl text-2xl font-normal tracking-tighter">
                        @salnetx
                      </p>

                      
                    </div>
                  </div>
              
                </div>
           


 <div className="sm:text-center m-8 sm:m-0 space-x-4 pb-12 sm:pb-16">
  <button onClick={()=>{location.assign('https://twitter.com/salnetx')}} className="bg-[#16161d] translate-y-1 text-neutral-100 hover:bg-black text-sm font-bold py-3.5 px-6  rounded-xl inline-flex items-center">
   <svg width={20} fill="white" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
   </svg>
   &nbsp; &nbsp;<span className="text-lg">Follow on Github</span>
  </button>
</div>

</section>



<div
     className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center "
>
   
   
    <div className='flex sm:px-60 px-2.5 items-center justify-center  pb-32'>
        <div className='grid sm:grid-cols-2 gap-x-8 gap-y-8'>
        {apiData.map((item, index) => (
          <div key={index}>
            <ProductCard index={index} des={item.des} color={item.color} name={item.name} route={item.route} image={item.image} earning={item.earning} />
          </div>
        ))}
        </div>
        </div>


        <h3 onClick={()=>{location.assign('/')}} className="text-2xl">❮ back</h3>

<Footer />


<hr className="hidden sm:block mx-5 sm:mt-32 sm:mb-0" />
<footer className="pb-16 sm:pb-6">
<div className="max-w-screen-xl px-4 sm:pt-8 pt-4 mx-auto sm:px-6 lg:px-8">
<div className="sm:flex sm:items-center sm:justify-between">
<div className="flex sm:justify-center justify-start sm:justify-start">
  <h1 className="text-2xl font-semibold">Salnetx</h1>
</div>

<p className="mt-4 text-sm sm:text-center text-left lg:text-right lg:mt-0">
&copy; salnet &nbsp; &nbsp; <Link href="/refund">Refund</Link> &nbsp; <Link href="/terms">Terms</Link> &nbsp; <Link href="/privacy">Privacy</Link> &nbsp; &nbsp; <Link href="/support">Support</Link>
</p>
</div>
</div>
</footer>
    </div>
    
    </div>
  );
}

export default OpenSource;