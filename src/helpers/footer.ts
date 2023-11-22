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
    name: "Faq",
    link: "/faq",
    id: 1,
  },
  {
    name: "Lon In",
    link: "/login",
    id: 2,
  },
];
