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
  subtitle: `I'm Front-End developer`,
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
    img: 'projectblack.png',
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
