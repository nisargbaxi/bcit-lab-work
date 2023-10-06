import { useState } from "react";
import MyInput from "./components/MyInput";

function App() {
  const [name, setName] = useState("");

  const changeValue = (value) => {
    setName(value);
  };
  return (
    <>
      <h2>Week 3 Lab Test</h2>
      <MyInput name={name} onChangeHandler={changeValue} /> <br /> <br />
      <MyInput name={name} onChangeHandler={changeValue} />
    </>
  );
}

export default App;
