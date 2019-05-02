// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSXimport React from "react";
import React from "react";
// Defines the functional component Card and accepts the props icon, title, and children which are deconstructed so you don't need the prop.icon, prop.title, prop.children
function Card({ icon, title, children }) {

  // This returns a card 
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          {/* strong means bold */}
          <strong>
            {/* html type formatting for icon fed from API search that displays on home page, aria-hidden="true" tells assistive technology to ignore*/}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* The card body displays the children */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// exports Card so it is available to other modules
export default Card;
