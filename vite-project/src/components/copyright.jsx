import "./copyright.css";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";

const Copyright = () => {
  return (
    <div className=" copyright flex place-content-between items-start">
      <p className=" text-gray-500 text-base ">
        {" "}
        Copyright @ 2023 hooBank. all rights reserved.
      </p>
      <div className=" flex w-1/3 place-content-end gap-6 mr-4">
        <div>
          <img src={insta} alt="" />
        </div>

        <div>
          <img src={linkedin} alt="" />
        </div>

        <div>
          <img src={twitter} alt="" />
        </div>

        <div>
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
