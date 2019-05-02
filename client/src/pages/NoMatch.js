// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";
// Imports Col, Row, and Container from user generated index.js file in the Grid folder
import { Col, Row, Container } from "../components/Grid";
// Imports user generated Jumbo folder
import Jumbotron from "../components/Jumbotron";

// Funtion NoMath will return Container fluid and state error code 404 if the page is not found and emoji
function NoMatch() {
  return (
    <Container fluid>
      {/* jsx attributes similiar to html */}
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Exports NoMatch so it is available to other modules
export default NoMatch;
