import hero2Img from "../../../assets/images/hero2.jpg";
import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from "~/shared/types";
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from "@tabler/icons-react";

export const hero2About: HeroProps = {
  title: "Great companies are made by great people",
  subtitle:
    "Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui.",
  tagline: "About Us Demo Page",
  callToAction: {
    text: "View jobs",
    href: "https://www.linkedin.com/",
    targetBlank: true,
  },
  callToAction2: {
    text: "Contact us",
    href: "/contact",
  },
  images: [
    {
      src: hero2Img,
      alt: "Hero TailNext",
    },
  ],
};

export const statsAbout: StatsProps = {
  id: "stats-on-about",
  hasBackground: true,
  items: [
    { title: 13269, description: "Downloads" },
    { title: 24.8, description: "Stars" },
    { title: 1767.77, description: "Forks" },
    { title: 484000, description: "Users" },
  ],
};

export const featuresFourAbout: FeaturesProps = {
  id: "features-four-on-about",
  hasBackground: false,
  header: {
    title: "Our mission",
    subtitle:
      "Quisque laoreet nisi et lectus consectetur, at placerat libero dictum. Donec sed hendrerit turpis. Nunc vel nibh blandit, hendrerit turpis non, mattis magna. Duis feugiat dui mi, eget iaculis ligula gravida congue. Nam quis mauris id eros imperdiet imperdiet. In et dolor non nisi vestibulum rhoncus nec eget dolor.",
    tagline: "Mission and Values",
  },
};

export const featuresFourAboutTwo: FeaturesProps = {
  id: "features-four-on-about-two",
  hasBackground: false,
  header: {
    title: "Our values",
    subtitle: "Etiam tellus tortor, mattis id mauris et, lobortis ullamcorper nunc.",
  },
  isAfterContent: true,
  columns: 2,
  items: [
    { title: "Customer-centricity", description: "Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.", icon: IconUser },
    { title: "Innovation and adaptability", description: "Etiam ornare, purus nec venenatis porttitor, velit leo convallis dui, at porttitor nibh tortor quis velit.", icon: IconBulb },
    { title: "Quality assurance", description: "Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.", icon: IconThumbUp },
    { title: "Accessibility and customization", description: "Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.", icon: IconAdjustments },
    { title: "Collaboration and partnership", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis.", icon: IconHeartHandshake },
    { title: "Ethical and responsible design", description: "Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.", icon: IconHomeEco },
  ],
};

export const stepsAbout: StepsProps = {
  id: "steps-on-about",
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: "History of TailNext",
    subtitle: "Duis sit amet magna et sapien cursus fermentum. Curabitur ac mauris non magna condimentum scelerisque. Aliquam nunc ipsum, semper ac scelerisque sit amet, pulvinar vitae libero.",
    tagline: "Company History",
  },
  items: [
    { title: "Our foundation", description: "Donec pharetra, justo a rutrum venenatis, augue erat porta leo, non eleifend dui lectus ut turpis. Fusce tincidunt mattis magna eu commodo. Proin non facilisis enim, ut luctus dolor.", icon: IconNumber1 },
    { title: "The early years", description: "Nunc scelerisque dui non nulla faucibus, sed elementum urna congue. Donec varius nisi sit amet massa malesuada euismod. Donec auctor interdum leo eget ultricies.", icon: IconNumber2 },
    { title: "Growth", description: "Vestibulum euismod dolor vel magna consectetur, vitae ornare metus finibus. Nam nec magna lacinia, cursus purus ut, pellentesque ex. Aliquam nec porta sapien, nec iaculis odio. Donec sed lacus arcu.", icon: IconNumber3 },
    { title: "Expanding horizons", description: "Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.", icon: IconNumber4 },
    { title: "Our ongoing commitment", description: "Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.", icon: IconNumber5 },
  ],
};
