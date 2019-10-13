import axios from "axios";

var _host = "http://localhost:3001";

export default {
  // Gets all records
  getRecords: function() {
    return axios.get(_host + "/api/records");
  },
  // Gets the record with the given id
  getRecord: function(id) {
    return axios.get(_host + "/api/records/" + id);
  },
  // Deletes the record with the given id
  deleteRecord: function(id) {
    return axios.delete("/api/records/" + id);
  },
  // Saves a record to the database
  saveRecord: function(recordData) {
    return axios.post(_host + "/api/records", recordData);
  }
};
