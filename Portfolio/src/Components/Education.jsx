import Aos from "aos";
import { useEffect } from "react";

import { ADGITM } from "../Constant/Images";

import Lottie from "lottie-react";
import education from "../assets/lottie/education.json"
import "aos/dist/aos.css"


const Education = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <section id="education"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5">

      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        <div className="EDUCATION flex gap-7 justify-between flex-row-reverse max:sm:flex-col"
        data-aos="fade-right"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
              src={ADGITM}
              alt="IIIT KOTA"
              className="w-[90px] h-[90px] rounded-[50%]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider mt-7">
              ADGITM, Delhi
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              {/* Self style font-medium h3 tag, p,  */}
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg font-medium">
                Bachelor of Technology
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-base">
                December 2021 - August 2023
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-base">
                Full stack web Developer + Mechanical Engg.
              </p>
            </div>
          </div>
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"/>
        </div>
      </div>
    </section>
  )
}


export default Education;