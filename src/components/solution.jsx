import "./solution.css";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import card from "../assets/card.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Solution = () => {
  return (
    <>
      <div className=" flex  items-center mt-48 place-content-between lg:flex-row sm:flex-col">
        <div className=" lg:w-1/3 sm:w-96 lg:ml-40" data-aos="zoom-in">
          <img src={bill} alt="" />
        </div>
        <div
          className=" flex flex-col items-start place-content-evenly h-96 w-1/2"
          data-aos="fade-in"
        >
          <p className=" text-6xl font-semibold titre capitalize">
            easily control your billing & invoicing.
          </p>
          <p className=" text-gray-500 w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni
            vitae ipsum quos culpa veritatis excepturi optio illum, omnis velit
            aperiam iusto. Quod autem voluptatibus fugiat blanditiis
          </p>
          <div className=" flex  w-1/2 place-content-start">
            <div className=" mr-10">
              <img src={apple} alt="" />
            </div>
            <div>
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center mt-28 place-content-between lg:flex-row sm:flex-col">
        <div
          className=" flex flex-col items-start place-content-evenly h-96 ml-40"
          data-aos="fade-in"
        >
          <p className=" text-6xl font-semibold titre capitalize">
            find a better card deal in few earsy steps.
          </p>
          <p className=" text-gray-500 w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni
            vitae ipsum quos culpa veritatis excepturi optio illum, omnis velit
          </p>
          <Link to="/soon">
            <button className=" text-black px-4 py-2 rounded-lg w-36 h-11 bouton font-medium capitalize">
              get started
            </button>
          </Link>
        </div>

        <div className="lg:w-1/3 sm:w-96 lg:mr-40 " data-aos="zoom-in">
          <img src={card} alt="" />
        </div>
      </div>
    </>
  );
};

export default Solution;
