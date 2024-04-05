// pages/index.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Layout from './components/Layout';

export default function Xintent() {
  const [tweetText, setTweetText] = useState('');
  const [twitterIntentCode, setTwitterIntentCode] = useState('');
  const [twitterIntentLink, setTwitterIntentLink] = useState('');

  const generateIntent = () => {
    const encodedText = encodeURIComponent(tweetText);
    const intentURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
    const intentCode = `${intentURL}`;
    setTwitterIntentCode(intentCode);
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
      

    <div className="sm:mx-96 mx-6 mt-8">

      <header className="mb-12">

        <div className="flex items-center">
          <h1 className="sm:text-2xl text-xl font-semibold"> X / twitter Intent Generator<br />by <Link href="https://twitter.com/salnetx">@salnetx</Link></h1>
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

        {twitterIntentCode && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Twitter Intent Code</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {twitterIntentCode}
            </pre>

            <button
              className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-2"
              onClick={copyToClipboard}
            >
              Copy Link
            </button>

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

        <div className="flex items-center sm:mt-20 mt-16">
          <h1 className="sm:text-4xl sm:text-2xl sm:text-xl text-lg font-normal"> Follow <Link href="https://twitter.com/salnetx">@salnetx</Link></h1>
       </div>
    </div>
    </div>
  );
}
