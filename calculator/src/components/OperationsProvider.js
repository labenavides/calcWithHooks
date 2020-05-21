import React, { useState } from "react";

function OperationProvider() {
  const [number, setNumber] = useState(123);
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
    console.log("algo");
    setOperation(type);
    getCalc(type);
  };
  const getCalc = (operation) => {
    console.log("operacion " + operation);
    switch (operation) {
      case "+":
        console.log("operation " + operation);
        console.log("valor previo" + prevValue);
        console.log("numero ingresado" + number);
        setPrevValue(parseInt(prevValue) + parseInt(number));
        setNumber(0);
        break;
      case "-":
        console.log("operation " + operation);
        console.log("valor previo" + prevValue);
        console.log("numero ingresado" + number);
        setPrevValue(parseInt(prevValue) - parseInt(number));
        setNumber(0);
        break;
      case "*":
        console.log("operation " + operation);
        console.log("valor previo" + prevValue);
        console.log("numero ingresado" + number);
        setPrevValue(prevValue * parseInt(number));
        setNumber("");
        break;
      case "/":
        console.log("operation " + operation);
        console.log("valor previo" + prevValue);
        console.log("numero ingresado" + number);
        setPrevValue(prevValue / parseInt(number));
        setNumber("");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <p>Prev value</p> {prevValue}
      </div>
      <div>
        <p>number</p> {parseInt(number) + ""}
      </div>
      <div>
        <p>operation</p> {operation}
      </div>
      <div>
        {/* clear all */}
        <button onClick={() => clearAll()} value="">
          AC
        </button>
      </div>
      <div>
        {/* operations button */}
        <button onClick={() => setOperationType("+")}>+</button>
        <button onClick={() => setOperationType("-")}>-</button>
        <button onClick={() => setOperationType("/")}>/</button>
        <button onClick={() => setOperationType("*")}>*</button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            getCalc();
          }}
          value="="
        >
          =
        </button>
      </div>
      <div>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="7">
          7
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="8">
          {" "}
          8
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="9">
          {" "}
          9
        </button>
      </div>
      <div>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="4">
          4
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="5">
          5
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="6">
          6
        </button>
      </div>
      <div>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="1">
          1
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="2">
          2
        </button>
        <button onClick={(e) => setNumberFromButton(e.target.value)} value="3">
          3
        </button>
      </div>
    </div>
  );
}

export default OperationProvider;