import { useLocation, useNavigate } from 'react-router-dom';

import Results from './Results';
import Button from 'react-bootstrap/Button';

const History = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const resultHistory = state.resultHistory;
  console.log('History component:');
  console.log(state);
  let formattedHistory = [];
  for (let searchName in resultHistory) {
    console.log(searchName);
    formattedHistory.push(
      <div key={searchName}>
        <hr />
        <h2>Search Term: {searchName}</h2>
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
          console.log(state);
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
