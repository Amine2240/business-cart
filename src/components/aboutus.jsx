import "./aboutus.css";
import Opinion from "./opinion";
import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

export default function Aboutus() {
  return (
    <>
      <div className=" mt-48">
        <div
          className=" lg:flex lg:place-content-evenly  lg:flex-row sm:flex sm:items-center sm:flex-col "
          data-aos="fade-down"
        >
          <p className=" text-6xl font-semibold titre capitalize">
            what people are saying about us
          </p>
          <p className=" text-xl text-gray-500 w-1/3 mt-10">
            everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
        <section></section>

        <Opinion />

        <div className="flex lg:place-content-center gap-40 mt-20 lg:flex-row sm:flex-col sm:items-center">
          <div className=" w-48">
            <img src={airbnb} alt="" />
          </div>
          <div className=" w-52 mt-2">
            <img src={binance} alt="" />
          </div>
          <div className=" w-48 mt-1">
            <img src={coinbase} alt="" />
          </div>
          <div className=" w-48 mt-2">
            <img src={dropbox} alt="" />
          </div>
        </div>
        <div
          className=" flex service lg:place-content-around lg:flex-row lg:items-center mt-20 sm:flex sm:flex-col sm:items-center "
          data-aos="fade-up"
        >
          <div>
            <p className=" text-5xl font-semibold titre capitalize w-fit">
              {" "}
              lets try our service now!
            </p>
            <p className="writing ">
              Everything you need to accept card payment and grow your business
              anywhere on the planet
            </p>
          </div>
          <Link to="/soon">
            <button className=" text-black rounded-lg w-40 h-16 bouton font-medium capitalize text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
