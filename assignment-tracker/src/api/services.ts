const myMovies: object = [];

export function addAssignment(name: string) {
  const key = Object.keys(myMovies).find(
    (item) => item.toLowerCase() == name.toLowerCase()
  );

  if (key) {
    alert("Assignment already added !!");
    return;
  }
}
