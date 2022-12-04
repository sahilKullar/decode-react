// eslint-disable-next-line camelcase
export default function List({ list }) {
  return list.map(({ objectID, ...item }) => (
    <div key={objectID}>
      <span>{item.title}</span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));
}
