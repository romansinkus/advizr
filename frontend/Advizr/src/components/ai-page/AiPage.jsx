import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";

/* eslint-disable react/prop-types */

// send question and past results

const AiPage = () => {
  const [message, setMessage] = useState("");
  const [submitted, SetSubmitted] = useState(false);
  const [jsonResult, setJsonResult] = useState(null);
  const [stringResult, setStringResult] = useState("");

  //   const [response, setResponse] = useState("");
  //   const [pastResults, setPastResults] = useState("");

  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "course prerequisites",
        "professor ratings",
        "average course grades",
        "a course description",
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      backDelay: 1000, // delay before starting to backspace
      startDelay: 0, // delay before starting typing
      loop: true, // whether or not to loop the animation
    };

    const typed = new Typed(el.current, options);

    return () => {
      // Destroy instance on unmount
      typed.destroy();
    };
  }, []);

  const location = useLocation();

  const { school } = location.state || {};

  //add a toggle inside of sendmessage

  //   const sendMessage = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/message", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ message }),
  //       });
  //       const data = await res.json();
  //       setResponse(data.response); // Display the response from the backend
  //     } catch (error) {
  //       console.error("Error sending message:", error);
  //     }
  //   };

  const jsonify = (result) => {
    if (!(result instanceof Object)) {
      // Checking if result is not an object (i.e., it's not JSON)
      setStringResult(result);
    } else {
      try {
        setJsonResult(result); // If it's already a valid object/JSON
      } catch (error) {
        console.error("Invalid JSON:", error);
      }
    }
  };

  return (
    <>
      <section className="section-1">
        {/* <p>School</p> */}
        <h1>{school}</h1>
        <div className="question-prompt">
          <h1>Ask</h1>
          <h1 className="green-underline">Advizr</h1>
          <h1>for</h1>
          <h1 ref={el} className="typing"></h1>
        </div>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type here..."
            className="ai-input"
          />
          {/* {response && <p>Response: {response}</p>} */}
        </div>
      </section>

      {submitted ? (
        <section>
          <div>{stringResult}</div>
          <div>{jsonResult.course}</div>
          <div>{jsonResult.grade}</div>
          <div>{jsonResult.professor}</div>
          <div>{jsonResult.description}</div>
          <div>{jsonResult.grade}</div>
        </section>
      ) : null}
    </>
  );
};

/*
- pre req
- co req
- dependent courses (after that course)
- grades*
- professors (rating of professor)*
- description
- Course code
- Course name
- Credits
- 



*/

export default AiPage;
