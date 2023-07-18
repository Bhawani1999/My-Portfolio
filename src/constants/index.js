import {

  web,
  javascript,
  starbucks,
  html,
  css,
  reactjs,

  tailwind,

  git,

  meta,

  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

} from "../assets";
// import landtlogo from "../assets/company/landt.png"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Engineer",
    company_name: "LTIMindtree",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2021 - Present",
    points: [
      "Discussion with the team to maintain code and optimize it accordingly",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bhawani is a perfect example of a skilled engineer and he brings all the abilities to the table. he is focused, reliable, and goal-oriented, which inspired our team to be more like his and always do our best. he is kind and an outstanding person and knows how to bring the best out of each person. He is always enthusiastic and energetic to learn new technologies ! keep rocking and doing best.",
    name: "Deepak Kumbhar",
    designation: "Senior cloud and infrastructure engineer C2",
    company: "Capgemini",
    image: "https://media.licdn.com/dms/image/C5603AQHCr1R_ne2Hbg/profile-displayphoto-shrink_800_800/0/1648568733450?e=1695254400&v=beta&t=wlHBLZ12Q2wl3x6T_z6GB3S3h1VB2ymOa7XL6IJEMHc",
  },
  {
    testimonial:
      "Bhawani is a talented and skilled engineer who consistently delivers exceptional results. His kindness and outstanding personality make him a joy to work with. Bhawani's passion for learning and embracing new technologies are a testament to his commitment to excellence. I have no doubt that he will continue to excel and succeed in all his endeavors.",
    name: "Ranjit Suryawanshi",
    designation: "Junior Software Developer",
    company: "Bearish OS, USA",
    image: "https://media.licdn.com/dms/image/C4E03AQF63ZvFn3Wlpg/profile-displayphoto-shrink_800_800/0/1645549366231?e=1695254400&v=beta&t=u-csaUQGYrihGJtXp9jwoDVaXcLctq--SISEdyg44qc",
  },
];

const projects = [
  {
    name: "3D Portfolio Using React JS",
    description:
      "It incorporates various libraries and packages to enable the implementation of interactive and visually appealing 3D components. The project leverages the capabilities of React to create a dynamic user interface and incorporates several additional dependencies to enhance its functionality. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/58848743/254360567-4ee360a7-9176-45d8-a1bb-c8bf0de5ffe1.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Path finder Visualizer",
    description:
      "Path Finder Visualizer using A* Algorithm is a simple application that visually demonstrates the A* algorithm for finding the shortest path between two points on a grid., and observe how the algorithm dynamically adjusts its path to navigate around obstacles. It provides an intuitive interface to understand the efficiency of the A* algorithm in solving pathfinding problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "A*Algorithm",
        color: "green-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/74762032/208245561-bf6a89c2-0a14-4aa7-a4ce-057a628fdaff.jpg",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
