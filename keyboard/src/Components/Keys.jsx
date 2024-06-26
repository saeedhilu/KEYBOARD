import React, { useState } from "react";
import "../Style/Keys.css";

export const Keys = () => {
  const [key, setKey] = useState("");
  const [capital, setCapital] = useState(false);

  const handleClck = (row, index) => {
    const clickedKey = row[index];
    if (clickedKey === "Backspace") {
      setKey((pre) => pre.slice(0, -1));
    } else if (clickedKey === "CapsLock") {
      setCapital((pre) => !pre);
    } else {
      const newKey = capital
        ? clickedKey.toUpperCase()
        : clickedKey.toLowerCase();
      setKey((pre) => pre + newKey);
    }
  };

  const keys = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["CNTR", "WIDN", "Alt", "SPACE", "Alt", "FN", "CM", "CNTRL"],
  ];

  return (
    <div className="container">
      <div className="main">
        <div className="input">
          <input type="text" value={key} />
        </div>
        <div className="keysListing">
          <ul className="ul">
            {keys.map((row, rowIndex) => (
              <li key={rowIndex} className="keysmain">
                {row.map((key, keyIndex) => (
                  <button
                    onClick={() => handleClck(row, keyIndex)}
                    className="keys"
                    key={keyIndex}
                  >
                    {key}
                  </button>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
