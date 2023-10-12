interface Props {
  city: string;
}
function Viewer({ city }: Props) {
  return <p>{city}</p>;
}

export default Viewer;
