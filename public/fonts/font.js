import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "./SFPRODISPLAYBOLD.otf",
      weight: "700",
    },
    {
      path: "./SFPRODISPLAYREGULAR.otf",
      weight: "400",
    },
    {
      path: "./SFPRODISPLAYMEDIUM.otf",
      weight: "500",
    },
  ],
  display: "swap",
  variable: "--sfpro",
});
