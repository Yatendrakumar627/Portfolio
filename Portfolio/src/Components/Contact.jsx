

import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import Yatendra from "../assets/Yatendra-kumar.jpg"





const Contact = () => {

  return (

    <section 
      id="contact"
      className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
    >

      <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">

        <div className="ABOUT p-7">

          <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
            Yatendra Kumar
          </h2>

          <p className="text-gray-600 dark:text-slate-400 leading-[31px] mt-7 max-w-[400px] max-sm:text-center">
            Full-Stack-Developer | ADGITM'23 | Delhi
          </p>

          <div className="SOCIAL text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly ">
            <a
              href="https://github.com/Yatendrakumar627"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/er-yatendra-kumar-842462229/"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiLinkedin />
            </a>
            <a
              href="yatendrakumar627@gmail.com"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.instagram.com/y.a.t.e.n.d.r.a/"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiInstagram />
            </a>
            <a>
              <SiTwitter />
            </a>
          </div>

          <div className="flex gap-5 max-sm:justify-center">
            <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
              <a href="">Resume</a>
            </button>

            <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded" >
              <a
                href="link for portfolio"
                className="flex gap-2 items-center justify-content"
              >
                <SiGithub />
                Star
              </a>
            </button>
          </div>
        </div>

        <div className="IMG p-0 max-sm:grip max-sm:place-content-center">
          <img
            src={Yatendra}
            alt="Yatendra Kumar"
            className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 rounded-[50%] mt-12"
          />
        </div>
      </div>

      <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
      made with 💙 by Yatendra kumar & the Open Source Community
      </p>
    </section>
  )
}

export default Contact;