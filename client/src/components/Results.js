import { useState } from 'react';
import Result from './Result';

const Results = ({ searchResults }) => {
  let formattedResults = [];
  for (let i = 0; i < Object.keys(searchResults).length; i++) {
    //console.log(searchResults[i]);
    formattedResults.push(
      <Result
        key={searchResults[i].author + 'result' + i}
        title={searchResults[i].title}
        created_at={searchResults[i].created_at}
        url={searchResults[i].url}
        author={searchResults[i].author}
        points={searchResults[i].points}
      />
    );
  }

  return (
    <div className="container-fluid bg-dark text-light p-5 text-left">
      <h2>Results:</h2>
      {formattedResults}
    </div>
  );
};
export default Results;
