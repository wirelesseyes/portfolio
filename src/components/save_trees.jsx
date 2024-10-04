import React from "react";
import { motion } from "framer-motion";
import {save_trees} from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";



const SaveTree = () => {
  return (
    
    <div className={`mt-2 bg-black-100 rounded-[20px]`} style={{background:"url('../src/assets/neonbg.png')"}}>
        <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
      <div
        className={` rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <span id="save_earth">&nbsp;</span>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} style={{color:"red"}}>Caution</p>
          <h2 className={styles.sectionHeadText}>Save Trees, Save Earth</h2>
        </motion.div>
      </div>
      
      <div className={`xl:mt-12 flex xl:flex-row justify-center  flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
      >
      <img src={save_trees} alt="Save Trees" className="w-full h-auto max-w-lg rounded-2xl mx-auto" />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p>
    🌍 <strong>"The Earth does not belong to us, we belong to the Earth."</strong> — Chief Seattle
        </p>
        <p>
          🌱 "The greatest threat to our planet is the belief that someone else will save it."
          — Robert Swan
        </p>
        <p>Here’s how we can all contribute to saving our planet:</p>
        <ul>
          <li>♻️ Recycle, reuse, and reduce waste.</li>
          <li>🌲 Plant trees and protect forests to sustain life on Earth.</li>
          <li>🚶‍♂️ Walk or cycle more to reduce your carbon footprint.</li>
          <li>💧 Save water – every drop counts!</li>
          <li>🌞 Opt for clean, renewable energy sources like solar and wind.</li>
          <li>🛍️ Avoid plastic – choose sustainable alternatives.</li>
          <li>👥 Spread awareness and educate others about the importance of preserving our planet.</li>
        </ul>
        <p>💚 Together, we can protect and save the Earth for future generations!</p>
      </motion.div>
      </div>
    </div>
    </div>
  );
};

export default SaveTree;
