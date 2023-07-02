import logo from "../assets/logo.svg";
import Copyright from "./copyright";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col contain mt-20">
        <div className=" lg:flex lg:flex-row lg:place-content-evenly footer lg:items-start lg:pt-16 sm:flex sm:flex-col">
          <div className="">
            <div className=" ">
              <img src={logo} alt="" />
            </div>
            <p className=" text-gray-500 w-72 mt-10 text-lg">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <ul className=" capitalize">
            <li className=" font-medium text-2xl mb-3">usefull links</li>
            <li className=" text-gray-500 mb-1">content</li>
            <li className=" text-gray-500 mb-1">how it works</li>
            <li className=" text-gray-500 mb-1">create</li>
            <li className=" text-gray-500 mb-1">explore</li>
            <li className=" text-gray-500 mb-1">terms & services</li>
          </ul>

          <ul className=" capitalize">
            <li className=" font-medium text-2xl mb-3">communtiy</li>
            <li className=" text-gray-500 mb-1">help center</li>
            <li className=" text-gray-500 mb-1">partners</li>
            <li className=" text-gray-500 mb-1">suggestions</li>
            <li className=" text-gray-500 mb-1">blog</li>
            <li className=" text-gray-500 mb-1">newsletters</li>
          </ul>

          <ul className=" capitalize">
            <li className=" font-medium text-2xl mb-3">partner</li>
            <li className=" text-gray-500 mb-1">our partner</li>
            <li className=" text-gray-500 mb-1">become a partner</li>
          </ul>
        </div>
        <div className="facil"> </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
