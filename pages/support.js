// pages/index.js

import Head from 'next/head';
import { useEffect } from 'react';

const Support = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        script.onload = () => {
          if (typeof Tally !== 'undefined') {
            Tally.loadEmbeds();
          }
        };
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div className='sm:mx-96 mx-4 sm:mt-20 mt-10'>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <iframe
        data-tally-src="https://tally.so/embed/wgGLYJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="509"
        title="Contact Salnet"
      />
    </div>
  );
};

export default Support;
