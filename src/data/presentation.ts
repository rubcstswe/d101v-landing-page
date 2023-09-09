type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "swe.cst@rub.edu.bt",
  title: "Hi, We’re D101V 👋",
  // profile: "/profile.webp",
  description:
    "Kuzuzangpola, we're a *Bhutanese Software Development Arm from Royal University of Bhutan* with over *10 years* of joint web experience. We are currently working with *Flutter, NextJS, Remix & Ethereum*.",
  socials: [
    // {
    //   label: "X",
    //   link: "https://twitter.com/itsstormzz_",
    // },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/m-wolff",
    // },
    // {
    //   label: "Github",
    //   link: "https://github.com/MaeWolff",
    // },
  ],
};

export default presentation;
