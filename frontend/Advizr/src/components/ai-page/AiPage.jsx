import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";

/* eslint-disable react/prop-types */

// send question and past results

const AiPage = () => {
  const [message, setMessage] = useState("");
  //   const [response, setResponse] = useState("");
  //   const [pastResults, setPastResults] = useState("");

  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hello World!",
        "Welcome to Typed.js",
        "Enjoy typing animations!",
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      backDelay: 1000, // delay before starting to backspace
      startDelay: 500, // delay before starting typing
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

  return (
    <>
      <section className="section-1">
        <h1>{school}</h1>
        <div className="question-prompt">
          <h1>Ask Advizr</h1>
          <span ref={el}></span>
        </div>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=""
            className="ai-input"
          />

          {/* {response && <p>Response: {response}</p>} */}
        </div>
      </section>
    </>
  );
};

export default AiPage;
