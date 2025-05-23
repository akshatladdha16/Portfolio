import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon , MediumIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Akshat Rai Laddha",
  initials: "ARL",
  location: "Hyderabad,Telangana",
  // locationLink: "[https://maps.app.goo.gl/ncWjwzuZ5ocXecGEA]",
  about:
    "Software Developer by profession, Student by heart,Figuring out my way through the world of AI,Finance and Web Development. We take one step at a time.",
  summary:
    "Hey There!!. A Quick intro. Myself Akshat ,NIT Warangal graduate(batch of 2024), software engineer by profession. Loves building new projects and figure out marketing, sales and product development on the side.Apart from tech, I indulge my time in finance and stock market trading/investing.",
  avatarUrl: "https://github.com/akshatladdha16/Portfolio/raw/master/profile%20pic1.jfif",
  personalWebsiteUrl: "[insertwebsite link here]",
  contact: {
    email: "laddhaakshatrai@gmail.com",
    tel: "+91-9462556175",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akshatladdha16",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshat-rai-laddha-8905a0189/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/AkshatRaiLaddh1",
        icon: XIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@laddhaakshatrai",
        icon: MediumIcon,
      }
    ],
  },
  education: [
    {
      school: "National Institute of Technology,Warangal,Telangana",
      degree: "Bachelor's Degree in Electrical and Electronics engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Cloudangles Digital Transformation Pvt. Ltd.",
      link: "https://www.cloudangles.com/",
      badges: ["Onsite(Hyderabad)"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "Sept'24",
      end: "Current",
      description:
        "Enhanced open-source ETL tool with 20+ data source connectors, built a Docker image, and deployment with EC2.Implemented Apache Kafka service for real-time streaming for data ingestion.Developed APIs in Tornado and integrated with the frontend team to build smooth functionality.Handled multiple client demo calls and effectively managed deadlines in a fast-paced working environment.Contributed to an agentic AI project, automated Github CI/CD actions with Dockerfile creation. Tools Used: Apache Kafka | Docker | Tornado | AWS EC2 & Bedrock | Open Source",
    },
    {
      company: "Zevo.ai",
      link: "https://www.zevo.ai/",
      badges: ["Remote"],
      title: "ML Developer Intern",
      logo: ParabolLogo,
      start: "Aug,23",
      end: "Dec,23",
      description:
        "Researched thoroughly for possible LLMs (codeLlama, codeBERT, etc.) solutions for the company’s use case. Understood data pipeline formation in Vertex AI, and performed fine-tuning practices with the codeBERT model. Worked in cross-functional team and assisted in development practices with Dev Team day-to-day tasks.Tools Used: Vertex AI|Atlassian JIRA Software|Visual Studio|Git version control.",
    },
    {
      company: "Carelon Global Solutions LLP",
      link: "https://www.carelon.com/",
      badges: ["On-site(Bangalore)"],
      title: "ML Developer Intern",
      logo: ClevertechLogo,
      start: "May,23",
      end: "July,23",
      description:
        " Developed analytics tool to assist developers, testers, and BA to arrest and identify defect-prone areas.Implemented Transfer Learning to find contextualized keywords, and categorized 85-90% of defects.Extracted live defect data from DB using SQL Server, built pipeline and published PowerBI dashboard using API.Enhanced defect management efficiency, reduced the number of defects by 5%, with a 10% increment every year.Tools Used: Spyder | SQL Server Management | JIRA | MS Excel | PowerBI API | Azure",
    },
    {
      company: "Wizlearnr International Pvt. Ltd.",
      link: "https://www.linkedin.com/company/wizlearnr/",
      badges: ["Remote"],
      title: "Prototype Developer Intern",
      logo: JojoMobileLogo,
      start: "April,'22",
      end: "June,'22",
      description:
        "Developed a prototype using no-code tool bubble.io for an early age Ed-Tech startup focusing on the holistic life skills of children.Researched Tech feasibility and analyzed market trends and size for the Ed-tech domain using Excel.Reached out to potential customers to understand business needs and frame solutions for better services.Tools Used: Bubble.io | Google Analytics | Canva | MS Excel | PowerPoint Presentation",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Machine Learning",
    "Deep learning",
    "Tensorflow",
    "Pytorch",
    "LLMs",
    "Computer Vision",
  ],
  projects: [
    {
      title: "Test Formatter Using OpenCV OCR API",
      techStack: [
        "NextJS",
        "TailwindCSS",
        "OCR API",
        "OpenCV"
      ],
      description: "Project is submission to Tri_NIT Hackathon 2024 focuses on formation of online computer based test(CBT) when given pdf,image files of questions as input.Installed live timer,public test,test analytics features in project. Live demo and documentation available in Github repo",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/akshatladdha16/TRINIT-RunTime_Terror-DEV03",
      },
    },
    {
      title: "Relational NER",
      techStack: [
        "NLP",
        "Python",
        "LLMs",
        "Spacy Transformers",
        "Streamlit",
      ],
      description: "Extracting named entites and establishing relationship btw those entities in text corpus",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/akshatladdha16/Extraction-of-Relational-Information-from-Text-Using-Transformer-based-NLP-Techniques",
      },
    },
    {
      title: "Spam Classifier",
      techStack: ["Python", "NLP", "Machine Learning", "TFiDF Transformer"],
      description:
        "Implemented classification algorithms to predict if the input message is spam or not.Achieved precision score of 100% and accuracy of 97%",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://github.com/akshatladdha16/Spam-Classifier-NLP-Project",
      },
    },
    {
      title: "Zomato Restaurants Data Analysis",
      techStack: ["Matplotlib","Seaborn", "Pandas", "Numpy","Plotly"],
      description:
        "Performed Data Analysis to retrive insights from clutered dataset on kaggle.Implemented feature engineering, Exploratory data analysis. Recieved Silver medal with 35 upvotes.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://www.kaggle.com/code/akshatrailaddha/zomato-restaurants-data-analysis",
      },
    },
    {
      title: "Stock Market Prediction Using Sentiment Analysis",
      techStack: ["Python and it's libraries", "Machine Learning", "RandomForest"],
      description:
        "Stock market movement prediction using news headlines using Random Forest algorithm. Achieved 85% accuracy on test results. Recieved Bronze medal on kaggle platform",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://www.kaggle.com/code/akshatrailaddha/stock-market-sentiment-analysis-using-nlp",
      },
    },
  ],
} as const;
