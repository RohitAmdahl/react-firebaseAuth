export type FooterBar = {
  name: string;
  link: string;
  id: number | string;
};

export const FooterItems: FooterBar[] = [
  {
    name: "Contact",
    link: "/contact",
    id: 0,
  },

  {
    name: "Sign Up",
    link: "/signup",
    id: 1,
  },
];
