import axios from "axios";

var _host = "http://localhost:3001";

state = {
    recordImage: {}
}

export default {
    getImage: function(id) {
        return axios.get(_host + "/api/records/" + id)
        .then(console.log(res)
    }
}