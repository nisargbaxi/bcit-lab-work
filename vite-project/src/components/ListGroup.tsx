import { useState } from "react";
import ListItem from "./ListItem";

interface Props {
  cities: string[];
  setSelectedIndex: () => void;
}

function ListGroup({ onCitySelected }) {
  const cities: string[] = ["Vancouver", "Paris", "London"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onCitySelected(cities[index]);
  };

  if (cities.length === 0) {
    return <h3>No cities to select!</h3>;
  }

  return (
    <ul className="list-group">
      {cities.map((city, index) => (
        <li
          onClick={() => handleClick(index)}
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {city}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
