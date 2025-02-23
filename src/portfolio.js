/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Omar's Portfolio",
  description:
    "Omar's Portfolio is a collection of my work that I have done. I hope you enjoy it.",
  og: {
    title: "Omar's Portfolio",
    type: "website",
    url: "https://omarx.uk/",
  },
};

//Home Page
const greeting = {
  title: "Omar Ahmed",
  logo_name: "OmarAhmed",
  nickname: "",
  subTitle:
    "I am a tech-savvy problem solver with a passion for continuously expanding my skillset and applying it to real-world challenges. I excel in collaborative environments and take pride in creatively overcoming obstacles with tailored solutions. I am eager to dive into the various roles and dynamics of the industry and how they intersect to drive innovation.",
  resumeLink:
    "https://drive.google.com/file/d/1nM_7djPARpIRKbbD7RPjNG_an0VgWdwG/view",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/OmarAhmed-A",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/OmarAhmed-A",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/omarahmed-oa/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:omar@omarx.uk",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Omar__V2",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/omarxae/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "Learning to use diffrent tools and exploring use cases of them",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "scikit-learn",
        //   fontAwesomeClassname: "simple-icons:scikit-learn",
        //   style: {
        //     backgroundColor: "#F7931E",
        //   },
        // },
        {
          skillName: "pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "#00A1F4",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software development",
      fileName: "FullStackImg",
      skills: ["⚡ Learning to create the next big things"],
      softwareSkills: [
        {
          skillName: "C Proggraming",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "GIT/github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "faNodeJs",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Google Cloud Platform",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases (Like this website)",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arab academy of science and technology in Egypt",
      subtitle: "B. science. in Computer Engineering",
      logo_path: "aast-logo.png",
      alt_name: "AAST Egypt",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms etc.",
        "⚡ Apart from this, I have done courses on Data Science.",
        "Graduating in 2025,",
      ],
      website_link: "https://aast.edu/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Visa Token Service Technology Virtual Experience Program",
      subtitle: "Visa - Forage",
      logo_path: "visa-logo.png",
      secondary_link: "https://www.theforage.com/",
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Visa/8ebZgyZyLA6h5gyqt_Visa_CxSSnup6ZjYxTvK6e_1676647035163_completion_certificate.pdf",
      alt_name: "Visa",
      color_code: "#FFFFFF",
    },    
    {
      title: "Fundamentals of Deep Learning",
      subtitle: "Nvidia Deep Learning Institute",
      logo_path: "nvidia-cert-logo.png",
      secondary_link: "https://www.nvidia.com/en-us/training/",
      certificate_link:
        "https://courses.nvidia.com/certificates/5d58177d4fb040e2afbf8aca6deb30db/",
      alt_name: "Nvidia",
      color_code: "#76b900",
    },
    {
      title: "ALX Data Science Course By ExploreAI (Sponsored by Mastercard)",
      subtitle: "Alx Africa",
      logo_path: "alx-logo.svg",
      secondary_link: "https://www.alxafrica.com/",
      certificate_link: "https://savanna.alxafrica.com/certificates/r7ZYpEcPJm",
      alt_name: "ALX",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning Nanodegree",
      subtitle: "EgFWD Scholarship",
      logo_path: "udacityS.svg",
      secondary_link: "https://egfwd.com/",
      certificate_link: "https://confirm.udacity.com/DU5NCRMP",
      alt_name: "Udacity",
      color_code: "#FFFFFF",
    },
    {
      title: "Data analysis Course",
      subtitle: "EgFWD scholarship",
      logo_path: "udacityS.svg",
      secondary_link: "https://egfwd.com/",
      certificate_link: "https://graduation.udacity.com/confirm/LRDA44QV",
      alt_name: "Udacity",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "Click on the sections below to checkout my experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Engineer I", 
          company: "Raisa Energy",
          company_url: "https://raisa.com/",
          logo_path: "raisa.png",
          duration: "Oct 2024 - Present",
          location: "Cairo, Egypt",
          description: 
          `<ul>
          <li>Engineered custom dbt incremental strategies and materializations reducing pipeline build times by 70%, optimizing operational costs</li>
          <li>Architected and implemented end-to-end CI/CD pipeline for dbt projects, establishing automated testing and deployment workflows</li>
          <li>Designed and optimized complex data models powering mission-critical Power BI analytics dashboards</li>
          <li>Published technical blog post on dbt CI pipeline implementation</li>
          </ul>`,
          color: "#0879bf"
        },
        {
          title: "Data Engineering Intern",
          company: "Raisa Energy",
          company_url: "https://raisa.com/",
          logo_path: "raisa.png", 
          duration: "Jul 2024 - Sep 2024",
          location: "Cairo, Egypt",
          description:
          `<ul>
          <li>Spearheaded the modernization of dbt infrastructure, enhancing data transformation processes and pipeline efficiency</li>
          <li>Demonstrated exceptional performance leading to promotion to Data Engineer I role within 3 months</li>
          <li>Collaborated with cross-functional teams to translate complex business requirements into scalable data solutions</li>
          </ul>`,
          color: "#0879bf"
        },
        {
          title: "Software Engineer for AI Training Data",
          company: "Outlier.Ai",
          company_url: "https://outlier.ai/",
          logo_path: "outlier.svg",
          duration: "June 2024 - Present",
          location: "Cairo, Egypt",
          description: 
          `
          <ul>
          <li>Provided expert-level human feedback on LLM outputs for SQL and Python tasks, enhancing model accuracy and relevance.</li>
          <li>Collaborated with engineering teams to refine model training processes through consistent, detailed feedback.</li>
          <li>Evaluated and annotated data outputs, ensuring high-quality training data for LLM development.</li>
          <li>Assessed model performance, identifying errors and suggesting improvements to enhance algorithm performance.</li>
          <li>Communicated insights and recommendations effectively with team leads, guiding iterative enhancements in model development.</li>
          </ul>
          `,
          color: "#ee3c26",
        },{
          title: "Subject Matter Expert and Technical Support Agent",
          company: "Teleperformance Egypt (OFF-SHORE Account)",
          company_url: "https://www.teleperformance.com/",
          logo_path: "tp-icon.svg",
          duration: "June 2023 - Dec 2023",
          location: "Cairo, Egypt",
          description: 
          `
          <ul>
          <li>Provided exceptional support to customers, resolving complex issues.</li>
          <li>Assisted in training and onboarding new agents, ensuring they were equipped with the necessary knowledge and skills.</li>
          <li>Demonstrated strong communication and interpersonal abilities while interacting with customers and team members.</li>
          <li>Developed problem-solving and critical thinking skills by analyzing and troubleshooting technical challenges.</li>
          <li>Exhibited adaptability and a willingness to learn, staying updated with the latest technologies and industry trends.</li>
          <li>Strictly followed quality standards and procedures to deliver consistent and compliant service.</li>
          <li>Handled sensitive customer data with utmost care, adhering to PCI compliance and data security protocols.</li>
          </ul>
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Extra curricular activities",
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Dell Hacktrick Hackathon Dell technologies",
          company_url: "https://www.dell.com/en-eg/lp",
          logo_path: "dell-logo.svg",
          duration: "March 2023",
          location: "Cairo, Egypt",
          description: 
          `
          <ul>
          <li>Collaborated in a team of six (DigitalSquad) to develop an intelligent agent for a maze problem using Deep Q-Networks algorithm.</li>
          <li>Implemented DQN algorithm in TensorFlow and PyTorch, and created a central repository for the code.</li>
          <li>Set up a cloud server on AWS EC2, and a Conda environment to reduce latency and ensure smooth code execution.</li>
          <li>Provided assistance on the algorithmic approach, and developed a translation layer for standard RL algorithms to work with the non standard competition environment.</li>
          <li>Ranked seventh out of 10 teams in the final phase, from 30 of 200 teams that signed up for phase one.</li>
          <li>Won the award for best spirit team, and gained valuable experience in machine learning, teamwork, and problem-solving.</li>
          </ul>
          `,
          color: "#0879bf",
        },
        {
          title: "Embedded electronics Team member",
          company: "IEEE AAST student branch",
          company_url: "https://www.ieee.org/",
          logo_path: "IEEE-logo.png",
          duration: "Sep 2022 - Present",
          location: "Cairo, Egypt",
          description: 
          `
          <ul>
          <li>Volunteered to help organise IEEE Explore a Worldwide programming competition held at Aast for the Egypt Section.</li>
          <li>Worked on research and development of a small maze-solving robot for micro-mouse competition.</li>
          <li>Developed a Python Teaching program for IEEE Women in Engineering (WIE) to teach Python to high school students.</li>
          </ul>
          `,
          color: "#0879bf",
        },
        {
          title: "Enactus entrepreneurs team member",
          company: "Enactus AAST",
          company_url: "https://enactus.org/",
          logo_path: "Enactus-logo.png",
          duration: "september 2020 - february 2021",
          location: "Cairo, Egypt",
          description: 
          `
          <ul>
          <li>Collaborated with team members to achieve target results from the UN SDGs.</li>
          <li>Created research reports to document and communicate goals and accomplishments.</li>
          <li>Identified issues, analyzed information, and provided solutions to problems in biweekly meetings.</li>
          </ul>
          `,
          color: "#0879bf",
        },
      ],
    },

    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    // {
    //   title: "Google Explore ML Facilitator",
    //   company: "Google",
    //   company_url: "https://about.google/",
    //   logo_path: "google_logo.png",
    //   duration: "June 2019 - April 2020",
    //   location: "Hyderabad, Telangana",
    //   description:
    //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //   color: "#4285F4",
    // },
    // {
    //   title: "Microsoft Student Partner",
    //   company: "Microsoft",
    //   company_url: "https://www.microsoft.com/",
    //   logo_path: "microsoft_logo.png",
    //   duration: "Aug 2019 - May 2020",
    //   location: "Hyderabad, Telangana",
    //   description:
    //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //   color: "#D83B01",
    // },
    // {
    //   title: "Mozilla Campus Captain",
    //   company: "Mozilla",
    //   company_url: "https://www.mozilla.org/",
    //   logo_path: "mozilla_logo.png",
    //   duration: "Oct 2019 - May 2020",
    //   location: "Kurnool, Andhra Pradesh",
    //   description:
    //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //   color: "#000000",
    // },
    // {
    //   title: "Developer Students Club Member",
    //   company: "DSC IIITDM Kurnool",
    //   company_url:
    //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //   logo_path: "dsc_logo.png",
    //   duration: "Jan 2018 - May 2020",
    //   location: "Kurnool, Andhra Pradesh",
    //   description:
    //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //   color: "#0C9D58",
    // },
    // {
    //   title: "Developer Program Member",
    //   company: "Github",
    //   company_url: "https://github.com/",
    //   logo_path: "github_logo.png",
    //   duration: "July 2019 - PRESENT",
    //   location: "Work From Home",
    //   description:
    //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //   color: "#181717",
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Working on diffrent projects during the summer hoping to add them here soon.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "code.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8320758513",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
