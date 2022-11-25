const Item = ({ item, onDelete }) => (
  <div className="item">
    <span style={{ width: "30%" }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: "30%" }}>{item.author}</span>
    <span style={{ width: "30%" }}>{item.num_comments}</span>
    <span style={{ width: "30%" }}>{item.points}</span>
    <button
      type="button"
      onClick={() => onDelete(item)}
      className="button button_small"
    >
      Delete
    </button>
  </div>
);

export default Item;
