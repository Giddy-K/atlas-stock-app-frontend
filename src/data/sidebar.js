import { FaTh, FaUserEdit, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        icon: <CgProfile />,
        path: "/profile",
      },
      {
        title: "Edit Profile",
        icon: <FaUserEdit />,
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
