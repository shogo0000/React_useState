import React, { useState } from "react";
import "./style.css";
import { Counter } from "./Counter";
import { Hellow } from "./Hellow";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

export default function App() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);
  const countIncrement = () => setCount((p) => p + 1);
  const countDecrement = () => setCount((p) => p - 1);
  const countReset = () => setCount(INITIAL_COUNT);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Counter
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />
      <Hellow
        name={name}
        handleChangeName={handleChangeName}
        initialName={INITIAL_NAME}
      />
    </>
  );
}
