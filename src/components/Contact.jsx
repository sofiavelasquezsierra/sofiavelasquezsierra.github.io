import { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { github } from '../assets';
import { linkedin, email} from '../assets';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  
  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75px] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='w-full flex'>
          <motion.p 
            variants={slideIn('', '', 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              <div
                onClick={() => window.open('https://www.linkedin.com/in/sofia-velasquez/')}
                className='blue rounded-full w-20 h-20 flex justify-center items-center cursor-pointer'>
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className='object-contain'/>

              </div>
              <div
                onClick={() => window.open('sofia.velasquezsierra@mail.mcgill.ca')}
                className='blue rounded-full w-20 h-20 flex justify-center items-center cursor-pointer'>
                  <img
                    src={email}
                    alt="email"
                    className='object-contain'/>

              </div>
              <div
                onClick={() => window.open('https://github.com/sofiavelasquezsierra')}
                className='blue rounded-full w-20 h-20 flex justify-center items-center cursor-pointer'>
                  <img
                    src={github}
                    alt="github"
                    className='object-contain'/>

              </div>
            </motion.p>
      </div>

      </motion.div>


      
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")