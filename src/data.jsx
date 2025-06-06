import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { RiWaterFlashFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import {
  MdOutlineEngineering,
  MdOutlineAlternateEmail,
  MdOutlineScience,
} from "react-icons/md";
import {
  FaMicrochip,
  FaProjectDiagram,
  FaRegChartBar,
  FaYoutube,
  FaInstagram,
  FaBoxes,
} from "react-icons/fa";
import {
  GiMedicines,
  GiSteelClaws,
  GiWaterBottle,
  GiRubberBoot,
  GiMechanicalArm,
  GiMilkCarton,
  GiCutDiamond,
} from "react-icons/gi";
import {
  profile2,
  profile3,
  profile4,
  profile5,
  member1,
  member2,
  member3,
  member4,
  building_5,
  building_6,
  building_7,
  building_8,
  building_9,
  building_10,
  blog_1,
  blog_2,
  blog_3,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  // { name: "Team", id: "team" },
  { name: "Project", id: "project" },
  // { name: "Testimonial", id: "testimonial" },
  // { name: "Blog", id: "blog" },
];

export const services = [
  {
    name: "PLC Programming",
    icon: <FaMicrochip />,
    description: `We offer advanced PLC programming services using Siemens, ABB, Allen Bradley, Mitsubishi, and Omron platforms. Our solutions are designed for real-time reliability and industrial robustness, covering everything from machine control to inter-process communication in complex systems.`,
  },
  {
    name: "SCADA & HMI Development",
    icon: <FaProjectDiagram />,
    description: `Our engineers design user-friendly SCADA and HMI systems using platforms like WINCC, InduSoft, RSView, and InTouch. We provide seamless visual monitoring, data acquisition, and intelligent alarms — helping operators take instant, informed decisions across production environments.`,
  },
  {
    name: "Industrial Panel Design",
    icon: <MdOutlineEngineering />,
    description: `We specialize in designing and fabricating high-performance electrical control panels, tailored for diverse automation setups. Each panel is built with precision wiring, logical grouping, safety interlocks, and I/O planning — tested thoroughly before deployment on-site.`,
  },
  {
    name: "High I/O Automation Projects",
    icon: <GiMechanicalArm />,
    description: `We have delivered industrial automation projects with over 2000+ I/Os, integrating sensors, actuators, and field devices across complex systems. Our experience spans reheating furnaces, extrusion lines, bottling plants, and process industries — from logic creation to on-site commissioning.`,
  },
  {
    name: "Remote Monitoring & Data Logging",
    icon: <FaRegChartBar />,
    description: `We build custom remote monitoring systems that collect and visualize production data, machine health, and downtime analytics. Data is stored centrally and shared via cloud, email, or SMS — enabling predictive maintenance and performance tracking from anywhere.`,
  },
  {
    name: "Repair & Maintenance Services",
    icon: <BsTools />,
    description: `We provide expert diagnostics and repair services for PLCs, HMIs, VFDs, and special-purpose controllers. Our trained technicians can troubleshoot and restore industrial devices across brands — ensuring minimum downtime and extended equipment life.`,
  },
];

export const industries = [
  {
    name: "Pharmaceutical",
    icon: <GiMedicines />,
    description: `We provide automation for formulation units, batch processing, packaging, and compliance-driven pharma plants, working with brands like Lupin, Aurobindo, Jubilant, and Dr. Reddy’s.`,
  },
  {
    name: "Steel Industry",
    icon: <GiSteelClaws />,
    description: `We've delivered furnace automation and process control for major steel producers like TATA and Vizag Steel, handling projects with over 2000 I/Os using Siemens S7-400 and SCADA.`,
  },
  {
    name: "Beverages & Bottling",
    icon: <GiWaterBottle />,
    description: `From Pepsico to Hindustan Coca Cola and Big Cola, we automate bottling lines, conveyors, and filling machines with high-speed synchronization and SCADA supervision.`,
  },
  {
    name: "Water Treatment Plants",
    icon: <RiWaterFlashFill />,
    description: `Automation of pumping stations, filtration units, chemical dosing, and remote monitoring for municipal and industrial water treatment plants.`,
  },
  {
    name: "Rubber & Extrusion",
    icon: <GiRubberBoot />,
    description: `Solutions for rubber mixing, curing, and extrusion plants like Perfect Containers and Sona Extrusion — with recipe-based PLC logic and touch-screen HMI integration.`,
  },
  {
    name: "FMCG & Food Processing",
    icon: <FaBoxes />,
    description: `Control systems for FMCG clients like Everest Spices, packaging plants, and food processing lines — optimizing throughput and traceability.`,
  },
  {
    name: "Dairy & Utilities",
    icon: <GiMilkCarton />,
    description: `Automation of utility systems and dairy plants including chilling, pasteurization, and clean-in-place (CIP) with centralized SCADA dashboards.`,
  },
  {
    name: "Jewelry Manufacturing",
    icon: <GiCutDiamond />,
    description: `Special-purpose automation for jewelry processing environments requiring high-precision controls and machine safety systems.`,
  },
  {
    name: "Test Bench & Lab Automation",
    icon: <MdOutlineScience />,
    description: `Custom test benches and lab automation solutions for quality control, with real-time data acquisition and intuitive operator interfaces.`,
  },
];

export const teams = [
  {
    name: "Oluoma James",
    title: "Technician",
    profile: member1,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Mary Brown",
    title: "Technician",
    profile: member2,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Lawrence Onu",
    title: "Technician",
    profile: member3,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Joy Eze",
    title: "Technician",
    profile: member4,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "Residential Development Project",
    image: building_5,
    description: `A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title: "Commercial Office Building",
    image: building_6,
    description: `The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title: "Retail Space Renovation",
    image: building_7,
    description: `Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title: "Industrial Warehouse Construction",
    image: building_8,
    description: `Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title: "Historic Building Restoration",
    image: building_9,
    description: `Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title: "Educational Facility Expansion",
    image: building_10,
    description: `Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile3,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: profile4,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile5,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const blogs = [
  {
    title: "Sustainable Construction: Building for the Future",
    image: blog_1,
    category: "Building",
    content: `
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
    date: new Date("January 10, 2024"),
    likeCount: 34,
    commentCount: 4,
    tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
    poster: {
      name: "Johnson",
    },
  },
  {
    title: "The Importance of Quality Craftsmanship in Construction",
    image: blog_2,
    category: "Construction",
    content: `
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
    date: new Date("December 15, 2023"),
    likeCount: 201,
    commentCount: 123,
    tags: ["Skills4Growth", "EconSkillImpact", "GrowWithSkills"],
    poster: {
      name: "Bissi",
    },
  },
  {
    title: "Innovative Technologies Transforming the Construction Industry",
    image: blog_3,
    category: "Innovations",
    content: `
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
    date: new Date("July 20, 2023"),
    likeCount: 198,
    commentCount: 121,
    tags: ["CommEdu", "CommunityEngagement", "EduCommunity"],
    poster: {
      name: "Abisola",
    },
  },
];

export const contacts = [
  {
    name: "Email",
    value: "atharvaautomations@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "Phone Number",
    value: "+91 7303133775",
    icon: <IoCallOutline />,
  },
  {
    name: "Address",
    value: "Mira Road, Mumbai, India",
    icon: <IoLocationOutline />,
  },
];

export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Testimonial", id: "testimonial" },
      { name: "Blog", id: "blog" },
    ],
  },
];
