export const LANGUAGES = {
  EN: "en",
  ES: "es",
};

export const NAVBAR_ITEMS = {
  HOME: "home",
  PICAFLOR: "el-picaflor-polo",
  PATAGONIA: "patagonia-polo",
  BREEDING: "breeding",
  CONTACT: "contact-us",
};

export const SEASON = {
  AUTUMN: "autumn",
  SPRING: "spring",
  SUMMER: "summer",
};

export const BRAND_NAME = {
  PICAFLOR: "PICAFLOR",
  PATAGONIA: "PATAGONIA",
};

export const SOCIAL_MEDIA_BRANDS = {
  [BRAND_NAME.PICAFLOR]: [
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Ig.svg"),
      link: "https://www.instagram.com/elpicaflorpolo/",
      alt: "Instagram",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Fb.svg"),
      link: "https://www.facebook.com/",
      alt: "Facebook",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Li.svg"),
      link: "https://www.linkedin.com/company/el-picaflor-polo/posts/?feedView=all",
      alt: "Linkedin",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_YTube.svg"),
      link: "https://www.youtube.com/@ElPicaflorPolo",
      alt: "Youtube",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_VSCO.svg"),
      link: "https://vsco.co/elpicaflorpoloclub/gallery",
      alt: "VSCO",
    },
  ],
  [BRAND_NAME.PATAGONIA]: [
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Ig.svg"),
      link: "https://www.instagram.com/patagonia.polo/",
      alt: "Instagram",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Fb.svg"),
      link: "https://www.facebook.com/profile.php?id=100063451406446",
      alt: "Facebook",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_Li.svg"),
      link: "https://www.linkedin.com/company/patagonia-polo/posts/?feedView=all",
      alt: "Linkedin",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_YTube.svg"),
      link: "https://www.youtube.com/@PatagoniaPolo",
      alt: "Youtube",
    },
    {
      src: require("@/app/images/logos-sponsor/zocalo_Logo_VSCO.svg"),
      link: "https://vsco.co/patagoniapolo/gallery",
      alt: "VSCO",
    },
  ],
};

export const LOGOS = {
  PICAFLOR_LOGO: require("@/app/images/logos-sponsor/zocalo_Logo_ElPicaflor_blanco.svg"),
  PATAGONIA_LOGO: require("@/app/images/logos-sponsor/zocalo_Logo_Patagonia_blanco.svg"),
  PICAFLOR: SOCIAL_MEDIA_BRANDS[BRAND_NAME.PICAFLOR],
  PATAGONIA: SOCIAL_MEDIA_BRANDS[BRAND_NAME.PATAGONIA],
};
