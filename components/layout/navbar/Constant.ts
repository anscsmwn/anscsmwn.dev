export type NavLink = {
  url: string;
  text: string;
};

export const links: NavLink[] = [
  {
    text: 'Blog',
    url: '/blog',
  },
  {
    text: 'Projects',
    url: '/projects',
  },
  {
    text: 'About',
    url: '/about',
  },
];
