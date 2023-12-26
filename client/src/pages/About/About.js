import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="./images/Kshitij.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                With over 3.2+ years of experience, I am a proficient Data Analyst and
                skilled Web Developer with an extensive range of expertise
                encompassing various front-end and back-end languages,
                responsive frameworks, databases, and optimal coding
                methodologies. My proficiency extends to data analysis, including the
                ability to craft insightful PowerBI dashboards. I take pride in
                successfully executing numerous web projects from inception to
                completion. Presently, I am actively engaged in HubSpot Web
                Development and the strategic analysis of diverse solution practices.
                My role entails conceptualizing, creating, testing, and upkeeping
                responsive websites, while also delving into solution-based data
                analysis to unearth qualified leads. Aspirations drive me towards the
                pursuit of becoming a Data Engineer fortified with robust web
                development skills.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
