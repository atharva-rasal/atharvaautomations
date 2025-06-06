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
  projects_1,
  projects_2,
  projects_3,
  projects_4,
  projects_5,
  projects_6,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Project", id: "project" },
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

export const projects = [
  {
    title: "Reheating Furnace at Tata Steel, Jaspur & Vizag Steel Plant",
    image: projects_1,
    description: `Automated control systems for reheating furnaces to ensure consistent temperature and energy efficiency. Integrated with plant operations for improved steel processing at Tata and Vizag locations.`,
  },
  {
    title: "Mix Spices Plant at KPG Spices, Manesar",
    image: projects_2,
    description: `End-to-end automation for spice mixing and packaging to boost production efficiency and quality control. Customized system tailored to spice blending requirements at KPG Spices.`,
  },
  {
    title: "KHS Can Line at Angola, Africa",
    image: projects_3,
    description: `Automated canning line integration for beverage packaging using KHS equipment. Enhanced throughput and real-time monitoring deployed at the Angola facility.`,
  },
  {
    title: "Bullet Case Gauging Machine for Ordnance Factory",
    image: projects_4,
    description: `Precision gauging machine developed for defense manufacturing to ensure dimensional accuracy of ammunition cases. Automated inspection and quality assurance integrated with ordnance production.`,
  },
  {
    title: "Burst Testing Jig for BOSCH India",
    image: projects_5,
    description: `Custom-built jig to perform burst pressure testing on components for BOSCH India. Enhanced safety and compliance through automated testing routines.`,
  },
  {
    title: "Krones Can Line at Nepal",
    image: projects_6,
    description: `Turnkey automation solution for Krones can filling and packaging line. Delivered seamless operations with reduced manual intervention for the Nepal-based plant.`,
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
