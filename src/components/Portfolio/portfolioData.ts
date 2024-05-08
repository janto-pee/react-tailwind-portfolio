import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";
import Image7 from "../../assets/img/portfolio/project-7.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Frontend",
    image: Image1,
    tag: ["frontend"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Envato",
        language: "HTML, CSS, Javascript",
        preview: "https://github.com/janto-pee?tab=repositories",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
  {
    id: 2,
    type: "Backend project",
    image: Image2,
    tag: ["backend"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 3,
    type: "Cloud project",
    image: Image3,
    tag: ["cloud"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "https://github.com/janto-pee?tab=repositories",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
  {
    id: 4,
    type: "CICD project",
    image: Image4,
    tag: ["cicd", "frontend"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 5,
    type: "containerization project",
    image: Image5,
    tag: ["containerization", "frontend", "backend"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "HTML, CSS, ReactJS",
        preview: "https://github.com/janto-pee?tab=repositories",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
  {
    id: 6,
    type: "operating system",
    image: Image6,
    tag: ["os", "cloud"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.pexels.com",
        link: "https://www.pexels.com",
      },
    ],
  },
  {
    id: 7,
    type: "backend project",
    image: Image7,
    tag: ["backend", "containerization"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
  {
    id: 8,
    type: "cicd project",
    image: Image8,
    tag: ["frontend", "cicd", "backend"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
  {
    id: 9,
    type: "os project",
    image: Image9,
    tag: ["os", "cicd"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "https://github.com/janto-pee?tab=repositories",
        link: "https://github.com/janto-pee?tab=repositories",
      },
    ],
  },
];

export default PortfolioData;
