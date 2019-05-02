

## Book Search

This is a React-based Google Books Search application.  You can search Google by book title and it will return the title of the book, the author's name, an image of the cover (if available) and a synopsis of the book.  The user can save favorites to a database and delete them when they are no longer required.  

The main goal of this project was to commit heavily on the code, to show that the student grasps the way the code is working.

### Languages Used

* Mongo database
* Express 
* React 
* Node

### Basic Flow Using the "Save Book" Function

1.	User clicks on save
2.	onClick method is called
3.	Calls saveBook method of util/api class
4.	util/api (saveBook method) uses axios to make an AJAX post call to the backend (/books)
5.	Node express backend application web server receives the AJAX call
6.	Express router middleware component receives the request
7.	The api route defined in the routes configuration receives the request and calls the controller method



