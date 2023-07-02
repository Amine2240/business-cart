import "./inthefutur.css";
const Inthefutur = () => {
  return (
    <>
      <p className=" capitalize text text-5xl text-center font-bold fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {" "}
        thanks for your interest but developing the entire work is postponed to
        another time, have a nice day.{" "}
        <p className=" text-white text-xl font-medium mt-10">
          credit to{" "}
          <span className=" cursor-pointer">
            {" "}
            <a
              href="https://www.youtube.com/@javascriptmastery"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              @javaScriptMastery
            </a>
          </span>{" "}
          for the design{" "}
        </p>
      </p>
    </>
  );
};

export default Inthefutur;
