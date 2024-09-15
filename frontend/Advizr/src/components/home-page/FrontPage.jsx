import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.module.css";

const FrontPage = () => {
  const navigate = useNavigate();

  // const universities = [
  //   "University of Waterloo",
  //   "Univerisity of British Columbia (UBC)",
  //   "University of Toronto",
  //   "University of Alberta",
  // ];

  const [school, SetSchool] = useState("ubc");

  const handleSubmit = () => {
    navigate("/advisor", { state: { school: school } });
  };

  return (
    <>
      <div className="frontpage-format">
        <section>
          <h1>Hello</h1>
        </section>
        <section>
          <h1>Accurate, reliable course info at your fingertips</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="schoolInput"></label>
              <input
                type="text"
                placeholder="School name"
                onChange={(event) => SetSchool(event.target.value)}
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default FrontPage;
