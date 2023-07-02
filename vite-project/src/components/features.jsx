import "./features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShield,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Features() {
  const infotable = [
    {
      id: 0,
      icon: (
        <FontAwesomeIcon
          icon={faStar}
          className=" text-3xl  rounded-full p-3 icons"
        />
      ),
      title: "rewards",
      para: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
    },
    {
      id: 1,
      icon: (
        <FontAwesomeIcon
          icon={faShield}
          className=" text-3xl  rounded-full p-3 icons"
        />
      ),
      title: "100% secured",
      para: "We take proactive steps make sur your information and transactions are secure.",
    },
    {
      id: 2,
      icon: (
        <FontAwesomeIcon
          icon={faPaperPlane}
          className=" text-3xl  rounded-full p-3 icons"
        />
      ),
      title: "balance transfer",
      para: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];
  return (
    <>
      <div className=" flex yaw mt-40 h-72 lg:flex-row sm:flex-col">
        <div className="sectionblur"></div>
        <div className=" flex flex-col items-start place-content-evenly h-96">
          <p className=" text-6xl font-semibold titre capitalize">
            you do the business, well handle the money.
          </p>
          <p className=" text-gray-500 text-lg">
            Wit the right credit card, you can improve your financial life by
            building credit,earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Link to="/soon">
            <button className=" text-black px-4 py-2 rounded-lg w-36 h-11 bouton font-medium capitalize">
              get started
            </button>
          </Link>
        </div>
        <div className=" w-3/4">
          {infotable.map((item) => {
            return (
              <>
                <div
                  className=" flex items-center h-32 forhover"
                  data-aos="fade-left"
                >
                  {item.icon}
                  <div className=" ml-5">
                    <p className=" text-2xl font-semibold mb-2 capitalize">
                      {item.title}
                    </p>
                    <p className=" text-gray-500 text-lg">{item.para}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
