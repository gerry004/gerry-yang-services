import pianistHero from "../assets/gy-pianist-hero.png";
import kreohInsights from "../assets/kreoh-insights.png";

const PROJECTS = [
  {
    title: "Kreoh",
    image: kreohInsights,
    link: "https://www.isef.ie/isef-2022",
    description:
      "Kreoh is an educational platform that enables students to learn faster by facilitating code reviews between peers, and provides lecturers with granular data for accurate and efficient grading.",
    points: [
      "The platform handled 3,000+ changes and 600+ code reviews from over 100 students.",
      "Implemented a live chat feature using web sockets for instant feedback and faster code reviews.",
      "Automated weekly insights for progress tracking using cron jobs.",
      "Desgined the dashboard UI and maintained a SQL database.",
      "Built a roles-based user authentication system.",
      "Worked with external API integrations such as Github and Sendgrid.",
    ],
    skills: [
      "Website Development",
    ],
  },
  {
    title: "Pianist Portfolio",
    image: pianistHero,
    link: "https://gerry004.github.io/gerry-yang-pianist/",
    description:
      "A collection of my most outstanding recordings and a timeline of the successes, highlights, and achievements on my musical journey.",
    points: [
      "Built an audio player where you could skip to a certain spot in a piece.",
      "Designed a piano sidebar where the keys look like they're being pressed when you hover over the corresponding sections.",
    ],

    skills: ["Website Development", "Website Design", "React.js", "Tailwind CSS"],
  },
];

export default PROJECTS;
