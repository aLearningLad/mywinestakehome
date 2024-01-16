import { Isociallinks } from "@/types";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const sociallinks: Isociallinks[] = [
  {
    icon: <RiInstagramFill size={20} color="white" />,
    title: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaPinterest size={20} color="white" />,
    title: "Pinterest",
    link: "https://za.pinterest.com",
  },
  {
    icon: <FaFacebook size={20} color="white" />,
    title: "Facebook",
    link: "https://www.facebook.com/",
  },
];
