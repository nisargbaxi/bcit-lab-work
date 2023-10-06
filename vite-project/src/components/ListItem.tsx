interface Props {
  city: string;
  index: number;
}

function ListItem({ city, index }: Props) {
  const handleClick = () => {
    alert(`${city} at index ${index} was clicked`);
  };

  return (
    <li onClick={() => handleClick()} className="list-group-item">
      {city}
    </li>
  );
}

export default ListItem;
