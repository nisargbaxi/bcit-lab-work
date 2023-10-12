import { useState } from "react";
import ListItem from "./ListItem";

function ListGroup(listGroup: ListGroupParms) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    listGroup.onCitySelected(listGroup.cities[index]);
  };

  if (listGroup.cities.length === 0) {
    return <h3>No cities to select!</h3>;
  }

  return (
    <ul className="list-group">
      {listGroup.cities.map((city, index) => (
        <ListItem
          city={city}
          index={index}
          selectedIndex={selectedIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
}

export default ListGroup;
