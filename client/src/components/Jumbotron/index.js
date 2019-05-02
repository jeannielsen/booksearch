// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";
// imports user generated style.css file
import "./style.css";

// Defines the functional component Jumbotron and accepts the children prop (children is used to display whatever you include between the opening and closing tags when invoking the component.)
function Jumbotron({ children }) {

  // returns the jsx attribute for jumbotron and insert the children prop
  return <div className="jumbotron mt-4">{children}</div>;
}

// Exports Jumbotron to make it available to other modules
export default Jumbotron;
