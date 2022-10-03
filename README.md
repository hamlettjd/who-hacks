# who-hacks

An app to search hacker news on the Algolia API, with session history.

This app uses NodeJS with an Express Server Backend, and React using Functional Components with react-bootstrap for the Frontend.

### Deployment:

1. Clone this repository
2. inside the client & server directories, run `npm install` (install npm and node first if not already done)
3. run `npm start` on server.
4. in another terminal, run `npm start` from the client directory.
   - This should open a window in your default browser to http://localhost/3000, This app was tested with Google Chrome.

This app does not have a production environment set up. If a live site was part of this project description, a small AWS EC2 instance would have been instantiated with this app running on it and Route 53 would be used to get a domain name set up.

### App Usage:

1. Once running, you can search in the text box, submit the search, and view a list of results below.
