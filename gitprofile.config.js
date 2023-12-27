// gitprofile.config.js

const config = {
  github: {
    username: 'blazegeo', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abdul-samateh',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '240-463-1448',
    email: 'samateh1@umbc.edu',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1DDQ39941Niv1SBSNl2yLgj6-JpLwq_YC99wcWl2Jjq8/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Tableau',
    'Excel',
    'SQL',
  ],
  experiences: [
    {
      company: 'DSM-firmenich',
      position: 'Analytical Lab Technician',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.dsm-firmenich.com/corporate/home.html',
    },
    {
      company: 'Green Analytics Maryland',
      position: 'Lab Technician II',
      from: 'August 2021',
      to: 'Present',
      companyLink: 'https://www.greenanalytics.ca/',
    },
    {
      company: 'Ion Storage Systems',
      position: 'Manufacturing Technician II',
      from: 'August 2022',
      to: 'July 2023',
      companyLink: 'https://ionstoragesystems.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Maryland, Baltimore County',
      degree: 'B.S Chemistry',
      from: '2017',
      to: '2021',
    }
    /*{
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    }*/
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Maryland Covid Cases',
      description:
        'A Study of the Covid Cases in Maryland by County',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/08/16/05/20/maryland-890635_960_720.png',
      link: 'https://blazegeo.github.io/Maryland-Covid-19/',
    },
    {
      title: 'Warby Parker Marketing Funnel Analysis',
      description:
        'An analysis of the two marketing funnels used by Warby Parker',
      imageUrl: 'https://dfdnews.com/uploads/fashion-needs-winner04.jpg',
      link: 'https://docs.google.com/document/d/17VjRzphHP-rFDehka8JEvUP2uCHeIl7SOhXknaN8AX8/edit?usp=sharing',
    },
    {
      title: 'Fatty Acid Methyl Ester Grapher',
      description:
        'A presentation of a processing aid created with Python for GC-FID data from Chromeleon',
      imageUrl: 'https://static.molinstincts.com/compound_3d/C18-5-FAME-3D-structure-CT1103349036.png',
      link: 'https://docs.google.com/presentation/d/1W4RmsU2YkxJtmMzMXB9w8Du_FxjCKnSg/edit?usp=sharing&ouid=115789390835738649229&rtpof=true&sd=true',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  }, */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3460229',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
 // Optional Footer. Supports plain text or HTML.
  footer: `Doing what I can everyday`,
};
  
export default config;
