import { JSX, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

// Import media
import teamImage1 from "/Jude.jpg";
import teamImage2 from "/Ryan.jpg";
import teamImage3 from "/Costo.jpg";

const Home = (): JSX.Element => {
  let navigate = useNavigate();
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "We are creators.",
        "We push boundaries.",
        "We craft unforgettable experiences.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      showCursor: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen text-white bg-opacity-90 bg-black">
      {/* Hero Section */}
      <header className="relative flex flex-col lg:flex-row items-center justify-between h-screen px-4 md:px-8 pt-16 md:pt-0 text-center lg:text-left">
        <div className="max-w-3xl w-full lg:w-3/5">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Immersive Experiences.<br />Endless Possibilities.
          </h1>
          <p className="text-lg md:text-xl mb-6">YStudios, This is why.</p>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto">
              Explore Now
            </button>
            <button
              className="border border-gray-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 w-full sm:w-auto"
              onClick={() => {
                navigate("/about");
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-3/5 h-64 md:h-[60vh] rounded-3xl overflow-hidden shadow-lg mt-8 lg:mt-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            Your browser does not support the video tag.
            <source src="https://i.imgur.com/vF3PSMJ.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 p-4 rounded-md">
            <h3 className="text-xl font-bold">Rave Race</h3>
            <p className="text-sm">YStudios 2024</p>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl text-center mb-6">
          <span ref={typedTextRef} className="text-blue-400 font-semibold"></span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 px-6 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-lg mb-2">
              <span className="font-bold text-blue-500">Jude</span> - Fullstack Blockchain Developer.
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-blue-500">Ryan</span> - Game Developer.
            </p>
            <p className="text-lg">
              <span className="font-bold text-blue-500">Costo</span> - Graphic Designer, 3D Modeler, and Animator.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 flex justify-center w-80 h-[300]"
          >
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              effect="fade"
              navigation
              autoplay={{ delay: 3000 }}
              loop
              className="w-full max-w-sm rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <img src={teamImage1} alt="Team 1" className="w-full rounded-lg" />
               
              </SwiperSlide>
              <SwiperSlide>
                <img src={teamImage2} alt="Team 2" className="w-full rounded-lg" />
              
              </SwiperSlide>
              <SwiperSlide>
                <img src={teamImage3} alt="Team 3" className="w-full rounded-lg" />
                
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
