// pages/index.js
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import React, { useState, useEffect } from 'react';
import Head from "next/head";



const Home = ()=>{

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products')
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

                    <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-28 h-28 sm:w-28 sm:h-28 rounded-full'
                        src='/6.png'
                    />
                    </div>


                    <p className="mt-4 px-32 text-3xl font-semibold tracking-tighter">
                      salnetx
                      </p>

                      {/* <p className="mt-8 sm:px-44 leading-10 text-4xl sm:text-4xl font-normal tracking-tighter">
                        <span className="underline leading-10 underline-offset-8	decoration-4 decoration-[#FFC98A]">Building</span> good Software, Products and Experience.
                      </p> */}

                      {/* <p className="mt-4 sm:px-64 mr-12 sm:mr-0 sm:leading-loose sm:text-lg text-xs font-normal tracking-tighter">
                      I'm a <span className="font-semibold">fullstack developer</span>, 9 - 9 <span className="font-semibold">remote</span> worker, community builder, and a <span className="font-semibold">solo</span> traveller. I love to build <span className="font-semibold">apps</span> that solve real life problems.
                      </p> */}


          <div className="flex mt-1 sm:mx-96 mx-16 mt-6 justify-center justify-around">

          <a target="_blank" href="https://x.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>          
          </a>

          <a target="_blank" href="https://twitter.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>          
          </a>

          <a target="_blank" href="https://twitter.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>          
          </a>

          <a target="_blank" href="https://twitter.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>          
          </a>

          

          </div>



                    </div>
                  </div>
              
                </div>
           


 {/* <div className="text-center m-8 sm:m-0 space-x-4 pb-12 sm:pb-16">
  <button onClick={()=>{location.assign('https://twitter.com/salnetx')}} className="border border-[#7e7e7e] bg-neutral-800 translate-y-1 text-neutral-100 text-sm font-bold py-3.5 px-6 rounded-2xl inline-flex items-center">
   <svg width={20} fill="white" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    &nbsp; &nbsp;<span className="text-sm">Follow on X</span>
  </button>
</div> */}

</section>



<div
     className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center "
>
   
   
    <div className='flex sm:px-60 px-2.5 items-center justify-center  pb-32'>
        <div className='grid sm:grid-cols-1 gap-x-8 gap-y-8'>
        {apiData.map((item, index) => (
          <div key={index}>
            <ProductCard index={index} des={item.des} color={item.color} name={item.name} route={item.route} image={item.image} earning={item.earning} />
          </div>
        ))}
        </div>
        </div>

<Footer />


{/* <hr className="hidden sm:block mx-5 sm:mt-32 sm:mb-0" />
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
</footer> */}
    </div>
    
    </div>
  );
}

export default Home;