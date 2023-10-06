export default function Album(data) {
  return (
    <div className="top">
      <div className="float-left">
        <img src={data.album.coverImg} alt={data.album.name} />
      </div>
      <div className="float-right">
        <ol>
          {data.album.tracks.map((track, index) => {
            return (
              <li key={index}>
                {track}
                <a
                  href="#"
                  className="fa fa-play-circle"
                  style={{
                    fontSize: "23px",
                    color: "white",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                ></a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
