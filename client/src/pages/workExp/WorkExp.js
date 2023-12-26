import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec 2022 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analyst and Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                KAPITAL Data Corp
              </h4>
              <p>

                I spearheaded the development of an Internal Hiring Website using the MERN stack, ensuring a seamless experience through role-specific dashboards and comprehensive documentation. Prioritizing security and SEO best practices, I contributed to a robust and user-friendly platform. Meanwhile, my toolkit expanded to encompass proficiency in PHP, CodeIgniter, and MVC, demonstrating quick issue resolution for optimal functionality on the madgigs website. I initiated and managed Email Marketing Campaigns, significantly contributing to lead generation efforts. My skill set broadened to include expertise in ETL processes, Excel (VLOOKUP, Pivot Tables), PowerBI, DAX, and R, enabling me to identify qualified leads and optimize pipeline efficiency. With a focus on precision, I crafted PowerBI dashboards facilitating data-driven decision-making, exemplifying leadership in efficient lead identification and management.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov 2021 - Dec 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                KAPITAL Data Corp
              </h4>
              <p>
                I meticulously devised a comprehensive plan for the Kapital Data website, overseeing every aspect of its development. Bringing the vision to fruition, I constructed the website from the ground up on HubSpot, incorporating engaging landing pages and polished website sections to enhance Kapital Data's online presence. Utilizing HubDB, I ensured dynamic and data-driven pages, fostering a seamless user experience. To elevate functionality and aesthetics, custom modules were crafted for the Kapital Data website. The implementation of SEO-optimized code not only enhanced visual appeal but also optimized search engine visibility. A commitment to cross-device excellence was upheld, with responsive design for both web and mobile platforms. Additionally, I created compelling email templates for impactful marketing campaigns. The journey continues with an exciting new project—a meticulously planned Internal Hiring Website. Currently in the blueprint stage, I've visualized the user journey through wireframes and opted for the robust MERN stack to guarantee a powerful and scalable solution.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Aug 2020 - Oct 2021"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analyst and Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                VSoftweb Services
              </h4>
              <p>
                My expertise spans a diverse range of technical domains, with a focus on data analysis, web development, and data visualization. In the realm of data analysis, I conduct in-depth examinations to extract valuable insights and identify emerging trends. I contribute to the seamless functioning of databases, prioritizing accuracy and integrity. In web development, I design, code, and modify websites, collaborating with cross-functional teams to enhance user experience and functionality. Proficient in languages such as Python, JavaScript, HTML, and CSS, I implement scripts for data extraction and transformation. The creation of compelling visualizations, utilizing tools like Tableau, is integral to my skill set. I specialize in performance tuning and optimization measures for web applications, identifying and resolving issues affecting performance and usability. Thorough testing and debugging processes ensure the delivery of bug-free web applications. Engaging in continuous learning, I stay abreast of the latest trends in data analytics and web development, adapting to emerging technologies. Effective communication and collaboration with both technical and non-technical stakeholders characterize my approach, aligning data strategies with organizational goals. Managing end-to-end project lifecycles, I ensure the timely delivery of high-quality solutions while maintaining comprehensive documentation for codes, processes, and data analysis methodologies.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
