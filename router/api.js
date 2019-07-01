var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");
var axios = require("axios");
var request = require("request");
var client_id = "16060a1e148546a3b55d02d0152e5c83";
var client_secret = "bad56cc2ca3945d6a83c243de87bebe7";
router.get("/spotify2/:title/:artist", function(req, res) {
  //removing spaces in the title for the query

  var artist = req.params.artist;
  var songName = req.params.title;

  console.log("name of song in routes: " + songName);
  var requestUrl =
    "https://api.spotify.com/v1/search?q=track:" +
    songName +
    "&artist:" +
    artist +
    "&type=track&limit=1";

  requestUrl = encodeURI(requestUrl);

  function runQuery() {
    console.log("in runQuery");

    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64")
      },
      form: {
        grant_type: "client_credentials"
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var token = body.access_token;
        var options = {
          url: requestUrl,
          headers: {
            Authorization: "Bearer " + token
          },
          json: true
        };
        /// second call
        request.get(options, function(error, response, body) {
          if (error) {
            res.send(error);
          }
          if (body.tracks === undefined || body.tracks.items[0] === undefined) {
            var id = "#";
            res.send(id);
          } else {
            var id = body.tracks.items[0].id;
            res.send(id);
          }
        });
      }
    });
  }
  runQuery();
});

module.exports = router;

