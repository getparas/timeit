import email from "../images/email.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-b from-purple-400 to-blue-400">
              TimeIt
            </h1>
            <p className="flex items-center mt-2 text-base text-gray-700 md:text-lg">
              <img
                src={email}
                alt="Email"
                className="w-5 h-5 mr-2"
                loading="lazy"
              />
              Help@timelit.com
            </p>
          </div>

          <div className="flex flex-col mb-8 md:flex-row md:space-x-8 md:mb-0">
            <a
              href="#"
              className="mb-2 text-base text-gray-600 md:text-lg hover:underline md:mb-0"
            >
              Home
            </a>
            <a
              href="#"
              className="mb-2 text-base text-gray-600 md:text-lg hover:underline md:mb-0"
            >
              Features
            </a>
            <a
              href="#"
              className="mb-2 text-base text-gray-600 md:text-lg hover:underline md:mb-0"
            >
              Benefit
            </a>
            <a
              href="#"
              className="mb-2 text-base text-gray-600 md:text-lg hover:underline md:mb-0"
            >
              Reviews
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            <a
              href="#"
              className="mb-2 text-base text-gray-600 md:text-lg hover:underline md:mb-0"
            >
              Privacy Policies
            </a>
            <a
              href="#"
              className="text-base text-gray-600 md:text-lg hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <footer className="pt-6 mt-12 border-t-2 border-gray-300">
          <p className="text-sm font-bold text-center text-gray-600 md:text-base">
            Copyright 2024 TimelIt.com All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
