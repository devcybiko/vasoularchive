import axios from "axios";

export default {
  // Gets all records
  getRecords: function() {
    return axios.get("/api/records");
  },
  // Gets the book with the given id
  getRecord: function(id) {
    return axios.get("/api/records/" + id);
  },
  // Deletes the book with the given id
  deleteRecord: function(id) {
    return axios.delete("/api/records/" + id);
  },
  // Saves a book to the database
  saveRecord: function(bookData) {
    return axios.post("/api/records", bookData);
  }
};
