import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Imgs/logo.svg";
import ContactUsView from "../ContactUsView/ContactUsView";
import "./styles.css";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const [showLogin, setShowLogin] = React.useState(false);
  const [loginTabIndex, setLoginTabIndex] = React.useState(0);

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
              <div className="md:px-4 space-x-1 flex flex-row text-colorid3b2eb70d h-12 md:h-6 text-xs font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
