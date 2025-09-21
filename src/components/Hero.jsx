import { motion, useAnimation } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profilePhoto from "../assets/profile-photo.jpg";
import React, {useEffect, useState} from 'react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set a threshold, e.g., when the user scrolls 100px down
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

   const buttonGroupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>AJMAL A</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, user <br/>
            interfaces and web applications
          </p>
        </div>
        
      </div>
      {/* Profile Picture */}
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-end`}>
        <div className={styles.profilePicContainer}>
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className={styles.profilePicImage} 
          />
        </div>
      </div>
      <br /><br /><br />
      <ComputersCanvas />

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
