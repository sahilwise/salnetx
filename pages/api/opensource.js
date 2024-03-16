const data = [
    {
      name: 'Apple Music Clone',
      route: 'https://salnet.gumroad.com/l/applemusicui',
      image: '/applemusic.png',
      earning: '',
      des: 'Check out this awesome Apple Music clone using React Native and Tailwind Css.',
      color: '#f80000'
    },

    {
      name: 'Instagram Clone',
      route: 'https://salnet.gumroad.com/l/instagramui',
      image: '/instagram.png',
      earning: '',
      des: 'Check out this awesome Instagram clone using React Native and Tailwind Css.',
      color: '#D8B3FE'
    }
    

  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  