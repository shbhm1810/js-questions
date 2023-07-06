import React from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [secs, setSecs] = React.useState(0);

  let timer = React.useRef(null);

  const play = () => {
    timer.current = setInterval(() => {
      setSecs((secs) => setSecs(secs + 1));
    }, 1000);
  };
  const pause = () => {
    clearInterval(timer.current);
  };

  const reset = () => {
    clearInterval(timer.current);
    setSecs(0);
  };

  return (
    <>
      <label>{secs}</label>

      <div>
        <button
          onClick={() => {
            play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            pause();
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
