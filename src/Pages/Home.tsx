import { JSX, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Contact from '../components/Modals/Contact'
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import media
import teamImage1 from "/Jude.jpg";
import teamImage2 from "/Ryan.jpg";
import teamImage3 from "/Costo.jpg";
import teamImage4 from "/Koiya.jpg";

const Home = (): JSX.Element => {
  let navigate = useNavigate();
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "The",
        "The only",
        "The only way",
        "The only way is",
        "The only way is up."

      ],
      typeSpeed: 25,
      backSpeed: 12,
      backDelay: 1000,
      loop: true,
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
          <p className="text-lg md:text-xl mb-6">YStudios,<br/> This is why we build.</p>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto" onClick={()=>{navigate('/our-work')}}>
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
          <span ref={typedTextRef} className="text-gold font-semibold font-serif-[Times New Roman]"></span>
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
              <span className="font-bold text-blue-500">Ryan</span> - Game Developer, Pure Mathematician.
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-blue-500">Costo</span> - 3D Modeler, and Animator.
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-blue-500">Koiya</span> - Graphic Designer, Audio & Visuals.
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
              <SwiperSlide>
                <img src={teamImage4} alt="Team 4" className="w-full rounded-lg" />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
        <div className=" mt-16 ">
        <Contact/>
        </div>
      </section>
    </div>
  );
};

export default Home;
