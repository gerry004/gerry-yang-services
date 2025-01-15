import pianistHero from "../assets/gy-pianist-hero.png";

const PROJECTS = [
  {
    title: "B# Piano Competition",
    image: pianistHero,
    link: "https://besharppiano.ie/",
    description:
      "The B# Piano Competition aims to provide an opportunity for young pianists to showcase their skills, passion, and talent. For their website, I implemented the following functionalities:",
    points: [
      "Sign-Up Forms: Created a multi-step application form for participants to register for the competition, collecting essential details such as personal information and repertoire choices.",
      "Automated Emails: Set up automated email notifications to be sent to participants as soon as they submit the form, confirming their registration and providing important information.",
      "Payments Integration: Integrated Stripe for secure, seamless payment processing, allowing participants to easily pay their registration fees directly through the website."
    ],

    skills: ["Website Development", "Website Design", "Wordpress", "Copywriting", "Forms", "Emails", "Stripe"],
  },
];

export default PROJECTS;
