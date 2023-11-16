import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  // SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer"></div>
              <div className="project_information">
                <h2>E-Commerce</h2>
                <p>
                  Built a complete E-commerce Application using MERN stack which
                  has user login/signup system by FIREBASE and saving all
                  information of all Products and Users in MONGODB.
                </p>
                <div>
                  <SiNodedotjs />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiExpress />
                  <SiMongodb />
                  <SiMaterialui />
                  <DiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    href="https://ecommerce-eyao.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Akash2914/E-commerce-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer"></div>
              <div className="project_information">
                <h2>Movie Booking App</h2>
                <p>
                  Developed a movies booking web application using REACTJS along
                  with MATERIAL UI in client side and Expressjs, REST APIs in
                  server side which has features to add trending movies set by
                  the admin through admin panels.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://moviebooking-0foo.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Akash2914/Movie-Booking-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
