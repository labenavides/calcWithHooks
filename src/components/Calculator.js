import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Calculator(props) {
  const { initialValue } = props;
  const [number, setNumber] = useState(parseInt(initialValue));
  const [prevValue, setPrevValue] = useState();
  const [operation, setOperation] = useState("");

  const clearAll = () => {
    setNumber(0);
    setOperation("");
    setPrevValue();
  };
  const setAfterOperation = () => {
    setNumber("");
    setOperation("");
  };
  const setNumberFromButton = (e) => {
    if (number === parseInt(initialValue)) {
      setNumber(e);
    } else {
      const numberFromButton = isNaN(number) ? "" : number;
      setNumber(numberFromButton + e);
    }
  };

  const setOperationType = (type) => {
    if (!prevValue) {
      setPrevValue(number);
      setNumber("");
    }
    setOperation(type);
  };
  const getCalc = (operation) => {
    console.log("operacion " + operation);
    if (number === "") {
      setNumber("0");
    }
    switch (operation) {
      case "+":
        setPrevValue(parseInt(prevValue) + parseInt(number));
        setAfterOperation();
        break;
      case "-":
        setPrevValue(parseInt(prevValue) - parseInt(number));
        setAfterOperation();
        break;
      case "*":
        setPrevValue(parseInt(prevValue) * parseInt(number));
        setAfterOperation();
        break;
      case "/":
        setPrevValue(parseInt(prevValue) / parseInt(number));
        setAfterOperation();
        break;
      default:
        break;
    }
  };

  return (
    <div id="calculator-div">
      <div className="display-result">
        {""}
        {number !== "" ? number : "" === operation ? prevValue : number}
      </div>
      <div>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="7"
        >
          7
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="8"
        >
          {" "}
          8
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="9"
        >
          {" "}
          9
        </Button>
        {/* operations button */}
        <Button
          className="button"
          bsStyle="primary"
          onClick={() => setOperationType("+")}
        >
          +
        </Button>{" "}
      </div>
      <div>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="4"
        >
          4
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="5"
        >
          5
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="6"
        >
          6
        </Button>
        <Button
          variant="primary"
          className="button"
          onClick={() => setOperationType("-")}
        >
          -
        </Button>{" "}
      </div>
      <div>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="1"
        >
          1
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="2"
        >
          2
        </Button>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="3"
        >
          3
        </Button>
        <Button
          variant="primary"
          className="button"
          onClick={() => setOperationType("/")}
        >
          /
        </Button>{" "}
      </div>
      <div>
        <Button
          variant="ligth"
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="0"
        >
          0
        </Button>
        {/* clear all */}
        <Button
          variant="ligth"
          className="button"
          onClick={() => clearAll()}
          value=""
        >
          AC
        </Button>
        {/* "=" btn */}
        <Button
          variant="danger"
          className="button"
          onClick={(e) => {
            getCalc(operation);
          }}
          value="="
        >
          =
        </Button>
        <Button
          variant="primary"
          className="button"
          onClick={() => setOperationType("*")}
        >
          *
        </Button>{" "}
      </div>
    </div>
  );
}

export default Calculator;
