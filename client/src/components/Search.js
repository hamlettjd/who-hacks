//? functional components
import Results from './Results';

//? for state management / time travel
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//? styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import coolImage from '../images/cool-hacker-img.jpg'; //? using a royalty free image at the bottom to add a little flavor.

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [resultHistory, setResultHistory] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

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

  const searchAlgolia = async () => {
    let baseURL = 'http://hn.algolia.com/api/v1/search?query=';
    console.log('...searching -- ' + baseURL + searchText);
    let response = await fetch(baseURL + searchText, {
      method: 'GET',
    });
    //console.log(response.clone().json());
    return response.json();
  };

  const addHistory = (hits) => {
    let newHistory = { ...state.resultHistory, ...resultHistory };
    console.log(hits);
    newHistory[searchText] = hits;
    setResultHistory({ ...newHistory });
    console.log(resultHistory);
  };

  useEffect(() => {
    console.log('use effect ran');
    console.log(state);
  });

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
            console.log(state);
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
