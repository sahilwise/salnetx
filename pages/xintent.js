// pages/index.js
import { useState } from 'react';
import Image from 'next/image';
import Footer from './components/Footer';
import Link from 'next/link';
// import Layout from './components/Layout';
import Head from 'next/head';

export default function Xintent() {
  const [tweetText, setTweetText] = useState('');
  const [twitterIntentCode, setTwitterIntentCode] = useState('');
  const [twitterIntentLink, setTwitterIntentLink] = useState('');

  const generateIntent = () => {
    const encodedText = encodeURIComponent(tweetText);
    const intentURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

    // Generate Twitter intent code
    const intentCode = `${intentURL}`;
    setTwitterIntentCode(intentCode);

    // Set Twitter intent link
    setTwitterIntentLink(intentURL);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(twitterIntentLink);
      alert('Link copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };

  return (

    <div title={'Twitter / X intent generator'} imgUrl={'https://salnet.xyz/xintent.png'} description = {'Generate Twitter or X intents with pre-filled text.'} xuser={'@salnetx'} weburl={'salnet.xyz/xintent'} summary={'twitter intent generator.'}>
      
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7123797226885173"
     crossorigin="anonymous"></script>
      </Head>
      
    <div className="sm:mx-96 mx-6 mt-8">

      <header className="mb-12">

        <div className="flex items-center">
        <Image src="/xintent.webp" alt="Twitter Logo" width={56} height={56} className="mr-2" />
          <h1 className="sm:text-2xl text-xl font-semibold"> X / twitter Intent Generator<br />by <Link href="https://salnet.xyz">@salnetx</Link></h1>
        </div>
      </header>

      <main>
        <textarea
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows="4"
          placeholder="Enter your tweet text..."
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        ></textarea>
        <button
          className="bg-[#1C9BEF] text-xl text-white py-3 px-6 rounded-full"
          onClick={generateIntent}
        >
          Generate Intent
        </button>

        {/* Display Twitter intent code */}
        {twitterIntentCode && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Twitter Intent Code</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {twitterIntentCode}
            </pre>

            {/* Copy Link button */}
            <button
              className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-2"
              onClick={copyToClipboard}
            >
              Copy Link
            </button>

            {/* Open Twitter button */}
            <a
              href={twitterIntentLink}
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
            >
              Open Twitter
            </a>
          </div>
        )}
      </main>

        {/* <div className="flex items-center sm:mt-20 mt-16">
          <Image src="/sal.png" alt="Twitter Logo" width={26} height={26} className="mr-2 rounded-full" />
          <h1 className="sm:text-4xl sm:text-2xl sm:text-xl text-lg font-normal"> Other Apps by <Link href="https://salnet.xyz">@salnetx</Link></h1>
        </div> */}

        <div className='mt-6 fixed bottom-0 right-0'>
        <Link href="https://www.producthunt.com/posts/xintnet?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-xintnet" target="_blank"><img alt="producthunt" className='mx-6 my-3' src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=434346&theme=light" style={{width: "200px", height: "54px"}} width="250" height="54" /></Link>
        </div>





        {/* <div className='grid sm:grid-cols-2 gap-x-5 gap-y-6 mt-6'>
              <div className='border px-6 pb-24 pt-4 rounded-2xl shadow-lg'>Coming Soon
              <p className='text-xs'>12th Jan 24</p>
              </div>
              <div className='border px-6 pb-24 pt-4 rounded-2xl shadow-lg'>Coming Soon
              <p className='text-xs'>13th Jan 24</p>
              </div>
              <div className='border px-6 pb-24 pt-4 rounded-2xl shadow-lg'>Coming Soon
              <p className='text-xs'>14th Jan 24</p>
              </div>

        </div> */}
        

        {/* Footer */}
        <footer>
        <div className="mx-auto max-w-5xl pt-8 py-20">

        <div className="flex mt-1 justify-start">

          <a className="pr-4 pt-0.5"  target="_blank" href="https://github.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          <a className="pr-5" target="_blank" href="https://www.producthunt.com/@salnetx">
          <svg fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM13.3345 12H10.501V9H13.3345C14.1629 9 14.8345 9.67157 14.8345 10.5C14.8345 11.3284 14.1629 12 13.3345 12ZM13.3345 7H8.50098V17H10.501V14H13.3345C15.2675 14 16.8345 12.433 16.8345 10.5C16.8345 8.567 15.2675 7 13.3345 7Z"></path></svg>
          </a>

          <a className="pr-5 pt-0.5" target="_blank" href="https://twitter.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>          
          </a>

          <a className="pr-5 pt-0.5" target="_blank" href="https://x.com/salnetx">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>          
          </a>          

        </div>
        
        <div className="fixed top-4 right-4 z-50">
    
        </div>


  </div>

  
</footer>
        {/* Footer */}

        <div className='fixed sm:top-0 sm:right-12 bottom-0 sm:mt-8 mb-8'>
        <div className="flex-none">
        <Link href="https://twitter.com/intent/tweet?text=%E2%9A%A0%EF%B8%8F%F0%9F%94%B4%20%0AWow%20%F0%9F%A4%A9%F0%9F%A4%AF%20This%20is%20really%20a%20%20time%20saver.%20%0A%0ASimplify%20Your%20Tweets!%20%F0%9F%90%A6%E2%9C%A8%20Generate%20custom%20Twitter%20links%20with%20prewritten%20text.%0A%0Acheck%20out%20this%20twitter%20%40x%20intent%20generator%20by%20%40salnetx%0A%F0%9F%91%89%20salnet.xyz%2Fxintent%20%23connect%20" className="text-xs font-bold px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#16161d] text-white flex gap-1">
        <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        <span className="text-xs">Tweet</span>
        </span>
        </Link>
    
    </div>        
    </div>
    </div>
    </div>
  );
}
