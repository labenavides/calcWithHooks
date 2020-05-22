import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Calculator(props) {
  const { initialValue } = props;
  const [number, setNumber] = useState(parseInt(initialValue));
  const [prevValue, setPrevValue] = useState(0);
  const [operation, setOperation] = useState("");

  const clearAll = () => {
    setNumber(0);
    setOperation("");
    setPrevValue();
  };
  const setNumberFromButton = (e) => {
    const numberFromButton = isNaN(number) ? "" : number;
    setNumber(numberFromButton + e);
  };

  const setOperationType = (type) => {
    setOperation(type);
    getCalc(type);
  };
  const getCalc = (operation) => {
    console.log("operacion " + operation);
    switch (operation) {
      case "+":
        setPrevValue(parseInt(prevValue) + parseInt(number));
        setNumber(0);
        break;
      case "-":
        setPrevValue(parseInt(prevValue) - parseInt(number));
        setNumber(0);
        break;
      case "*":
        setPrevValue(parseInt(prevValue) * parseInt(number));
        setNumber(0);
        break;
      case "/":
        setPrevValue(parseInt(prevValue) / parseInt(number));
        setNumber(0);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>{prevValue}</div>
      <div>{parseInt(number) + ""}</div>

      <div>
        {/* operations button */}
        <Button variant="primary" onClick={() => setOperationType("+")}>
          +
        </Button>
        <Button variant="primary" onClick={() => setOperationType("-")}>
          -
        </Button>
        <Button variant="primary" onClick={() => setOperationType("/")}>
          /
        </Button>
        <Button variant="primary" onClick={() => setOperationType("*")}>
          *
        </Button>
      </div>
      <div>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="7"
        >
          7
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="8"
        >
          {" "}
          8
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="9"
        >
          {" "}
          9
        </Button>
      </div>
      <div>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="4"
        >
          4
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="5"
        >
          5
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="6"
        >
          6
        </Button>
      </div>
      <div>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="1"
        >
          1
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="2"
        >
          2
        </Button>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="3"
        >
          3
        </Button>
      </div>
      <div>
        <Button
          variant="ligth"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="0"
        >
          0
        </Button>
        {/* clear all */}
        <Button variant="ligth" onClick={() => clearAll()} value="">
          AC
        </Button>
        {/* "=" btn */}
        <Button
          variant="danger"
          onClick={(e) => {
            getCalc(operation);
          }}
          value="="
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
