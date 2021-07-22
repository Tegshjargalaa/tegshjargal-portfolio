import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tegshjargal | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Tegshjargal',
  subtitle: `I'm Software Developer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I am an IT professional with 9 years of combined experience in the IT industry, out of which 4 years was in the design and development of complex software systems experience.  ',
  paragraphTwo: 'I mostly focused on designing, developing, and implementing front-end applications and solutions using range of technologies and programming languages including JavaScript, Java, React, Spring, MySQL, Node JS and REST API.',
  paragraphThree: `I am eager to learn any new things, happy to share my knowledge and to help others. I am really optimistic person, so I can make a positive atmosphere in my team. `,
  resume: 'https://drive.google.com/file/d/1pM2tLI93LFUl3ALGWAPX5yIFswtonZzU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Angel Shop',
    info: `This project deals with developing an e-commerce website for Online Product Sale. It provides the user with a catalog of different product available for purchase in the store. In order to facilitate online purchase a shopping cart is provided to the user.`,
    info2: `Any member can register and view available products. Only registered member can purchase multiple products regardless of quantity.`,
    url: 'http://angel-shop.herokuapp.com/',
    repo: 'https://github.com/Tegshjargalaa/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Shopping Cart',
    info: `All-in-one shopping cart concept design. The page is clean and simple, and since it doesn't involve a lot of design elements, the entire layout is easy to understand.`,
    info2: `You can add desired products to the shopping cart and when you checkout the items will be stored in backend and you will be notified about your order detail.`,
    url: 'https://shopping-cart-react-test.herokuapp.com/',
    repo: 'https://github.com/Tegshjargalaa/shopping-cart-react', // if no repo, the button will not show up
  }

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tegshjargal.jambal@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'bitbucket',
      url: 'https://bitbucket.org/tegshjargal/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tegshjargal-jambal/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tegshjargalaa/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
