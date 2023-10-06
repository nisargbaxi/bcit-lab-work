import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState(
    "There are not cities selected"
  );

  const onCitySelected = (value) => {
    setSelectedCity(value);
  };
  return (
    <>
      <Viewer city={selectedCity} />
      <ListGroup onCitySelected={onCitySelected} />
    </>
  );
}

export default App;
