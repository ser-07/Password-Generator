import { useState } from "react";
import { generatePassword } from "../util/generatePass";

const PasswordMgr = () => {
  const [upperChecked, setUpperChecked] = useState(true);
  const [lowerChecked, setLowerChecked] = useState(true);
  const [numsChecked, setNumsChecked] = useState(true);
  const [symbolsChecked, setSymbolsChecked] = useState(true);
  const [len, setLen] = useState(8);
  const [pass, setPass] = useState("");

  // const checkedArr = {
  //   upper: upperChecked,
  //   lower: lowerChecked,
  //   nums: numsChecked,
  //   symbols: symbolsChecked,
  // }];

  const checkedArr = [upperChecked, lowerChecked, numsChecked, symbolsChecked];

  const getPass = (len, checkedArr) => {
    setPass(generatePassword(len, checkedArr));
  };

  return (
    <div className="d-main">
      <h1>Password Generator</h1>
      <div className="pmgr-top">
        <h2>{pass}</h2>
        <button
          onClick={() => {
            navigator.clipboard.writeText(pass);
          }}
        >
          Copy
        </button>
      </div>
      <div className="pmgr-bdy">
        <div className="pmgr-bdy-top">
          <div className="pmgr-bdy-top-1">
            <p>Character Length</p>
            <p>{len}</p>
          </div>
          <div className="slider-div">
            <input
              type="range"
              min="8"
              max="25"
              // class="slider"
              id="myRange"
              value={len}
              onChange={(e) => setLen(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="pmgr-bdy-mid-1">
          <div className="btn-check-grp">
            <input
              type="checkbox"
              id="upper"
              name="upper"
              checked={upperChecked}
              onChange={() => setUpperChecked(!upperChecked)}
            />
            <label htmlFor="upper">Include Uppercase letters</label>
          </div>
          <div className="btn-check-grp">
            <input
              type="checkbox"
              id="lower"
              name="lower"
              checked={lowerChecked}
              onChange={() => setLowerChecked(!lowerChecked)}
            />
            <label htmlFor="lower">Include Lowercase letters</label>
          </div>
          <div className="btn-check-grp">
            <input
              type="checkbox"
              id="num"
              name="num"
              checked={numsChecked}
              onChange={() => setNumsChecked(!numsChecked)}
            />
            <label htmlFor="num">Include Numbers</label>
          </div>
          <div className="btn-check-grp">
            <input
              type="checkbox"
              id="symbol"
              name="symbol"
              checked={symbolsChecked}
              onChange={() => setSymbolsChecked(!symbolsChecked)}
            />
            <label htmlFor="symbol">Include symbols</label>
          </div>
        </div>
        <div className="pmgr-bdy-mid-2">
          <p>STRENGTH</p>
          <p>Medium</p>
        </div>
        <div className="generate-btn-dv">
          <button onClick={() => getPass(len, checkedArr)}>GENERATE!</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordMgr;
