import React from "react";
import "./Education.css";
import dyp_college_img from "../../Image/bannerimage_1515757127.jpg";
import college_logo from "../../Image/Manav_Rachna_International_University_(logo).png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      college_name: "Manav Rachna University",
      college_degree_name: "BTECH (COMPUTER SCIENCE AND ENGINEERING)",
      education_spam: "2019-2023",
      education_info: [
        {
          index: 1,
          educ_info: "⚡ I have 1 year of experience in MERN stack development.",
        },
        {
          index: 2,
          educ_info:
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Ml , OS etc.",
        },
        {
          index: 3,
          educ_info:
            "⚡ Apart from this, I have done courses on Back-end Development, and Full Stack Development (MERN).",
        },
        {
          index: 4,
          educ_info:
            "⚡  I have implemented several projects based on what I've learnt by my Self.",
        },],
      btn_name: "Visit Website",
      btn_link: "https://apply.manavrachna.edu.in/mriirs-admissions/?utm_source=getmyuni&utm_medium=CM03&utm_campaign=MRU2024&gad_source=1",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img src={dyp_college_img} alt="educ_image" />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
