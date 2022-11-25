import Item from "./Item";

const List = ({ list, onDelete }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onDelete={onDelete} />
  ));

export default List;
