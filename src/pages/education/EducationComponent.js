import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";
import "./EducationComponent.css";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="education-heading-div">
            <div className="education-heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="education-heading-text-div">
              <h1 className="education-heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="education-heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification
              </h3>
              <p
                className="education-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in tech-related activities.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Educations theme={theme} />

      <Footer theme={theme} />
    </div>
  );
}

export default Education;
