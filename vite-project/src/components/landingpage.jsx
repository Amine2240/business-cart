import image1 from "../assets/robot.png";
import "./landingpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Statistics from "./statistics";
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <>
      <div className=" flex container1 lg:mt-28 sm:mt-80">
        <section className=" sectionblur"></section>
        <div className=" flex flex-col place-content-center pl-20">
          <div className=" w-max div1 px-5 py-2 rounded-2xl shadow-lg mb-8 ">
            <p className="  text-lg uppercase">
              {" "}
              <FontAwesomeIcon
                icon={faPercent}
                className="mr-4 iconpercent"
              />{" "}
              20% <span className=" text-gray-400"> discount for</span> 1 month{" "}
              <span className=" text-gray-400"> account</span>
            </p>
          </div>
          <div className=" flex div2 ">
            <p className=" text-7xl font-bold title capitalize">
              the next <span className="generation"> generation</span> payment
              method.
            </p>
            <Link to='/soon'>
            <div className=" provisoire cursor-pointer">
              <div className=" w-40 h-40 border-2 rounded-full started flex place-content-center items-center">
                <p className=" capitalize text-3xl font-semibold w-28 getstart">
                  get{" "}
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className=" rotate-45 ml-3 text-white"
                  />
                  started
                </p>
              </div>
            </div>
            </Link>
          </div>
          <p className="text text-lg">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage
            rates,annual fees.
          </p>
        </div>
        <div className=" image1">
          <section></section>
          <img src={image1} alt="" />
        </div>
      </div>
      <div>
        <Statistics />
      </div>
    </>
  );
}
