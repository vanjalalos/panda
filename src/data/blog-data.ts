import thumb1 from "../../public/assets/img/blog/blog-img-9.jpg"
import thumb2 from "../../public/assets/img/blog/blog-img-10.jpg"
import thumb3 from "../../public/assets/img/blog/blog-img-11.jpg"
import thumb4 from "../../public/assets/img/blog/blog-img-6.jpg"
import thumb5 from "../../public/assets/img/blog/blog-img-7.jpg"
import thumb6 from "../../public/assets/img/blog/blog-img-8.jpg"
import { blogType } from "@/interFace/interFace"

const blogs:blogType[] = [
  {
    id: 1,
    date: "April 02, 2023",
    title: "Our Strategy Create Business Growth",
    img: thumb1,
    user: "By Admin",
    comments: 5,
    button: "Read more",
  },
  {
    id: 2,
    date: "April 03, 2023",
    title: "We work with change oriented executives",
    img: thumb2,
    user: "By Admin",
    comments: 3,
    button: "Read more",
  },
  {
    id: 3,
    date: "April 05, 2023",
    title: "From banking and insurance to wealth",
    img: thumb3,
    user: "By Admin",
    comments: 0,
    button: "Read more",
  },
  {
    id: 4,
    date: "April 06, 2023",
    title: "Representation on Digital platforms.",
    img: thumb4,
    user: "By Admin",
    comments: 8,
    button: "Read more",
  },
  {
    id: 5,
    date: "April 07, 2023",
    title: "Everything to keep in mind when designing",
    img: thumb5,
    user: "By Admin",
    comments: 4,
    button: "Read more",
  },
  {
    id: 6,
    date: "April 08, 2023",
    title: "A step-by-step adding authentication",
    img: thumb6,
    user: "By Admin",
    comments: 10,
    button: "Read more",
  },
];

export default blogs;
