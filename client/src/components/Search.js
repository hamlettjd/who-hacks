import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Results from './Results';

// using a royalty free image at the bottom to add a little flavor.
import Image from 'react-bootstrap/Image';
import coolImage from '../images/cool-hacker-img.jpg';
const Search = () => {
  console.log('Search component:');

  const fillSearchResults = async () => {
    const ResData = await searchAlgolia();
    console.log('----------------Response:---------------');
    try {
      //setPricingResponse({ ...ResData });
      console.log(ResData);
    } catch (err) {
      console.log(err);
    }
  };

  const searchAlgolia = async () => {
    let baseURL = 'http://hn.algolia.com/api/v1/search?query=';
    let searchText = 'stolen';
    console.log('...searching -- ' + baseURL + searchText);
    let response = await fetch(baseURL + searchText, {
      method: 'GET',
    });
    //console.log(response.clone().json());
    return response.json();
  };

  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <div className="container bg-dark p-5">
        <div>
          <h1 className="text-center">WhoHacker:</h1>
        </div>
        <hr />

        <Form>
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
            <Form.Control type="search" placeholder="type in here!" />
          </Form.Group>
        </Form>

        <hr />
        <Results />
      </div>
      <Image fluid="true" src={coolImage} width="45%" />
    </div>
  );
};
export default Search;
