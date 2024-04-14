import { useEffect } from 'react';
import AOS from "aos";

import { HTML, CSS, Github, Vite, TailwindCSS, react, Javascript, Bootstrap } from '../Constant/Images';
import Image from "./Img_prop"

import React from 'react'

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">

        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl" >
          SKILLS
        </h1>

        <div className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10" 
        data-aos="zoom-out-up"
        >
          <Image img={HTML}></Image>
          <Image img={CSS}></Image>
          <Image img={Javascript}></Image>
          <Image img={Bootstrap}></Image>
          <Image img={Github}></Image>
          <Image img={react}></Image>
          <Image img={Vite}></Image>
          <Image img={TailwindCSS}></Image>
          {/* <Image img={HTML}></Image>
          <Image img={HTML}></Image>
          <Image img={HTML}></Image> */}

        </div>
      </section>
    </>
  
  )
}

export default Skills;