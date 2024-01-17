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
  location: "NIT Warangal,Telangana",
  locationLink: "[https://maps.app.goo.gl/ncWjwzuZ5ocXecGEA]",
  about:
    "Student at NIT Warangal, Data Science Enthusiast.Figuring out,taking one step at a time",
  summary:
    "Hey!!. A Quick intro. Myself Akshat , student at NIT Warangal, Batch of 2024 ,pursuing undergrad in Electrical Engineering with keen interest to build carrer in Analytics domain.Having work experience in corporate giants like Carelon Global Solutions and startups like Zevo.ai.Apart from this,love to read and write blogs, playing badminton and take up club/assosiations responsibilities.",
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
      degree: "Pursuing Bachelor's Degree in Electrical and Electronics engineering",
      start: "2020",
      end: "Present(Batch of 2024)",
    },
  ],
  work: [
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
      company: "Wizlearnr International",
      link: "",
      badges: [],
      title: "",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Developed a prototype using no-code tool for an Ed-Tech startup focusing on the holistic life skills of children.Researched Tech feasibility and analyzed market trends and size for the Ed-tech domain using Excel.Reached out to potential customers to understand business needs and frame solutions for better services.Tools Used: Bubble.io | Google Analytics | Canva | MS Excel | PowerPoint Presentation",
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
