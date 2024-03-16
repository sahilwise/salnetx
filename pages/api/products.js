const data = [
  {
    name: 'Open Source',
    route: '/opensource',
    image: '/github.png',
    earning: '$0k/mo',
    des: 'Check out all my OpenSource projects. Feel free to clone or fork any of them.',
    color: '#f80000'
  },

    {
      name: 'Xintent',
      route: '/xintent',
      image: '/xintent.webp',
      earning: '$0k/mo',
      des: 'Generate Twitter or X intents with pre-filled text. Generate your intent for free.',
      color: '#f80000'
    },

    {
      name: 'Gitsauce',
      route: 'https://gitsauce.site',
      image: '/xintent.webp',
      earning: '$null/mo',
      des: 'Gitsauce - Build any software in days, not months. Checkout gitsauce now.',
      color: '#D8B3FE'
    },

    {
      name: 'Envato',
      route: 'https://codecanyon.net/user/salnetx',
      image: '/envato.png',
      earning: '$null/mo',
      des: 'Check out my Envato portfolio to find cool projects with source code.'
    },

    

  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  