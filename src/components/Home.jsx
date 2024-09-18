import home from "../images/home.svg";
import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";
const Home = () => {
  return (
    <div className="flex flex-col items-center h-[90%] mb-10 gap-10 mt-10 lg:flex-row md:justify-between">
      <div className="">
        <h1 className="font-bold leading-normal md:leading-normal text-[#494759] text-3xl text-center md:text-8xl lg:text-left ">
          Find the best way to <br />
          spend your free <br />
          time{" "}
          <span className="bg-gradient-to-b from-[#DAC2FC] to-[#98C5FC] bg-clip-text text-transparent">
            TIMEIT
          </span>
        </h1>
        <div className="flex flex-col items-center gap-4 mt-10 mb-6 md:flex-row md:justify-start">
          <a
            href="#"
            className="flex items-center p-2 text-white bg-gradient-to-b rounded-md text-lg from-[#DAC2FC] to-[#98C5FC] md:p-3 md:text-xl"
          >
            <img
              src={appstore}
              alt="App Store"
              className="w-8 h-8 mr-2 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-2xl">
              Download on the <br /> App Store
            </span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-white bg-black rounded-md md:p-3 md:text-xl"
          >
            <img
              src={playstore}
              alt="Play Store"
              className="w-8 h-8 mr-2 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-2xl">
              Download on the <br /> Play Store
            </span>
          </a>
        </div>
      </div>
      <div className="">
        <img className="w-full h-full" src={home} alt="Home icon" />
      </div>
    </div>
  );
};

export default Home;
