

import Project_prop from "./Project_prop";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import {
  // GPT4,
  Portfolio,
  // Rocket,
  // WellBeing,
  // Game,
  Blog,
  Ecommerce,
  HabitTracker,
  ChatApp
} from "../Constant/Images";

import {
SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  // SiPostman
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";





const Projects = () => {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5">

      <div className="WRAPPER mt-10"
        data-aos = "fade-down"
        >

        <h1 className="text=[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Projects 
        </h1>

        <div 
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >

          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          >
          </Project_prop>

          <Project_prop
            title="Chat-app"
            para="Chat-App website create with react and nodeJS"
            img={ChatApp}
            link=""
            github_link="https://github.com/Yatendrakumar627/Chat-App"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact
                  className="dark:text-slate-200 text-black"/>
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Nodejs" arrow>
                <IconButton>
                  <SiNodedotjs
                  className="dark:text-slate-200 text-black"/>
                </IconButton>
              </Tooltip>
            }
          >
            
          </Project_prop>

          <Project_prop
            title="Blog"
            para="Blog website create with vite and nodeJS"
            img={Blog}
            link=""
            github_link="https://github.com/Yatendrakumar627/Blog"
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite
                  className="dark:text-slate-200 text-black"/>
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Nodejs" arrow>
                <IconButton>
                  <SiNodedotjs
                  className="dark:text-slate-200 text-black"/>
                </IconButton>
              </Tooltip>
            }
          >
          </Project_prop>

          <Project_prop
            title="Habit-Tracker"
            para="Habit-tracker website create with JavaScript, HTML and CSS"
            img={HabitTracker}
            link="https://habit-tracker-yatendra-kumar.netlify.app/"
            github_link="https://github.com/Yatendrakumar627/Habit-Tracker"
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript
                  className="dark:text-slate-200 text-black"/>
                </IconButton>
              </Tooltip>
            }
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          >
          </Project_prop>

          <Project_prop
            title="E-commerce-API"
            para="E-commerce-API website create with javaScript"
            img={Ecommerce}
            link=""
            github_link="https://github.com/Yatendrakumar627/E-commerce-API"
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongo={
              <Tooltip title="mongo" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          >
            
          </Project_prop>


        </div>
      </div>
    </section>
  )
}

export default Projects;
