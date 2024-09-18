import downloads from "../images/Mask_group.svg";
import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";

const Download = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="flex flex-col items-start justify-center w-full bg-center bg-cover rounded-md h-64 sm:h-80 md:h-96 lg:h-[500px]"
        style={{ backgroundImage: `url(${downloads})` }}
      >
        <div className="ml-4 sm:ml-6 md:ml-10">
          <h1 className="text-xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready To Get Started?
          </h1>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col items-start gap-4 mt-6 mb-6 ml-4 sm:ml-6 md:ml-10 md:flex-row md:justify-start">
          <a
            href="#"
            className="flex items-center p-2 bg-white rounded-md md:p-3 md:text-xl"
          >
            <img
              src={appstore}
              alt="App Store"
              className="w-6 h-6 mr-2 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <span className="text-base sm:text-lg md:text-2xl">
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
              className="w-6 h-6 mr-2 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <span className="text-base sm:text-lg md:text-2xl">
              Download on the <br /> Play Store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
