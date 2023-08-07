import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculate = () => {
  const State = {
    total: 0,
    next: null,
    operation: null,
  };

  const [output, setOutput] = useState(State);

  const handleBtn = (btn) => {
    setOutput((object) => calculate(object, btn));
  };

  const { total, operation, next } = output;
  return (
    <div className="main">
      <div className="screen-row">
        <span role="none">{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="operators">
        <div className="row-0">
          <button id="AC" type="button" onClick={(e) => handleBtn(e.target.id)}>AC</button>
          <button id="+/-" type="button" onClick={(e) => handleBtn(e.target.id)}>+/-</button>
          <button id="%" type="button" onClick={(e) => handleBtn(e.target.id)}>%</button>
          <span>
            <button id="÷" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>÷</button>
          </span>
        </div>
        <div className="row-1">
          <button id="7" type="button" onClick={(e) => handleBtn(e.target.id)}>7</button>
          <button id="8" type="button" onClick={(e) => handleBtn(e.target.id)}>8</button>
          <button id="9" type="button" onClick={(e) => handleBtn(e.target.id)}>9</button>
          <span>
            <button id="x" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>x</button>
          </span>
        </div>
        <div className="row-2">
          <button id="4" type="button" onClick={(e) => handleBtn(e.target.id)}>4</button>
          <button id="5" type="button" onClick={(e) => handleBtn(e.target.id)}>5</button>
          <button id="6" type="button" onClick={(e) => handleBtn(e.target.id)}>6</button>
          <span>
            <button id="-" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>-</button>
          </span>
        </div>
        <div className="row-3">
          <button id="1" type="button" onClick={(e) => handleBtn(e.target.id)}>1</button>
          <button id="2" type="button" onClick={(e) => handleBtn(e.target.id)}>2</button>
          <button id="3" type="button" onClick={(e) => handleBtn(e.target.id)}>3</button>
          <span>
            <button id="+" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>+</button>
          </span>
        </div>
        <div className="row-4">
          <div className="zero">
            <button id="0" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>0</button>
          </div>
          <button id="." className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>.</button>
          <span>
            <button id="=" className="btn" type="button" onClick={(e) => handleBtn(e.target.id)}>=</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
