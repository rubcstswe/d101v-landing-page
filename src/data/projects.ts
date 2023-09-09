export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Collaro Shopify E-Commerce",
    techs: ["Remix (Hydrogen Shopify)", "Contentful", "Firebase"],
    link: "https://collaro.co",
  },
  {
    title: "Gedu College of Business ",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://gcbs.edu.bt",
    isComingSoon: true,
  },
  {
    title: "Horus",
    techs: ["ReactJS (NextJS)", "TypeScript", "Ethereum", "Linea"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
