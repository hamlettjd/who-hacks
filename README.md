# who-hacks

An app to search hacker news on the Algolia API, with session history. This app uses NodeJS with React using Functional Components with react-bootstrap for quick styling.

> earlier commits had added an express server backend, but has since been removed since all project goals were completed with just the react app.

---

### Deployment:

1. Clone this repository
2. Inside the client directory, run:

### `npm install` (install npm and node first if not already done)

3. In the client directory, you can run:

### `npm start`

- This should open a window in your default browser to http://localhost/3000, This app was tested with Google Chrome.

This app does not have a production environment set up. If a live site was part of this project description, a small AWS EC2 instance would have been instantiated with this app running on it and Route 53 would be used to get a domain name set up.

### App Usage:

1. Once running, you can search in the text box, submit the search, view a populated list of search results, and navigate to the history page where you can see a list of every search term submitted as well as resulting articles for each term.

---

## Code:

The work for this project is performed by the 4 components inside:

### `/client/src/components`

The bulk of the work for this app comes from the **Search.** Component, which is the acting homepage, holder of state, and houses it's own functions for submitting requests to the api.

The **Result** and **results** components are used to generate a list of articles from a submitted search. they are used by the search and history components.

the **History** component takes the built history from the search component, and displays all results generated from every search performed by the user this session.
