import axios from "axios";

export default {
  scrape: function() {
    return axios.get("/scrape");
  },

  //////////////////////////////// auth

  isLogged: function() {
    return axios.get("/isLogged");
  },

  register: function(data) {
    console.log(data)
    return axios.post("/register", data);
  },
  login: function(data) {
    return axios.post("/login", data);
  },

  logout: function(data) {
    return axios.get("/logout");
  },
  authGoogle: function() {
    console.log("hit2");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios.get("/auth/google");
  },

  //////////////////////////// spotify

  playTunes: function(data) {
    return axios.get("/spotify2/" + data.title + "/" + data.artist);
  },

  //////////////////////////// general db

  // search scrape and add new items to db
  addScrape: function(data) {
    return axios.post("/addScrape", data);
  },

  // get tunes from db
  getPlaylist: function() {
    return axios.get("/getPlaylist");
  },

  ////////////////////////////////// user

  saveTune: function(data) {
    console.log(data);
    return axios.post("/add", data);
  },

  getSavedTunes: function(data) {
    console.log(data);
    return axios.get("/savedTunes/" + data);
  },
  deleteTunes: function(data) {
    console.log("to delete ", data);
    return axios.post("/deleteTunes", data);
  },

  updateTunes: function(data) {
    return axios.put("/removeUser", data);
  },

  saveRatings: function(data) {
    return axios.post("/saveRatings", data);
  }
};
