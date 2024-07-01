import Logo from "../assets/logo.png";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const currentPage = sessionStorage.getItem("currentPage");
  const isMobileScreen = useMediaQuery("(max-width: 840px)");

  console.log(currentPage);

  return (
    <div className="flex items-center pl-[10px]">
      {isMobileScreen && <MenuIcon />}
      <div className="w-full h-[50px] flex items-center justify-between px-[20px] pt-[5px]">
        <div className="flex items-center justify-center h-full">
          <img src={Logo} alt="" className="h-[90%]" />
          <h1 className="text-2xl font-light ml-[10px]">CITEA</h1>
        </div>
        {!isMobileScreen && (
          <div className="flex items-center justify-between w-[600px] text-[16px] mr-[10px] font-light">
            <Link
              to="/"
              className={currentPage == 0 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 0);
              }}
            >
              Home
            </Link>
            <Link
              to="/keynote-speaker"
              className={currentPage == 1 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 1);
              }}
            >
              Keynote Speakers
            </Link>
            <Link
              to="/schedule"
              className={currentPage == 2 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 2);
              }}
            >
              Schedule
            </Link>
            <Link
              to="/hackathon"
              className={currentPage == 3 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 3);
              }}
            >
              Hackathon
            </Link>
            <Link
              to="/register"
              className={currentPage == 4 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 4);
              }}
            >
              Registeration
            </Link>
            <Link
              to="/contact"
              className={currentPage == 5 ? "font-normal" : "font-light"}
              onClick={() => {
                sessionStorage.setItem("currentPage", 5);
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
