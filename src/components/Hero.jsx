import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>John</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an FA approved <br className='sm:block hidden' />
            kids football coach 
          </p>
        </div>
      </div>
      {/* <div className="h-screen md:pl-4 lg:pl-[550px] lg:pb-[250px]">
         <ComputersCanvas /> 
      </div> */}
      <div className="absolute top-0 pt-48 flex flex-col items-center justify-center w-full h-full p-4 ">
          <img src="coach.jpg" layout={'fill'} className="rounded-lg sm:w-[400px] md:w-[600px] mb-24 md:mb-0 xs:w-[350px]  aspect-video" />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
