// Imports Component and set it to the default export of the 'react' package.  If import React from "react" was used there could only be a single default export 
import React, { Component } from "react";
// Imports user defined components
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
// imports the API routes from the utils folder
import API from "../utils/API";
// imports Col, Row, and Container from the user defined file index.js in the Grid file
import { Col, Row, Container } from "../components/Grid";
// imports List from the user defined file index.js in the List folder
import { List } from "../components/List";


// class Home takes on the attributes of the component
class Home extends Component {
  // sets state of books to an empty array, sets query equal to an empty string, set message to "Search For a Book to Begin"
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // funtion that runs when the form value changes (keystrokes)
  // whenever you type the new value is stored in the state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // getBooks is an API call to query for books and returns the results
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // if no books are found it sets books to an empty array and sends message that no books were found
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // handles the user input when the form is submitted
  handleFormSubmit = event => {
    // It prevents the default event side-effect from occurring.
    event.preventDefault();
    // access the controller to getBooks from Google
    this.getBooks();
  };
// When book is saved, it checks the books
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      // id generated when model is created
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                //q is a prop used in the form 
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">

              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
