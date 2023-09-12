import { useState } from "react";
import { generatePassword } from "../util/generatePass";
import { FaCopy } from "react-icons/fa6";

const PasswordMgr = () => {
  const [upperChecked, setUpperChecked] = useState(true);
  const [lowerChecked, setLowerChecked] = useState(true);
  const [numsChecked, setNumsChecked] = useState(true);
  const [symbolsChecked, setSymbolsChecked] = useState(true);
  const [len, setLen] = useState(8);
  const [pass, setPass] = useState("");

  const checkedArr = [upperChecked, lowerChecked, numsChecked, symbolsChecked];

  const getPass = (len, checkedArr) => {
    setPass(generatePassword(len, checkedArr));
  };

  return (
    <div className="d-main">
      <h1>Password Generator</h1>
      <div className="pmgr-top">
        <div className="pmgr-top-div">
          <h2>{pass}</h2>
        </div>

        <button
          className="copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(pass);
          }}
        >
          <FaCopy className="copy-icon" />
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
          <button className="gen-btn" onClick={() => getPass(len, checkedArr)}>
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordMgr;
