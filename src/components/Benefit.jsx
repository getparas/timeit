import location from "../images/location.svg";
import iphone from "../images/iphone.svg";

const Benefit = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 md:flex-row md:items-start md:justify-around">
      <div className="text-center md:text-left md:w-1/2">
        <span className="text-[#494759] text-xl font-bold">Benefit</span>
        <h1 className="text-[#494759] text-4xl font-bold mt-4">
          Why choose TimeIt?
        </h1>
        <div className="flex items-center justify-center gap-5 mt-10 md:justify-start">
          <img src={location} alt="Location" className="w-12 h-12" />
          <span className="text-[#494759] text-2xl font-bold">
            Location-Based Suggestions
          </span>
        </div>
        <div className="mt-10">
          <ul className="font-semibold text-left list-disc text-md md:text-left">
            <li className="mb-4">
              Enable geolocation for customized nearby options
            </li>
            <li className="mb-4">Real-time GPS tracking to your location</li>
            <li className="mb-4">Multiple options for fast arrival</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 md:mt-0 md:w-1/2">
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-b from-[#DAC2FC] to-[#98C5FC] flex justify-center items-center">
          <img
            src={iphone}
            alt="iPhone"
            className="absolute w-80 h-80 object-contain md:w-[600px] md:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
