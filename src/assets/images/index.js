const images = {
  logo: require("~/assets/images/logo.svg").default,
  // Only svg file need .default (webpack handle others)
  noImage: require("~/assets/images/no-image.png"),
};

export default images;
