import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Results from './Results';
import Button from 'react-bootstrap/Button';

const History = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [resultHistory] = useState(state.resultHistory);
  let formattedHistory = [];

  //? populate search term and results for each search performed by end user.
  let searchIndex = 0;
  for (let searchName in resultHistory) {
    searchIndex++;
    formattedHistory.push(
      <div key={searchName + 1}>
        <hr />
        <h2>
          # {searchIndex}: {searchName}
        </h2>
        <Results searchResults={resultHistory[searchName]} />
        <hr />
      </div>
    );
  }

  return (
    <div className="container-fluid bg-dark text-light p-5">
      <h1 className="text-center">History</h1>
      <Button
        variant="primary"
        onClick={(e) => {
          e.preventDefault();
          navigate('/search', { state: { resultHistory } });
        }}
      >
        Back to Search
      </Button>
      {formattedHistory}
    </div>
  );
};
export default History;
