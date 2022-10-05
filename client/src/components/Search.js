//? styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import coolImage from '../images/cool-hacker-img.jpg'; //? using a royalty free image at the bottom to add a little flavor.

//? functional components
import Results from './Results';

//? for state management / time travel
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
  const { state } = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState({});
  let prevHistory = [];
  try {
    //? add history from history route if exists
    prevHistory = state.resultHistory ? state.resultHistory : prevHistory;
  } catch (err) {}
  const [resultHistory, setResultHistory] = useState(prevHistory);
  const navigate = useNavigate();

  //? form submission handler to send search to api & call functions to ingest resulting data
  const fillSearchResults = async () => {
    searchAlgolia().then((ResData) => {
      try {
        setSearchResults({ ...ResData.hits });
        addHistory(ResData.hits);
      } catch (err) {
        console.log(err);
      }
    });
  };

  //? query API
  const searchAlgolia = async () => {
    let baseURL = 'http://hn.algolia.com/api/v1/search?query=';
    let response = await fetch(baseURL + searchText, {
      method: 'GET',
    });
    return response.json();
  };

  //? update history state
  const addHistory = (hits) => {
    let newHistory;
    try {
      newHistory = { ...state.resultHistory, ...resultHistory };
    } catch (err) {
      console.log(err);
      newHistory = {};
    }

    newHistory[searchText] = hits;
    setResultHistory({ ...newHistory });
  };

  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <div className="container bg-dark p-5">
        <div>
          <h1 className="text-center">WhoHacker:</h1>
        </div>
        <hr />

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fillSearchResults();
          }}
        >
          <Form.Group controlId="formBasicSearch">
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                fillSearchResults();
              }}
            >
              Search
            </Button>
            <Form.Control
              type="search"
              placeholder="type in here!"
              aria-label="searchText"
              aria-describedby="searchText"
              onChange={(e) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
              value={searchText}
            />
          </Form.Group>
        </Form>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            navigate('/history', { state: { resultHistory } });
          }}
        >
          History
        </Button>
        <hr />
        <Results searchResults={searchResults} />
      </div>
      <Image fluid="true" src={coolImage} width="45%" />
    </div>
  );
};
export default Search;
