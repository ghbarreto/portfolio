export const logo = '/assets/images/logo.png';
export const aboutBanner = '/assets/images/about-banner.png';
export const projectTitle = ['Open Source Projects', 'Job History', 'Reach Me'];
export const kyteLogo = '/assets/images/kyte.png';
export const MH = '/assets/images/mousehaunt.png';
export const lugaroLogo = '/assets/images/lugaro.jpeg';

export const timelineHorizontal = [
  {
    title: 'Web Developer',
    company: 'Lugaro Jewellers',
    date: '2019',
    image: lugaroLogo,
    description:
      'Developed wireframes, site maps and content inventories for new website designs',
  },
  {
    title: 'Full-stack Dev',
    company: 'Mouse Haunt',
    date: '2021',
    image: MH,
    description:
      'Implemented inumerous pages included the store and career pages.',
  },
  {
    title: 'Full-stack Dev',
    company: 'Kyte',
    date: '2021',
    image: kyteLogo,
    description: 'Developed full-stack web applications using the MERN stack',
  },
];

export const projects = [
  {
    name: 'FFXIV-Info',
    description:
      'An app developed by me to help people know various features about the game Final Fantasy.',
    githubLink: 'https://github.com/ghbarreto/ffxiv-info',
    live: 'https://ffxiv-info.herokuapp.com/',
    date: 'July, 2021',
    images: [
      '/assets/images/ffxiv-info/server-list.png',
      '/assets/images/ffxiv-info/character-search.png',
      '/assets/images/ffxiv-info/table-items.png',
      '/assets/images/ffxiv-info/character-info.png',
    ],
    text: 'This application was created to help people search important information regarding their characters and the server they are playing in without having to navigate in multiple \n websites to try to find information.',
  },

  {
    name: 'covid-api',
    description:
      'An app developed by me to help people track covid growth in countries around the world.',
    githubLink: 'https://github.com/ghbarreto/covid-api',
    live: 'https://covid-api-checker.herokuapp.com/',
    date: 'June, 2021',
    images: [
      '/assets/images/covid-api/graphs.png',
      '/assets/images/covid-api/start.png',
      '/assets/images/covid-api/territories.png',
    ],
    text: 'During the pandemic, I was travelling in one of the worst countries to be in during covid, because of how that affected me daily, I decided to create a program so I could monitor how much covid cases increased, how many deaths per day and a few graphics.',
  },
  {
    name: 'Company App (Gas)',
    description:
      'An app for a company that sells gas in Brazil, it helps automating stock management.',
    githubLink: 'https://github.com/ghbarreto/gas-project',
    live: null,
    date: 'Aug, 2021',
    images: [
      '/assets/images/gas-company/pedidos.png',
      '/assets/images/gas-company/product.png',
    ],
    text: "Still barebones, my wifes' family has a company which sells gas, one day I decided to talk to my mother-in-law about her business and wether or not a website would help her attracting more clients, we ended up talking about inventory management and she told me they were still using pencil and paper to write their daily costs, so I decided to help her by automating that process.",
  },
  {
    name: 'my-portfolio',
    description:
      'Used to be my potfolio. Developed using Node.JS, MongoDB, and EJS for the front-end.',
    githubLink: 'https://github.com/ghbarreto/my-portfolio',
    live: 'https://ghbarreto-old.herokuapp.com/',
    date: 'Jan, 2019',
    images: [
      '/assets/images/old-portfolio/header.png',
      '/assets/images/old-portfolio/body.png',
      '/assets/images/old-portfolio/project1.png',
      '/assets/images/old-portfolio/project2.png',
      '/assets/images/old-portfolio/project3.png',
      '/assets/images/old-portfolio/github.png',
      '/assets/images/old-portfolio/form.png',
      '/assets/images/old-portfolio/footer.png',
    ],
    text: 'This was the first portfolio I ever designed, I am not a designer at all but it was a great experience trying to put things together on my own, fresh out of college I did not really know any big frameworks such as React or Vue, so I just gave a shot writting it on nodejs using a handlebar as the front-end, really great experience overall.',
  },
  {
    name: 'Multiple App',
    description:
      'An app that I developed that has a lot of small features like weather-app, fizzbuzz, to-do list.',
    githubLink: 'https://github.com/ghbarreto/web-apps',
    live: null,
    date: 'Sept, 2021',
    images: [],
    text: 'This project is still under development, but the idea is that I will have multiple small features developed within a website, in other words, I will develop a todo-list, a weather app, fizzbuzz, a few algorithms, and much more.',
  },
];
export const jobExperience = {
  kyte: {
    title: 'Full Stack Developer',
    date: 'Current',
    experience:
      'Worked with the MERN stack to create webpages and landing pages for the Kyte App.',
  },
  MH: {
    title: 'Full Stack Developer',
    date: 'Current',
    experience:
      'Worked with NextJS and Typescript to create webpages and landing pages for the NFT Game Mouse Haunt.',
  },
};
export const skills = [
  'NextJS',
  'Firebase',
  'Python',
  'Typescript',
  'Azure',
  'Node.js',
  'HTML/CSS',
  'Less',
  'SaSS',
  'MongoDB',
  'SQL',
  'Git',
  'Express',
  'RESTful',
  'React',
  'Redux',
  'R.Native',
];

export const reachMeParagraph = {
  paragraph:
    'If you are interested in hiring me for your project please use the form to get in touch or contact me in the channels below.',
};
export const knowledgeField = {
  // full_stack: {
  //   title: 'Full Stack Development',
  //   qualifications: 'MERN developer, focused on Front-end.',
  // },
  database: {
    title: 'Databases',
    qualifications: 'Mainly NOSQL, but also SQL.',
  },
  mobile_app: {
    title: 'Mobile App Dev',
    qualifications: 'React Native and Firebase',
  },
  front_end: {
    title: 'Frond End Design',
    qualifications: 'React/Redux, NextJS, Angular, and Vue.',
  },
};
export const viewResume = {
  resume: '/assets/pdf/gabriel_barreto_resume.pdf',
  value: 'View Resume',
};
export const informations = {
  name: 'Gabriel Barreto',
  jobTitle: 'Full-stack Developer',
  basedIn: 'Vancouver, Canada',
  from: 'São Paulo, SP',
  nationality: 'Brazil',
  livingIn: 'Canada',
};
export const tags = {
  openingTag: '<',
  closingOpening: '>',
  closingTag: '/>',
  openBracket: '{',
  closingBracket: '}',
  closingTagName: '</',
  slash: '/',
};
export const buttonValues = [
  {
    name: 'Reach',
    to: 5,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
  {
    name: 'Works',
    to: 3,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
  {
    name: 'About',
    to: 1,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
];

export const navigate = [
  { loc: 'Home', to: 0 },
  { loc: 'About', to: 1 },
  { loc: 'Works', to: 3 },
  { loc: 'Reach', to: 5 },
];

export const buttonValuesMobile = [
  {
    name: 'About',
    to: 1,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
  {
    name: 'Works',
    to: 3,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
  {
    name: 'Reach',
    to: 5,
    openingTag: tags.openBracket,
    closingTag: tags.closingBracket,
  },
];
export const socialMedia = [
  {
    name: 'Github',
    src: 'https://www.github.com/ghbarreto',
    img: 'github',
  },
  {
    name: 'Linkedin',
    src: 'https://www.linkedin.com/in/ghbarreto/',
    img: 'linkedin',
  },
  {
    name: 'Twitter',
    src: 'https://twitter.com/ghbarretoo',
    img: 'twitter',
  },
];

export const hireMeButton = [
  {
    title: 'Hire Me',
    src: 'src',
  },
];

export const reachMeInfo =
  'If you are interested in hiring me for your project please use the form to get in touch or contact me in the channels below.';

export const reachMeInfoContact = [
  {
    icon: 'email',
    val: 'henriqve.dev@gmail.com',
  },
  {
    icon: 'location',
    val: 'Vancouver, BC',
  },
];
