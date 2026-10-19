import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import moonShapeImg from "../assets/images/yellow-moon-shape.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline, IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export { logo, circleImg, moonShapeImg };

export const companyDetails = {
  email: "support@linkai.in",
  location: "A52, RPR Complex, 5th floor, 1st Main Rd, Kamadhenu Nagar, B Narayanapura, Mahadevapura, Bangalore 560016, Bengaluru, Karnataka 560016, India",
  location2: "WeWork, Salarpuria Symbiosis, Arekere Village, Bannerghatta Rd, Begur Hobli, Bengaluru, Karnataka 560076, India",
  mapCenter: [12.998056, 77.684862],
  mapZoom: 15,
  phone: "+917795122162",
  whatsapp: "https://wa.me/917795122162",
  instagram: "https://www.instagram.com/linkai_technologies?igsh=azk5bXd4bHdrajZz",
  linkedin: "https://www.linkedin.com/company/linkai-technologies/",
  youtube: "",
  x: "",
  facebook: "https://www.facebook.com/share/1CtxAg6Q9b/",
};
// industries (kept for compatibility: the site now serves real estate)
export const industries = [
  {
    id: 1,
    title: "Real-estate",
    image: "/assets/images/icons/Real-estate.png",
    desc: "Technology for developers, builders, channel partners and sales teams.",
  },
];

export const testimonials = [
  {
    name: "Sandheep Chauhan",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "LinkAI rebuilt our website from the ground up—faster pages, clearer messaging, and more inbound leads within the first quarter.",
    position: "Founder",
    company: "BRIGHTWAVE SOLUTIONS",
  },
  {
    name: "Rahul Gupta",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Our mobile app launched on time and on spec. The team communicated clearly, handled edge cases well, and stayed responsive after release.",
    position: "CEO",
    company: "FINTECH INNOVATORS",
  },
  {
    name: "Priya Desai",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "The AI chatbot they built cut our support queue in half while giving customers accurate answers day and night. Exactly what we needed.",
    position: "COO",
    company: "GLOBAL TRADE CORP",
  },
];

export const futureGoals = [
  {
    icon: <IoChatbubblesOutline size={30} />,
    title: "Smarter Conversational AI",
    description:
      "Advance chatbots and voice agents that understand context, speak your brand, and resolve issues without friction.",
  },
  {
    icon: <RiTeamLine size={30} />,
    title: "Deeper Client Partnerships",
    description:
      "Grow long-term relationships through transparent delivery, proactive support, and shared product roadmaps.",
  },
  {
    icon: <IoDiamondOutline size={30} />,
    title: "Quality by Design",
    description:
      "Raise the bar on code quality, accessibility, and performance in every website, app, and AI build we ship.",
  },
  {
    icon: <IoMdGlobe size={30} />,
    title: "Scale with Confidence",
    description:
      "Help more real estate teams run projects on reliable technology across India and international markets.",
  },
  {
    icon: <IoMdCheckmarkCircleOutline size={30} />,
    title: "Human-Centered UX",
    description:
      "Design interfaces people actually enjoy—clear flows, fast feedback, and accessibility built in from day one.",
  },
  {
    icon: <LuBrainCircuit size={30} />,
    title: "Practical AI Adoption",
    description:
      "Make AI software approachable: measurable ROI, responsible data use, and tools teams can trust daily.",
  },
];

// frequently asked questions
export const faqs = [
  {
    id: 1,
    question: "Who is LinkAI Technologies for?",
    answer:
      "We build technology for the real estate industry, starting with developers and builders of residential, commercial and plotted projects. We also serve the channel partners, brokerages and sales teams who work with them.",
  },
  {
    id: 2,
    question: "What problems do you solve?",
    answer:
      "Leads that go cold because replies are slow, site visits that are missed, unclear lead ownership between channel partners, outdated prices and availability, buyers calling for construction updates, late milestone payments, and after sales requests that get lost. Each has a solution on our services page.",
  },
  {
    id: 3,
    question: "Do we have to replace our CRM?",
    answer:
      "No. We connect to the CRM, accounts and inventory sheets you already use. If you do not have a working CRM, we can set one up for your sales team.",
  },
  {
    id: 4,
    question: "How do we start, and how long does it take?",
    answer:
      "We start with the one problem that costs you most, for example slow lead follow up on one project. A first version is usually live in weeks, not months. We share a plan with milestones before building anything.",
  },
  {
    id: 5,
    question: "Will AI talk to our buyers without us knowing?",
    answer:
      "You decide what it can say and when a person takes over. It only uses the facts you approve, it never promises prices or dates you have not given it, and every conversation is visible to your team.",
  },
  {
    id: 6,
    question: "What does it cost?",
    answer:
      "It depends on the project and what we connect. Tell us what you want to fix and we will come back with a clear plan and price. There are no surprises after you agree.",
  },
  {
    id: 7,
    question: "Do you support us after launch?",
    answer:
      "Yes. We provide maintenance, monitoring, updates and improvements, and we review results with your team so the technology keeps earning its place.",
  },
];


// web development portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    title: "5G Homes",
    image: require("../assets/images/portfolio/web development/5ghomes.webp"),
  },
  {
    id: 2,
    title: "Autopilot",
    image: require("../assets/images/portfolio/web development/Autopilot.png"),
  },
  {
    id: 3,
    title: "Bayut",
    image: require("../assets/images/portfolio/web development/bayut.webp"),
  },
  {
    id: 4,
    title: "Cold Creekcap",
    image: require("../assets/images/portfolio/web development/cold creekcap.webp"),
  },
  {
    id: 5,
    title: "College Nutritionist",
    image: require("../assets/images/portfolio/web development/collegenutritionist.png"),
  },
  {
    id: 6,
    title: "Leadership.net",
    image: require("../assets/images/portfolio/web development/leadership.net.png"),
  },
  {
    id: 7,
    title: "Menissa Caterings",
    image: require("../assets/images/portfolio/web development/menissa caterings.webp"),
  },
  {
    id: 8,
    title: "Think Reality",
    image: require("../assets/images/portfolio/web development/think reality.webp"),
  },
];

// app development portfolio
export const appDevelopmentPortfolio = [
  {
    id: 1,
    title: "Cryptopadie",
    image: require("../assets/images/portfolio/app development/cryptopadie.png"),
  },
  {
    id: 2,
    title: "Doctor Plus",
    image: require("../assets/images/portfolio/app development/doctorplus.png"),
  },
  {
    id: 3,
    title: "Dubai Travel Guide",
    image: require("../assets/images/portfolio/app development/dubai travel guide.webp"),
  },
  {
    id: 4,
    title: "Elora Hair Palour",
    image: require("../assets/images/portfolio/app development/elora hair palour.webp"),
  },
  {
    id: 5,
    title: "Evans Francis",
    image: require("../assets/images/portfolio/app development/evans francis.webp"),
  },
  {
    id: 6,
    title: "House of Deliverance",
    image: require("../assets/images/portfolio/app development/house of deliverance.png"),
  },
  {
    id: 7,
    title: "MyBitsShop",
    image: require("../assets/images/portfolio/app development/mybitsshop.webp"),
  },
  {
    id: 8,
    title: "Namaz",
    image: require("../assets/images/portfolio/app development/namaz.webp"),
  },
  {
    id: 9,
    title: "Potea",
    image: require("../assets/images/portfolio/app development/potea.webp"),
  },
  {
    id: 10,
    title: "Rentop",
    image: require("../assets/images/portfolio/app development/rentop.png"),
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.jpg"),
    description:
      "Our custom website design services are tailored to reflect your brand’s identity and vision. We work closely with you to create a website that is visually appealing, user-friendly, and optimized for performance. Whether it's a portfolio, business site, or blog, we ensure your website stands out. Our designs are responsive, ensuring a great user experience on any device.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.jpg"),
    description:
      "We specialize in building scalable, secure, and high-performing e-commerce platforms. Whether you're launching a new online store or enhancing an existing one, we integrate the best payment gateways, inventory management systems, and marketing tools. Our solutions are designed to boost sales and provide customers with a seamless shopping experience.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.jpg"),
    description:
      "Our Content Management System (CMS) solutions make it easy for businesses to manage their website’s content. We work with popular CMS platforms like WordPress, Joomla, and Drupal to create flexible, easy-to-use interfaces. With our CMS, you can easily update your website, add new content, and manage media without needing technical expertise.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.jpg"),
    description:
      "Our API integration services connect your website with third-party tools and services, enhancing its functionality and performance. From payment gateways to CRM systems, we ensure seamless communication between your website and external platforms. We provide custom API integrations that meet your specific business requirements, streamlining operations and improving efficiency.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.jpg"),
    description:
      "We provide comprehensive website maintenance and support to keep your site secure, updated, and performing optimally. Our services include regular updates, security enhancements, and performance monitoring to prevent potential issues. Whether it's fixing bugs, optimizing speed, or ensuring compatibility with new technologies, we’ve got you covered.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.jpg"),
    description:
      "Our iOS app development services ensure that your app is optimized for the Apple ecosystem. We focus on delivering high-performance, user-friendly applications tailored to meet the unique needs of iOS users. Whether it’s for iPhone, iPad, or Apple Watch, we create seamless experiences. From concept to launch, we prioritize quality and usability.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.jpg"),
    description:
      "With our Android app development services, we create robust and feature-rich applications for Android devices. We work with the latest Android frameworks to ensure smooth performance across various devices. Our apps are designed for scalability and longevity. Trust us to bring your Android app vision to life with precision and speed.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.jpg"),
    description:
      "Our cross-platform app development services enable you to reach a broader audience by creating apps that work seamlessly across both iOS and Android platforms. By using technologies like React Native and Flutter, we ensure consistent user experiences and reduce time-to-market. Maximize your app’s reach while saving on development costs with our solutions.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.jpg"),
    description:
      "We believe that the design is crucial to app success. Our UI/UX design services focus on creating intuitive, engaging, and aesthetically pleasing designs. We research your target audience to build interfaces that are easy to navigate. Our goal is to make sure users love using your app while ensuring it’s functional and visually appealing.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.jpg"),
    description:
      "Before launching your app, we conduct thorough testing to ensure it’s bug-free, secure, and optimized. Our testing includes performance, usability, and compatibility checks across multiple devices and platforms. Once your app passes all tests, we guide you through the deployment process, ensuring a smooth launch on the App Store or Google Play.",
  },
];
