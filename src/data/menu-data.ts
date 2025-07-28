import { menusType } from "@/interFace/interFace";

const menu_data:menusType[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Početna",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "O nama",
    link: "/about",
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Usluge",
    link: "/service",
  
  },
  // {
  //   id: 4,
  //   hasDropdown: true,
  //   title: "Projects",
  //   link: "/project",
  //   submenus: [
  //     { title: "Our Projects", link: "/project" },
  //     { title: "Project Details", link: "/project-details" },
  //   ],
  // },
  // {
  //   id: 5,
  //   hasDropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   submenus: [
  //     { title: "Our Blog", link: "/blog" },
  //     { title: "Blog Details", link: "/blog-details" },
  //   ],
  // },
  // {
  //   id: 6,
  //   hasDropdown: true,
  //   title: "Pages",
  //   link: "/pricing",
  //   submenus: [
  //     { title: "Pricing", link: "/pricing" },
  //     { title: "Faq Page", link: "/faq" },
  //     { title: "Creative Team", link: "/team" },
  //     { title: "Team Details", link: "/team-details" },
  //     { title: "SignIn", link: "/signin" },
  //     { title: "Forgot Password", link: "/forgot-password" },
  //     { title: "SignUp", link: "/signup" },
  //     { title: "Contact", link: "/contact" },
  //   ],
  // },
  {
    id: 6,
    hasDropdown: false,
    title: "Česta pitanja",
    link: "/faq" 
  },
  {
    id: 7,
    hasDropdown: false,
    title: "Kontakt",
    link: "/contact",
  },
];

export default menu_data;
