module.exports = {
  siteTitle: 'Hi! I\'m Thanh Tu NGUYEN!',
  siteDescription: `My curriculum`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Thanh Tu NGUYEN',
  twitterUsername: 'thanhtu19392',
  githubUsername: 'mrtunguyen',
  authorAvatar: '/images/photo.jpeg',
  authorDescription: `Machine Learning engineer/Data Scientist, passionate about what I do. Love solving real-world problems, developing new products. Technical dicussion and Kaggle lover.`,
  skills: [
    {
      name: 'Python',
      level: 100
    },
    { 
      name: 'Tensorflow, Pytorch',
      level: 80
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git, Docker',
      level: 80
    },
    {
      name: 'HTML/CSS',
      level: 60
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "BNP Paribas Cardif",
      begin: {
        month: 'Jan',
        year: '2020'
      },
      duration: null,
      occupation: "NLP Data Scientist",
      description: "I am part of the NLP team, responsible for the R&D and production of the NLP projects, such as speech-to-text, search, automatic audit, text classification."
  
    },
    {
      company: "BNP Paribas Cardif",
      begin: {
        month: 'April',
        year: '2018'
      },
      duration: '2 yrs and 6 months',
      occupation: "Computer Vision Data Scientist",
      description: "I am part of the Computer Vision team, responsible for the the R&D and production of optical character recognition project which convert 5M images (photos, scanned images...) of insurance documents in different languages into text and text comprehension."
  
    },  {
      company: "La Javaness",
      begin: {
        month: 'June',
        year: '2017'
      },
      duration: '3 months',
      occupation: "Data Scientist",
      description: "I integrate the team responsible for predicting price of sales promotion on specified items and specified clients."
  
    }, {
      company: "ANOVA Funds Investment",
      begin: {
        month: 'Jan',
        year: '2017'
      },
      duration: '5 months',
      occupation: "Porfolio Manager Assistant",
      description: "Monitoring cash flows, cash balances and calculating Net Asset Value of fund.  \
                    Implementing investment decisions taking into account cash, investment guidelines, benchmarks and fund sizes"
    }, {
      company: "Societe Generale",
      begin: {
        month: 'June',
        year: '2016'
      },
      duration: '6 months',
      occupation: "Market Risk Analyst",
      description: "Pricing vanilla and exotic options, derivatives products (Swap, Equity) and anticipate PnL impacts over funding (FVA) and counterparty risk (CVA). \
                    Compute PnL and Risk Analysis impacts for Front Office (Trading, CVA desk, sales, CORI) through LIBOR and OIS discounting."
  
    }, {
      company: "Banque de France",
      begin: {
        month: 'June',
        year: '2013'
      },
      duration: '3 months',
      occupation: "Financial Analyst",
      description: "Extract data from various accounting information systems and financial analysis (liquidity, financial structure, financial autonomy)."
  
    },
  ],
  portifolio: [
    {
      image: "/images/kaggle.png",
      description: "Kaggle competition Predicting molecular propreties",
      url: "https://github.com/mrtunguyen/Kaggle_predicting_molecular_properties"
    },
    {
      image: "/images/blog.png",
      description: "My technical blog",
      url: "https://github.com/mrtunguyen/blog"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/thanhtu19392",
    linkedin: "https://www.linkedin.com/in/thanh-tu/",
    github: "https://github.com/mrtunguyen",
    email: "thanhtu19392@gmail.com"
  },
  siteUrl: 'https://github.com/mrtunguyen/my-cv',
  pathPrefix: '/mrtunguyen-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}
