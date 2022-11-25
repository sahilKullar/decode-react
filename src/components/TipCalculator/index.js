import React, { useState } from "react";
import "../../assets/styles.css";

const TipCalculator = () => {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);
  const totalTip = (bill * tip) / 100;
  const perPersonTip = totalTip / people;

  return (
    <div className="tip-container">
      <label htmlFor="bill">
        Bill
        <input
          id="bill"
          type="number"
          min="0"
          value={bill}
          onChange={(event) => setBill(parseInt(event.target.value, 10))}
        />
      </label>

      <label htmlFor="tipPercentage">
        Tip Percentage
        <input
          id="tipPercentage"
          type="number"
          min="0"
          value={tip}
          onChange={(event) => setTip(parseInt(event.target.value, 10))}
        />
      </label>

      <label htmlFor="people">
        Number of People
        <input
          id="people"
          type="number"
          min="1"
          value={people}
          onChange={(event) => setPeople(parseInt(event.target.value, 10))}
        />
      </label>
      <p>
        Total Tip: {Number.isNaN(totalTip) ? "-" : `$${totalTip.toFixed(2)}`}
      </p>
      <p>
        Tip Per Person:
        {Number.isNaN(perPersonTip) ? "-" : `$${perPersonTip.toFixed(2)}`}
      </p>
    </div>
  );
};

export default TipCalculator;
