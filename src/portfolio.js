/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Mahesh Mokale",
  logo_name: "Mahesh Mokale",
  // nickname: "harry / picleric",
  full_name: "Mahesh Mokale",
  subTitle1: "Full Stack Developer.",
  subTitle2: "Life Long Learner.",
  subTitle3: "Cook too.",

  subTitle: "Full Stack Developer, Life Long Learner, Cook too",
  resumeLink:
    "https://drive.google.com/file/d/1fx3KOWAoWrS4t6ml4_X7kRJ9R19rwuMM/view?usp=drive_link",
  mail: "mailto:maheshmokale131@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/maheshmokale",
  linkedin: "https://www.linkedin.com/in/maheshmokale/",
  gmail: "maheshmokale131@gmail.com",
  twitter: "https://twitter.com/maheshmokale",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces and backend for web applications",
        "⚡ Building responsive website front end using React, Angular and ExtJS",
        "⚡ Creating application backend in Java, Node",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "logos:oracle",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "logos:hibernate",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#076ba4",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Couchbase",
          fontAwesomeClassname: "logos-couchbase",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "Stripe",
          fontAwesomeClassname: "logos:stripe",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        /*
       {
         skillName: "jQuery",
         fontAwesomeClassname: "simple-icons:jquery",
         style: {
           color: "#0769ad",
         },
       },
       {
         skillName: "Redux",
         fontAwesomeClassname: "simple-icons:redux",
         style: {
           color: "#593D88",
         },
       },
       {
         skillName: "Angular",
         fontAwesomeClassname: "simple-icons:angular",
         style: {
           color: "#dd0031",
         },
       },
       {
         skillName: "Express",
         fontAwesomeClassname: "simple-icons:express",
         style: {
           color: "gray",
         },
       },
       {
         skillName: "Material UI",
         fontAwesomeClassname: "simple-icons:uikit",
         style: {
           color: "#007FFF",
         },
       },
        {
         skillName: "Tailwind CSS",
         fontAwesomeClassname: "logos:tailwindcss-icon",
         style: {
           color: "#635BFF",
           width: "1em",
           height: "1em",
         },
       },
       {
         skillName: "Styled Components",
         fontAwesomeClassname: "vscode-icons:file-type-styled",
         style: {
           color: "#635BFF",
           width: "1em",
           height: "1em",
         },
       },
       {
         skillName: "Bootstrap",
         fontAwesomeClassname: "simple-icons:bootstrap",
         style: {
           color: "#563d7c",
         },
       },
       {
         skillName: "Cloudinary",
         fontAwesomeClassname: "logos:cloudinary-icon",
         style: {
           color: "#635BFF",
           width: "1em",
           height: "1em",
         },
       },
    
         {
         skillName: "Framer Motion",
         fontAwesomeClassname: "logos:framer",
         style: {
           color: "#635BFF",
           width: "1em",
           height: "1em",
         },
       },
       */

      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
            width: "2em",
            height: "1em",
          },
        },
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },

        /* 
       {
         skillName: "Vercel",
         fontAwesomeClassname: "skill-icons:vercel-light",
         style: {
           color: "gray",
           fill: "gray",
           // backgroundColor: "white",
           width: "1em",
           height: "1em",
         },
       },
       {
         skillName: "Netlify",
         fontAwesomeClassname: "simple-icons:netlify",
         style: {
           color: "#38AFBB",
           width: "1em",
           height: "1em",
         },
       },
       {
         skillName: "Heroku",
         fontAwesomeClassname: "simple-icons:heroku",
         style: {
           color: "#6863A6",
           width: "1em",
           height: "1em",
         },
       },
       */
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "California State University, East Bay, United States",
      subtitle: "Masters in Computer Science (MSCS)",
      logo_path: "CSUEB_logo.png",
      alt_name: "California State Univeristy, East Bay",
      duration: "Aug 2022 - May 2024",
      descriptions: [
        "<li>I have taken varity of courses related to Cloud Computing, Computer Vision, Advance Algorithms, Advance Computer Networks, Advance Computer Architecture etc.</li> <li> Apart from this, I have done courses on Cloud Computing and Full Stack Development.</li>",

      ],
      website_link: "https://www.csueastbay.edu/",
    },
    {
      title: "Pune Institute of Computer Technology, Pune, India",
      subtitle: "Bachelors in Electronics and Telecommunications Engineering (BE-E&TC)",
      logo_path: "pict_logo.png",
      alt_name: "GGSIPU",
      duration: "Aug 2013 - July 2016",
      descriptions: [
        "<li>I have studied basic software engineering subjects like Data Structures, Algorithms, Database Management System, Operating Systems, Computer Architecture etc.</li>",
      ],
      website_link: "https://pict.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer Capstone",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Advanced React",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Build a Recommendation System",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/6af001cafc4b683bb38abdb9e81d0d79",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Principles of Software Design",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/f4e9af47fbb24381e04031f3cc8cfd9f",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/36411fcea7ea4fbb5c613ef4911f4668",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/0269c76c33997304d1842d4eef16815b",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Android Application Development - II",
      subtitle: "- Dr. Adam Porter",
      logo_path: "maryland_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GN48B7W9TU59",
      alt_name: "Stanford University",
      color_code: "#e11a2b",
    },
    {
      title: "Android Application Development - I",
      subtitle: "- Dr. Adam Porter",
      logo_path: "maryland_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/2H59Z22DDSU8",
      alt_name: "Stanford University",
      color_code: "#e11a2b",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Christian Hur",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
      alt_name: "Coursera",
      color_code: "#0056d2",
    },
    {
      title: "ML and AI in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
      alt_name: "GCP",
      color_code: "#2fa9508a",
    },
    {
      title: "Foundational Infrastructure in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
      alt_name: "GCP",
      color_code: "#4087f08a",
    },
    {
      title: "Networking & Security in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
      alt_name: "GCP",
      color_code: "#eb40308a",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "Experienced Software Engineer with over 5+ years of expertise in designing, developing, testing, and debugging software applications. Proficient in Java, React, SQL, and leveraging cloud-based solutions like AWS. Demonstrated ability in full application stack development, from frontend to backend, with a focus on secure coding practices, test-driven development, and CI/CD pipelines. Strong background in interacting with end users to define system requirements and implement scalable, high-performance solutions.  Actively seeking to contribute to innovative projects within a dynamic and forward-thinking organization.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      /*{
        title: "Graduate Coordinator",
        company: "Student Centre for Academic Achievement, California State University, East Bay",
        company_url: "https://www.csueastbay.edu/",
        logo_path: "SCAA_logo.png",
        alt_name: "SCAA_logo",
        duration: "(Aug, 2023 - May, 2024)",
        location: "Hybrid",
        description:
          "<li>Implementing a comprehensive subject tutoring program following guidelines from the College Reading and Learning Association. Supervising 10-20 undergraduate/graduate instructional student assistants (tutors). Assisting with the creation and management of assessment and evaluation instruments.</li><li>Assisting with tutor scheduling and timesheet approval. Assist students in using lab resources and software. Provide technical support to students and faculty members who encounter computer or software issues. Communicate effectively with faculty, staff, and students to ensure smooth departmental operations.</li>",
        color: "#0071C5",
      },
      {
        title: "Student Assistant",
        company: "California State University, East Bay",
        company_url: "https://www.csueastbay.edu/",
        logo_path: "CSUEB_logo.png",
        alt_name: "CSUEB_logo",
        duration: "(Feb, 2023 - May, 2023)",
        location: "Onsite",
        description:
          "<li>Assist students in using lab resources and software. Helping them with code issues.</li><li>Provide technical support to students and faculty members who encounter computer or software issues.</li><li>Communicate effectively with faculty, staff, and students to ensure smooth departmental operations.</li>",
        color: "#0071C5",
      },*/
      {
        title: "Software Developer",
        company: "Amdocs",
        company_url: "https://www.amdocs.com/",
        logo_path: "amdocs-logo.png",
        alt_name: "amdocs-logo",
        duration: "(May, 2023 - May, 2024)",
        location: "Remote",
        description:
          "<li>Managed the process of creating and validating business requests (BRs), ensuring all entities and policies were correctly associated with them, and handling business/technical errors to facilitate smooth publishing of offers.</li><li>Implemented and optimized the tech stack including React for the front end, Java for the backend, Couchbase for the database, and Elasticsearch for caching and search functionality. Also utilized Kafka for message queuing and event handling, and Kibana for log tracing.</li><li>Executed cloud-based deployment using Docker and Kubernetes, ensuring scalable and efficient cloud operations for the Catalog suite.</li><li>Fixed critical issues and bugs in the Catalog application, ensuring smooth and uninterrupted service delivery to clients.</li><li>Operated closely with cross-functional teams, including product managers, QA, and operations, to deliver high-quality features and resolve issues promptly.</li><li>Created detailed documentation for the Catalog application features and workflows, and provided training to new team members to ensure knowledge transfer and consistency in development practices.</li><li>Worked in an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives to ensure continuous improvement and effective project management.</li><li>Organized the full software development lifecycle from concept to deployment, ensuring timely and efficient delivery of features and updates.</li><li>Participated in design and code reviews, maintaining high-quality standards and adherence to best practices.</li>"
        ,
        color: "#0071C5",
      },
      {
        title: "Software Engineer",
        company: "Cybage",
        company_url: "hhttps://www.cybage.com/",
        logo_path: "cybage-logo.png",
        alt_name: "cybage-logo",
        duration: "(Sep, 2019 - May, 2022)",
        location: "Remote",
        description:
          "<li>Handled issues reported by major customers like Disney, FHE, and Warner Bros, addressing them through Jira tickets.</li><li>Developed and maintained stored procedures to generate region-wise financial analysis reports, ensuring accurate and efficient data handling and reporting.</li><li>Regularly fixed Java and JavaScript code issues to maintain and improve the functionality and performance of the Mediamorph Content Value Management platform.</li><li>Migrated the old Mediamorph application to a new replatformed version, utilizing a modern tech stack including React, Spring Boot, and Elasticsearch, to enhance performance, scalability, and user experience.</li><li>Utilized CI/CD pipelines and DevOps practices to streamline deployment processes.</li><li>Leveraged JIRA to track project progress & maintained extensive documentation on Confluence pages.</li>",
        color: "#0071C5",
      },
      {
        title: "System Engineer",
        company: "Tata Consultancy Services",
        company_url: "https://www.tcs.com/",
        logo_path: "tcs-logo.png",
        alt_name: "tcs-logo",
        duration: "(Dec, 2016 - Aug, 2019)",
        location: "Pune, India",
        description:
          "<li>Integrated an email notification system to alert users upon the completion of a job flow or a group of job flows, ensuring they are promptly informed if a job has successfully finished or encountered an error.</li><li>Integrated a job flow grouping service, enabling the sequential execution of multiple jobs. This feature allows users to create sequences where one job automatically follows another, streamlining the process and enhancing workflow automation.</li><li>Managed a data modeling service, resolving issues and adding support for new databases to enable metadata creation, thereby enhancing the system's capabilities and improving data management efficiency.</li><li>Managed the DataPlus core monolithic application, focusing on fixing bugs to ensure the service ran effectively and efficiently.</li><li>Was part of a quick response team dedicated to resolving sensitive client issues in production environments, ensuring minimal downtime, and maintaining client satisfaction.</li><li>Utilized JWT tokens for user authorization and maintaining user sessions, ensuring secure and efficient access management within the application.</li><li>Initially focused on creating manual builds using Maven and tracking them, then later migrated to Jenkins to manage and automate the build process, improving efficiency and consistency.</li><li>Created product installers using InstallAnywhere software, which was uploaded to the TCS website. This allowed customers to connect with the sales team to obtain licenses and download the service.</li><li>Wrote JUnit test cases to ensure code quality and reliability, facilitating thorough testing and validation of application functionality.</li>",
        color: "#4285F4",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/maheshmokale/my-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
