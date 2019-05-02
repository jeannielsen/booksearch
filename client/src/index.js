// Import react a js library for the frontend
import React from "react";
// Imports the package react-dom which serves as the entry point to the DOM and server renderers for React.
import ReactDOM from "react-dom";
//imports the user generate ./App
import App from "./App";
// import registerServiceWorker which is a script to simplify service worker registration with hooks for common events.
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM is a library of functions that allows you to use Javascript and convert (or render) it to HTML
//The Document method getElementById() returns an Element object representing the element whose id property matches the specified string
ReactDOM.render(<App />, document.getElementById("root"));
// Service worker is a background worker that acts as a programmable proxy, allowing us to control what happens on a request-by-request basis. We can use it to make (parts of, or even entire) React apps work offline.
registerServiceWorker();
