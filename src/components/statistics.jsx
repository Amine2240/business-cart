import "./statistics.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Statistics = () => {
  const infotable = [
    {
      id: 0,
      number: 3800,
      stat: "user active",
    },
    {
      id: 1,
      number: 230,
      stat: "trusted by company",
    },
    {
      id: 2,
      number: "$230M",
      stat: "transaction",
    },
  ];

  return (
    <div className=" flex w-full place-content-evenly mt-10 flex-wrap">
      {infotable.map((item) => {
        return (
          <>
            <div
              data-aos={
                item.id === 0
                  ? "fade-right"
                  : item.id === 1
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-duration="700"
            >
              <p className=" text-4xl font-bold">
                {item.number}+{" "}
                <span className=" font-semibold text-3xl capitalize">
                  user active
                </span>
              </p>
            </div>
            {item.id !== 2 && (
              <div className=" h-5 w-1 bg-gray-400 rounded-lg mt-4"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Statistics;
