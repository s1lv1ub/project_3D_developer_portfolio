import { motion } from "framer-motion";
import { silviu } from "../assets";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
const HeroCard = () => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-1   min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={silviu} alt="silviu bacila" className="w-76 h-76 " />
      </div>
    </motion.div>
  </Tilt>
);

const HeroMision = () => (
  <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Ce îmi propun</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Obiectivul meu este să construiesc parteneriate durabile cu persoane și
      organizații care împărtășesc viziunea mea de a face tehnologia avansată
      accesibilă firmelor mici și mijlocii. Îmi doresc să lucrăm împreună pentru
      dezvoltarea de soluții IT care sunt nu doar profesionale și scalabile, dar
      și accesibile, schimbând astfel modul în care aceste afaceri beneficiază
      de tehnologie. Sunt dedicat să cultivăm un mediu de colaborare unde ideile
      noastre comune se transformă în soluții reale care simplifică și
      îmbunătățesc procesele de business, oferind tuturor acces la instrumente
      tehnologice de top.
    </motion.p>
  </>
);

const Hero = () => {
  return (
    <section className="relative w-full w-full top-[40px]">
      <HeroCard />
      <p className=" mt-12"></p>
      <HeroMision />
    </section>
  );
};
export default SectionWrapper(Hero, "hero");
