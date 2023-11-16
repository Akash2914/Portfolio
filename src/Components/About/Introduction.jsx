import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
//import profilePic from "../../assets/Photo_fw14_056.jpg";
import profilePic from "../../assets/ak.png";
// import profilePic from "../../assets/akash.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">AKASH </span> and I am from{" "}
                <span className="different"> Vellore, Tamilnadu (India)</span>.
                I have completed my post graduation in MCA (Master of computer
                application) from{" "}
                <span className="different">
                  Vellore institute of technology (VIT)
                </span>
                . Then I joined full stack development course in{" "}
                <span className="different">CODING NINJAS</span> as a MERN Stack
                Developer.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gaming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Badminton{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
