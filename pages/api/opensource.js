const data = [
    {
      name: 'Apple Music Clone',
      route: '/xintent',
      image: '/xintent.webp',
      earning: '$0k/mo',
      des: 'Simplify Your Tweets! ¨ Generate custom Twitter links with prewritten text. ',
      color: '#f80000'
    },

    {
      name: 'Instagram Clone',
      route: 'https://gitsauce.site',
      image: '/xintent.webp',
      earning: '$null/mo',
      des: 'Watch All Streaming Platform from One Open Source Player. Coming Soon.',
      color: '#D8B3FE'
    }
    

  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  