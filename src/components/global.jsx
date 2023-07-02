import "../App.css";
import Landingpage from "./landingpage";
import Features from "./features";
import Solution from "./solution";
import Aboutus from "./aboutus";
import Footer from "./footer";
import "./navbar.css";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

AOS.init();

function Global() {
  const targetRef1 = useRef();

  const handleButtonClick1 = () => {
    targetRef1.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef3 = useRef();

  const handleButtonClick3 = () => {
    targetRef3.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef4 = useRef();

  const handleButtonClick4 = () => {
    targetRef4.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef5 = useRef(null);

  const handleButtonClick5 = () => {
    targetRef5.current.scrollIntoView({ behavior: "smooth" });
  };

  const [ischecked, setischecked] = useState(false);

  const handlechecked = () => {
    setischecked(!ischecked);
  };

  return (
    <>
      <nav
        className=" lg:flex lg:flex-row lg:place-content-between lg:item lg:fixed sm:flex-col sm:place-content-between"
        ref={targetRef1}
      >
        <label htmlFor="#" className="  lg:w-40 ml-5 mt-3">
          {" "}
          <img src={logo} alt="" />{" "}
        </label>
        <label
          htmlFor="checkbox1"
          className={
            ischecked === false
              ? "sm:block lg:hidden absolute right-10 top-12"
              : "sm:hidden lg:hidden"
          }
        >
          <FontAwesomeIcon icon={faBars} className=" text-3xl cursor-pointer" />{" "}
        </label>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          className=" hidden"
          onChange={handlechecked}
        />

        <label
          htmlFor="checkbox2"
          className={
            ischecked === true
              ? "sm:block sm:mr-10 lg:hidden absolute right-10 top-10"
              : "sm:hidden lg:hidden"
          }
        >
          <FontAwesomeIcon
            icon={faXmark}
            className=" text-4xl cursor-pointer"
          />{" "}
        </label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          className=" hidden"
          onChange={handlechecked}
        />

        <ul
          className={
            ischecked === false
              ? " sm:hidden lg:flex lg:place-content-around  lg:items-end lg:flex-row  lg:p-2 lg:text-lg sm:flex-col sm:items-center"
              : " lg:w-2/5    lg:flex lg:place-content-around  lg:items-end lg:flex-row  lg:p-2 lg:text-lg sm:flex sm:place-content-around sm:flex-col sm:items-center lg:h-fit  sm:h-96 sm:w-full animate-slideIn ease-linear duration-500 "
          }
        >
          <li className=" cursor-pointer" onClick={handleButtonClick1}>
            <p className=" capitalize sm:text-xl">home</p>
            <div></div>
          </li>

          <li className=" cursor-pointer" onClick={handleButtonClick3}>
            <p className=" capitalize sm:text-xl">features</p>
            <div></div>
          </li>
          <li className=" cursor-pointer" onClick={handleButtonClick4}>
            <p className=" capitalize sm:text-xl">solution</p>
            <div></div>
          </li>
          <li className=" cursor-pointer" onClick={handleButtonClick5}>
            <p className=" capitalize sm:text-xl">about us</p>
            <div></div>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        icon={faChevronUp}
        className=" rounded-full w-10 h-10 p-2 goup z-10"
        onClick={handleButtonClick1}
      />
      <div ref={targetRef1}>
        <Landingpage />
      </div>
      <div ref={targetRef3} data-aos="fade-up">
        <Features />
      </div>
      <div ref={targetRef4}>
        <Solution />
      </div>
      <div ref={targetRef5}>
        <Aboutus />
      </div>
      <Footer />
    </>
  );
}

export default Global;
