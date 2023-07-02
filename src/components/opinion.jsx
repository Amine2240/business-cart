import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import people1 from "../assets/people01.png";
import people2 from "../assets/people02.png";
import people3 from "../assets/people03.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Opinion = () => {
  const infotable = [
    {
      id: 0,
      image: people1,
      name: "hermna jensen",
      position: "founder & leader",
      para: "money is only a tool.It will take you wherever you wish, but it will not replace you as the driver",
    },
    {
      id: 1,
      image: people2,
      name: "Amine kadoum",
      position: "co-founder & freelancer",
      para: "money makes your life easier. If youre lucky to have it, youre lucky",
    },
    {
      id: 2,
      image: people3,
      name: "Bouzid Days",
      position: "founder & CEO",
      para: "It is usually people in the money business, finance, and international trade that are really rich.",
    },
  ];
  return (
    <>
      <div className="lg:flex lg:flex-row lg:place-content-center lg:items-center mt-20 gap-20 sm:flex sm:flex-col">
        {infotable.map((item) => {
          return (
            <>
              <div
                className=" flex flex-col place-content-between opinion "
                data-aos={
                  item.id === 0
                    ? "fade-left"
                    : item.id === 1
                    ? "fade-up"
                    : "fade-right"
                }
              >
                <p>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className=" text-6xl quotes"
                  />{" "}
                </p>

                <p className=" w-66 text-xl font-medium">{item.para}</p>
                <div className=" flex items-center">
                  <div className=" w-11">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <p className=" text-xl ml-3 capitalize"> {item.name} </p>
                    <p className=" text-gray-500 ml-3 capitalize">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Opinion;
