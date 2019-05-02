// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React, { Component } from "react";
// Import the user generated components
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
// Import the API from utils
import API from "../utils/API";
// Import the child components from Grid 
import { Col, Row, Container } from "../components/Grid";
// Import the child component from List
import { List } from "../components/List";

// class saved takes on the attributes of the component
class Saved extends Component {
  // state of the data is equal to the property of books which is currently an empty array
  state = {
    books: []
  };

  //Similiar to documentReady, waits until the component is mounted to the virtual DOM before proceeding
  componentDidMount() {

    this.getSavedBooks();
  }
  // 
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        // setting books = to results received from the db
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    // API with method delete books, hitting the API 
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          //delete button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
