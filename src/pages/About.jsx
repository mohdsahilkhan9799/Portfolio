import React, { useEffect, useRef } from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
import Skills from "./Skills";

function About() {
  const listItems = [
    "I am a Full Stack Developer and Designer based in Delhi, India .",
    "Fascinated by knowledge brain and constantly learning.",
    "Fluent in spoken, written, and reading English.",
    "Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Building ethereal and responsive front-end interfaces that our users find pleasing.",
    "Writing cross-browser code that appears consistently in different browsers.",
    "Working with the design team to convert their elegant designs into working HTML & CSS pages to enrich the user experience.",
    "Ability to write high-performance, reusable code for UI components.",
    "Converting websites into responsive for all resolutions (iPhone, iPad, Tablets, etc.).",
    "Passionate about working in a startup and creating a great product. Managing project deadlines and requests."
  ];

  const listRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const listItems = listRef.current.querySelectorAll("li");
      let index = 0;

      const intervalId = setInterval(() => {
        if (index < listItems.length) {
          listItems[index].style.opacity = 1;
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            listItems.forEach(item => {
              item.style.opacity = 0;
            });
            animateText();
          }, 500); // 2 seconds delay before restarting animation
        }
      }, 500); // 2 seconds interval between each list item
    };

    animateText();
  }, []);

  return (
    <div className="">
      <div className="about_me" id="about_myself">
        <div className="container_01">
          <div className="my_img">
            <img id="img" src={about_me_img} alt="profile_image" className="animated-image" />
          </div>
          <div className="my_info">
            <h2>
              About <span>Me</span>
            </h2>
            <ul ref={listRef} >
              {listItems.map((item, index) => (
                <li key={index} style={{ opacity: 0 }} >
                  {item}
                </li>
              ))}
            </ul>
            <div className="personal_info">
              {personal_info_data.map((data, index) => (
                <div key={index}>
                  {data.section_one.map((e, index) => (
                    <h4 key={index}>
                      <span>{e.data_type} :</span> {e.data_value}
                    </h4>
                  ))}
                  {data.section_two.map((e, index) => (
                    <h4 key={index}>
                      <span>{e.data_type} :</span> {e.data_value}
                    </h4>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
