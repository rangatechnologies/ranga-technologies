import {
  faAngleRight,
  faBars,
  faCaretDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../Imgs/logo.svg";
import { PAGES } from "../../Pages/Home/Home";
import ContactUsView from "../ContactUsView/ContactUsView";
import FloatingButton from "../FloatingButton/FloatingButton";
import LoginView from "../LoginVIew/LoginVIew";
import "./styles.css";

export default function NavBar() {
  const [dropMenuOpen, setDropMenuOpen] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const [showLogin, setShowLogin] = React.useState(false);
  const [loginTabIndex, setLoginTabIndex] = React.useState(0);

  const location = useLocation();
  const handleClick = () => setMobileMenu(false);
  const ArrowIcon = () => (
    <span className="md:hidden pr-3 text-text font-bold">
      <FontAwesomeIcon icon={faAngleRight} />
    </span>
  );

  const isSelected = (link: string) => location.hash === link;
  const Link = (props: {
    to: string;
    children: string;
    onClick?: () => void;
    selected?: boolean;
  }) => (
    <NavLink
      {...props}
      className={
        "flex border-b-nav md:border-b-4 border-text md:border-colorid5658bf4e    md:font-medium align-middle md:px-4 h-14 w-80 md:w-fit md:justify-center md:h-full  items-center text-colorid7e810469 " +
        (props.selected ? "md:border-text" : "md:hover:border-secondary")
      }
    >
      <ArrowIcon />
      {props.children}
    </NavLink>
  );

  const MenuLink = (props: { to: string; children: string }) => (
    <NavLink
      onClick={handleClick}
      {...props}
      className="flex md:border-b-0 w-full font-bold align-middle px-2 h-12  items-center text-colorid3b2eb70d"
    >
      <ArrowIcon />
      {props.children}
    </NavLink>
  );

  // const homeLinks = [
  //   {
  //     link: PAGES.chart,
  //     text: "How to use",
  //   },
  //   {
  //     link: PAGES.features,
  //     text: "Features",
  //   },
  //   // {
  //   //   link: PAGES.comparison,
  //   //   text: "Comparison",
  //   // },
  // ];

  return (
    <>
      <div className="fixed top-0 z-50">
        <ContactUsView
          page={loginTabIndex}
          show={showLogin}
          close={setShowLogin}
          setTabIndex={setLoginTabIndex}
        />

      </div>
      <div className="bg-colorid5658bf4e flex-row h-nav md:items-center justify-between   flex md:justify-center">
        <NavLink to="/">
          <img src={logo} className="h-10 md:mt-0 mt-2 mb-2  " alt="" />
        </NavLink>

        <FontAwesomeIcon
          icon={faBars}
          className="text-colorid3b2eb70d h-6 pr-4 md:hidden mt-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <div
          className={
            "fixed top-0 md:relative md:w-full md:h-full  bg-colorid5658bf4e flex-row max-w-5xl items-center flex-grow  flex transition-all right-0 overflow-hidden" +
            (mobileMenu
              ? " md:max-h-full h-full w-full rounded-bl-none opacity-100"
              : " md:w-full w-0 md:h-full h-0 opacity-0 md:opacity-100 rounded-bl-full  md:rounded-bl-none ")
          }
        >
          <div
            className={
              mobileMenu
                ? "flex items-center w-full justify-center md:h-10 "
                : "hidden md:flex items-center w-full justify-center md:h-10  "
            }
          >
            <FontAwesomeIcon
              icon={faClose}
              className="absolute right-4 top-0 text-colorid3b2eb70d h-6 pr-2 md:hidden mt-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
            <div className="flex md:flex-row bg flex-col justify-end md:h-full text-nav  w-full items-center md:items-baseline">
              {/* {homeLinks.map((page) => (
                <Link
                  key={page.link}
                  to={"/#" + page.link}
                  onClick={handleClick}
                  selected={isSelected("#" + page.link)}
                >
                  {page.text}
                </Link>
              ))} */}
              {/* <Link
                to="docs"
                onClick={handleClick}
                selected={location.pathname === "/docs"}
              >
                Docs
              </Link> */}
              {/* <div className=" flex flex-col md:flex-row w-80 md:w-fit h-full pt-4 md:pt-2 md:px-4 items-center align-middle  text-colorid3b2eb70d font-normal cursor-pointer"> */}
                {/* <div
                  onClick={() => setDropMenuOpen(!dropMenuOpen)}
                  className="md:border-b-4 w-full border-b-nav pb-4 mb-1 md:mb-0 md:pb-0  border-text  md:border-b-colorid5658bf4e h-10 flex items-center md:hover:border-secondary"
                >
                  <ArrowIcon />
                  <FontAwesomeIcon className="pl-2" icon={faCaretDown} />
                </div> */}

                {/* <div
                  className={
                    "md:fixed w-full md:w-fit md:top-12 md:-translate-x-16 px-2 bg-colorid5658bf4e rounded-md transition-all duration-500 " +
                    (dropMenuOpen
                      ? "h-20 md:h-fit opacity-100"
                      : "h-0 md:h-fit opacity-0 hidden")
                  }
                >
                  <MenuLink to="Документация">Документация</MenuLink>
                </div> */}
              {/* </div> */}
              <div className="md:px-4 space-x-1 flex flex-row text-colorid3b2eb70d h-12 md:h-6 text-xs font-semibold">
                {/* <button
                  className="bg-text rounded-md flex flex-grow  w-full md:w-fit px-2 justify-center items-center h-full "
                  onClick={() => {
                    setLoginTabIndex(0);
                    setShowLogin(true);
                  }}
                >
                  Request a Demo
                </button>
                <button
                  className="bg-primary rounded-md flex flex-grow w-full px-2 md:w-fit justify-center items-center h-full"
                  onClick={() => {
                    setLoginTabIndex(1);
                    setShowLogin(true);
                  }}
                >
                  Contact Us
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
