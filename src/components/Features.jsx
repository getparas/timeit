import features from "../images/features.svg";
import secure from "../images/secure.svg";
import manage from "../images/manage.svg";
import loyalti from "../images/loyalti.svg";
import kite from "../images/kite.png";
const Features = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:px-8">
      <h1 className="text-[#494759] text-3xl md:text-6xl my-10 text-center font-bold">
        Features
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row md:justify-between">
        <div className="flex flex-wrap items-center justify-start w-full mb-10 md:w-1/2 md:mb-0">
          <img src={features} alt="Feature Image" className="" />
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2 md:gap-8">
          {/* First Card */}
          <div className="flex flex-col h-full p-4 bg-white border-2 border-blue-200 rounded-lg shadow-md items-left ">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500">
                <img src={secure} alt="Secure" className="w-8 h-8" />
              </span>
              <h2 className="text-4xl font-semibold text-gray-700">Secure</h2>
            </div>
            <p className="text-2xl text-left text-gray-500">
              Access exclusive discounts and offers effortlessly.
            </p>
          </div>
          {/* Second Card */}
          <div className="flex flex-col h-full p-4 bg-white border-2 border-blue-200 rounded-lg shadow-md items-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500">
                <img src={manage} alt="Manage Bookings" className="w-8 h-8" />
              </span>
              <h2 className="text-4xl font-semibold text-gray-700">
                Manage Bookings
              </h2>
            </div>
            <p className="text-2xl text-left text-gray-500">
              Sync calendars, view user stats, and manage services seamlessly.
            </p>
          </div>
          {/* Third Card */}
          <div className="flex flex-col h-full p-4 bg-white border-2 border-blue-200 rounded-lg shadow-md items-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500">
                <img src={loyalti} alt="Loyalty" className="w-8 h-8" />
              </span>
              <h2 className="text-4xl font-semibold text-gray-700">Loyalty</h2>
            </div>
            <p className="text-2xl text-left text-gray-500">
              Access exclusive discounts and offers effortlessly.
            </p>
          </div>
          {/* Fourth Card */}
          <div className="flex flex-col h-full p-4 bg-white border-2 border-blue-200 rounded-lg shadow-md items-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500">
                <img src={kite} alt="Loyalty" className="w-8 h-8" />
              </span>
              <h2 className="text-4xl font-semibold text-gray-700">
                My Leisure
              </h2>
            </div>
            <p className="text-2xl text-left text-gray-500">
              Review your previous bookings and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
