import React, { useEffect, useMemo, useState } from "react";
import { Knob } from "primereact/knob";
import { InputText } from "primereact/inputtext";

function App() {
  const [word, setWord] = useState("");
  const [count, setCount] = useState(word);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setCount(word.split(" "));
  }, [count]);

  useMemo(() => {
    let setTime = 300;
    setInterval(() => {
      setTime -= 1;
      if (setTime === 0) {
        clearInterval();
      }
      setTimer(setTime);
    }, 1000);
  }, []);

  return (
    <div className="App" align="center">
      <div className="cointainer">
        <label htmlFor="" className="heading">
          Test your typing skills
        </label>
        <Knob
          valueColor={"Gray"}
          rangeColor={"Green"}
          textColor={"White"}
          strokeWidth="5"
          value={word ? timer : 299}
          size={500}
          min={0}
          max={299}
          readOnly
        />
        <h3 className="word-count">
          Words Count: <span style={{ color: "cyan" }}>{count.length}</span>
        </h3>
        <InputText
          className="input-box"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
