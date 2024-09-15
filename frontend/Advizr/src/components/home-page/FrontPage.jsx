import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.module.css";
import students from "../../assets/students.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    navigate("/advisor", { state: { school: event.target.value } });
  };

  return (
    <>
      <div className="homepage-format">
        <section>
          <img src={students} alt="students" className="students" />
        </section>
        <section>
          <h1 className="slogan">
            <span className="emphasis">Accurate</span>,<br />
            <span className="emphasis">reliable</span>&nbsp;course info at your
            fingertips
          </h1>
          <div class="custom-select">
            <select onChange={handleChange}>
              <option value="0">Select your university:</option>
              <option value="University of British Columbia">
                University of British Columbia
              </option>
              <option value="University of Waterloo">
                University of Waterloo
              </option>
              <option value="University of Toronto">
                University of Toronto
              </option>
              <option value="McGill University">McGill University</option>
              <option value="University of Alberta">
                University of Alberta
              </option>
            </select>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
