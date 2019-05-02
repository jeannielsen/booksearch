// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";

// Defines the functional component Form and accepts the props q (query), handleInputChange and handleFormSubmit from the home page
function Form({ q, handleInputChange, handleFormSubmit }) {

  // returns the data input from the home page
  return (
    <form>
      {/* jsx attributes, similiar to html */}
      <div className="form-group">
        <label htmlFor="Query">
          {/* prints the word Book in bold above the query line */}
          <strong>Book</strong>
        </label>
        {/*jsx attributes for form input id= title which is a string, value is set equal to the query and a place holder of "Ready Player One" is used, don't know why.  The name is set equal to q which is set as an empty string on the home page prior to input  */}
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          // onChange is an event listener similar to onClick, handleInputChange is a generic change handler that reads the name from the field, and updates state with the same.
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        {/* jsx attribute for button similar to html, then onClick it submits the form and automatically binds it*/}
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Searchmodules
        </button>
      </div>
    </form>
  );
}
// Exports the form to make it available to other 
export default Form;
