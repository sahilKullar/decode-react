export default function Item({
  url,
  title,
  author,
  num_comments: numComments,
  points,
}) {
  return (
    <>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{numComments}</span>
      <span>{points}</span>
    </>
  );
}
