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
    name: "Sign Up",
    link: "/signup",
    id: 1,
  },
  {
    name: "Demo",
    link: "/demo",
    id: 2,
  },
];
