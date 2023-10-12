import { ListItemParameter } from "../types/Types";

function ListItem(listItem: ListItemParameter) {
  return (
    <li
      onClick={() => listItem.onClick(listItem.index)}
      className={
        listItem.selectedIndex === listItem.index
          ? "list-group-item active"
          : "list-group-item"
      }
    >
      {listItem.city}
    </li>
  );
}

export default ListItem;
