import { b } from "maath/dist/index-43782085.esm";
import { contain } from "three/src/extras/TextureUtils.js";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  //Sticky Container
  stickyContainer:
    "absolute md:sticky top-28 right-0 h-fit flex flex-col items-center gap-6 z-20",
  //Profile Picture Styles
  profilePicContainer:
    "w-[350px] h-[350px] rounded-full relative flex-shrink-0 pulse-glow",


  profilePicImage:
    "w-full h-full object-cover rounded-full",
  //Button Styles
  buttonGroup:
    "flex flex-col md:flex-row gap-4 transition-all duration-500 ease-in-out",

  primaryButton:
    "bg-[#915EFF] hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1",
  
  secondaryButton:
    "bg-transparent border-2 border-secondary hover:bg-secondary text-secondary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1",
};


export { styles };
