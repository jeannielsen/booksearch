// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";
// Import ListItem from the index.js file in the List folder and destructure it.  By destructuring your props, you can get rid of props / this.props in front of each prop.  ListItems are used to display rows of information, in this case books
import { ListItem } from "../List";
// Import destructured row and col from the index.js file in the Grid folder
import { Row, Col } from "../Grid";
// Import the style.css file for the index.js file in the Book folder
import "./style.css";

// Defines the functional component Book and accepts the props title, subtitle, author, etc. from the API search that are displayed on the Home page
function Book({ title, subtitle, authors, link, description, image, Button }) {
  // return the ListItems from the API search that are displayed on Home page
  return (
    <ListItem>
      {/* html type code for formatting ListItems */}
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/*h3 header with the title name fed in from the API search that are displayed on Home page */}
          <h3 className="font-italic">{title}</h3>

          {/* If subtitle is true (there is a value), then it returns the subtitle in a h5 header) */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* html type formatting for a button titled view */}
        {/* Button opens the href link feed from the API search that displays on Home page */}
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      {/* new column with "Written by", followed by the authors name fed in from the API search that displays on the home page */}
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>

      {/* New row and column that displays the thumbnail image from the API search that displays on the home page.  If the image is not available, the title appears in its place */}
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// exports Book so it is available to other modules
export default Book;
