import axios from "axios";

export default {
  // Gets all records
  getRecords: function() {
    return axios.get("/api/records");
  },
  // Gets the record with the given id
  getRecord: function(id) {
    return axios.get("/api/records/" + id);
  },
  // Deletes the record with the given id
  deleteRecord: function(id) {
    return axios.delete("/api/records/" + id);
  },
  // Saves a record to the database
  saveRecord: function(recordData) {
    return axios.post("/api/records", recordData);
  }
};
