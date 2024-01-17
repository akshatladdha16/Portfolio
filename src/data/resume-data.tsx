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
  location: "Warangal,Telangana",
  locationLink: "[Location line paster here]",
  about:
    "Student at NIT Warangal, Data Science Enthusiast.Figuring out and Buidling life one step at a time",
  summary:
    "Hey!!. A Quick intro. Myself Akshat , student at NIT Warangal, Batch of 2024 ,pursuing undergrad in Electrical Engineering with passion to build my career in Analytics domain. Having work experience in corporate giants like Craelon Global Solutions and startups like Zevo.ai.Apart from this, preety active in extra-curriculars, Being the captain of Institute Badminton Team or writing medium blogs.",
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
        "[insert description here]",
    },
    {
      company: "Carelon Global Solutions LLP",
      link: "https://www.carelon.com/",
      badges: ["On-site(Bangalore)"],
      title: "ML Intern",
      logo: ClevertechLogo,
      start: "May,23",
      end: "July,23",
      description:
        "[insert description here]",
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
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
