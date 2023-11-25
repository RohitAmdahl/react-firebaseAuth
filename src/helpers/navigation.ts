export type Navbar = {
  name: string;
  link: string;
  id: number | string;
};

export const navItems: Navbar[] = [
  {
    name: "Home",
    link: "/",
    id: 0,
  },
  {
    name: "Faq",
    link: "/faq",
    id: 1,
  },
  {
    name: "Log In",
    link: "/login",
    id: 2,
  },
  {
    name: "Demo",
    link: "/demo",
    id: 3,
  },
];
