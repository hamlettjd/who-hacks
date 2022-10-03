import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Results from './Results'
const Search = () => {

  console.log("Search component:");

  const searchAlgolia = async () => {
    console.log('...searching...');
    // let response = await fetch('http://', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // return response.json();
  };

  return (
    <div className="container-fluid bg-dark text-light p-5">
      <div className="container bg-dark p-5">
        <div>
          <h1>WhoHacker:</h1>
        </div>
        <hr />
        <Form>
        <Button
            variant="primary"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              searchAlgolia();
            }}
          >
            Search
          </Button>
          </Form>
          <Results
            
          />
          <hr />   
      </div>
    </div>
  );
};
export default Search;
