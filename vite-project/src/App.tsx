import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const cities: string[] = ["Vancouver", "Paris", "London"];
  const [selectedCity, setSelectedCity] = useState(
    "There are not cities selected"
  );

  const onCitySelected = (value: string) => {
    setSelectedCity(value);
  };
  return (
    <>
      <Viewer city={selectedCity} />
      <ListGroup cities={cities} onCitySelected={onCitySelected} />
    </>
  );
}

export default App;
