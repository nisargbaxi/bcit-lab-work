import React from "react";
import Album from "./Album";
import AlbumList from "./AlbumList";
import albums from "./data";

function App() {
  const [index, setIndex] = React.useState(0);

  const onAlbumChange = (id) => {
    setIndex(id);
  };

  return (
    <div className="app">
      <Album album={albums[index]} />
      <AlbumList albumList={albums} onClick={onAlbumChange} />
    </div>
  );
}

export default App;
