const Result = ({ title, author, created_at, points, url }) => {
  return (
    <div>
      <hr />
      <h3>{title}</h3>
      <a href={url}>{url}</a>
      <p>Author: {author}</p>
      <p>Created on: {created_at}</p>
      <p>Points: {points}</p>
    </div>
  );
};
export default Result;
