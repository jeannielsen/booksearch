import axios from "axios";

export default {

  // 
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },

  // Making an AJAX http call, sending message to the network connection, which returns the books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
