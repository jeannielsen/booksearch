// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";

// Defines the functional component Footer 
function Footer() {
  return (
    // returns footer
    <footer>
      <hr />
      {/* styles the footer to pull-right and states Proudly built using React.js */}
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

// Export footer so it is available to other modules
export default Footer;
