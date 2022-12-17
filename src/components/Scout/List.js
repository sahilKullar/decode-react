// eslint-disable-next-line camelcase
import Item from "./Item";

export default function List({ list }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);
}
