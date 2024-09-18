import { useState, useEffect, useRef } from "react";
import testimonial from "../images/testimonial.svg";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      image: image1,
      title: "The Best App to help you manage your time",
      text: "Absolutely love the seamless booking process and the personalized recommendations!",
    },
    {
      image: image2,
      title: "The Best App to help you manage your time",
      text: "The app’s interface is intuitive, making it easy to find and book activities quickly.",
    },
    {
      image: image3,
      title: "The Best App to help you manage your time",
      text: "Great loyalty rewards! I've already used several coupons for discounts on my favorite classes.",
    },
    {
      image: image4,
      title: "The Best App to help you manage your time",
      text: "I love how easy it is to track my progress with TimeIt. It keeps me motivated.",
    },
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
    resetInterval(); // Reset the interval on image select
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen my-[10rem]">
      <div className="text-center">
        <span className="text-[#494759] text-xl font-bold">Testimonial</span>
        <h1 className="text-[#494759] font-bold text-5xl mt-5 mb-10">
          What Our Users Say <br /> About Us?
        </h1>
      </div>
      <div className="flex flex-col flex-wrap justify-around md:flex-row">
        <div className="">
          <img src={testimonial} alt="Testimonial" />
        </div>
        <div className="mt-10 w-full md:w-[50%]">
          <div
            className="text-[#494759] text-3xl font-bold"
            style={{ minHeight: "50px" }}
          >
            {testimonials[activeIndex].title}
          </div>
          <p className="my-5 text-xl" style={{ minHeight: "50px" }}>
            {testimonials[activeIndex].text}
          </p>
          {/* Adjust layout for small screens */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 md:flex md:items-center md:gap-6">
            {testimonials.map((item, index) => (
              <img
                key={index}
                className={`rounded-full border-4 border-[#B5B3D6] object-cover cursor-pointer transition-transform duration-500 ${
                  activeIndex === index
                    ? "w-32 h-32 scale-110"
                    : "w-24 h-24 opacity-50"
                }`}
                src={item.image}
                alt={`Testimonial ${index + 1}`}
                onClick={() => handleSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
