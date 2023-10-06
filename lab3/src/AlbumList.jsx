export default function AlbumList({ albumList, onClick }) {
  return (
    <div className="bottom flex">
      <h2 className="float-right">Select Album</h2>
      <table>
        <tbody>
          {albumList.map((album) => {
            return (
              <>
                <tr key={album.name}>
                  <td style={{ padding: "5px" }}>
                    <img
                      src={album.coverImg}
                      width={50}
                      height={50}
                      onClick={() => onClick(album.id)}
                    />
                  </td>
                  <td style={{ padding: "5px" }}>
                    <b>
                      <a href="#" onClick={() => onClick(album.id)}>
                        {album.name}
                      </a>
                    </b>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
