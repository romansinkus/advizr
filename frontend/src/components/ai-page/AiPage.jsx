import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";
import axios from "axios";

/* eslint-disable react/prop-types */

// send question and past results

let historyGlobal = [];
const AiPage = () => {
  // const [message, setMessage] = useState("");
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

  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState('');
  // const [historyGlobal, setHistoryGlobal] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      // console.log("Message", message);
      const res = await axios.post('http://127.0.0.1:5000/advisor', {
        message: message,
        history: historyGlobal
      }).then((res) => setResponse(res.data.ragMessage)).then((res) => console.log("Response", res));
      console.log("RESPONSE", response);
      console.log("Try this instead");
      const newUserHistory = { "role": "USER", "text": message };
      const newChatHistory = { "role": "CHATBOT", "text": response };
      // setHistoryGlobal((curr) => [...curr, newUserHistory]);
      // setHistoryGlobal((curr) => [...curr, newChatHistory]);
      historyGlobal.push(newUserHistory);
      historyGlobal.push(newChatHistory);
      console.log("historyGlobal", historyGlobal);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="section-1">
        <h1>{school}</h1>
        <div className="question-prompt">
          <h1>Ask Advizr</h1>
          <span ref={el}></span>
        </div>

        <div>
          <form onSubmit={sendMessage}>

            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=""
            className="ai-input"
            />

          </form>
          {/* {response && <p>Response: {response}</p>} */}
        </div>
      </section>
    </>
  );
};

export default AiPage;
