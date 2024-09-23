import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";
import axios from "axios";

/* eslint-disable react/prop-types */

const AiPage = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState(""); // Response from API
  const [history, setHistory] = useState([]);
  const location = useLocation();
  const { school } = location.state || {};
  let historyGlobal = [];

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
      typed.destroy();
    };
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/advisor", {
        message: message,
        history: historyGlobal,
      });
      const responseData = res.data.ragMessage;
      setResponse(responseData);
      console.log("Response", responseData);
      
      // Add to history
      const newUserHistory = { role: "USER", text: message };
      const newChatHistory = { role: "CHATBOT", text: responseData };
      historyGlobal.push(newUserHistory);
      historyGlobal.push(newChatHistory);
      console.log("historyGlobal", historyGlobal);
      setMessage("")
      setSubmitted(true)
    } catch (err) {
      console.error(err);
    }
  };

  const onMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }

  const TypingAnimation = ({ response, speed = 30}) => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState(""); // Progressive text state

    useEffect(() => {
      if (index < response.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + response[index]); // Add next character
          setIndex((prevIndex) => prevIndex + 1);
        }, speed); // Speed of typing in milliseconds

        return () => clearTimeout(timeout); // Cleanup timeout
      }
    }, [index, response, speed]); // Trigger effect when index or response changes

    return <h2>{displayedText}</h2>; // Render the progressively typed text
  };

  return (
    <>
      <section className="section-1">
        <h1 className="school-name">{school}</h1>
        <div className="question-prompt">
          <h1>Ask</h1>
          <h1 className="green-underline">Advizr</h1>
          <h1>for</h1>
          {submitted ? <h1 className="typing">helping you</h1>: <h1 ref={el} className="typing"></h1>}
        </div>

        <div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => onMessageChange(e)}
              placeholder="Type here..."
              className="ai-input"
            />
          </form>
        </div>
      </section>

      <div className="response">
        {/* Pass the response to the TypingAnimation component */}
        <TypingAnimation response={response} />
      </div>
    </>
  );
};

export default AiPage;
