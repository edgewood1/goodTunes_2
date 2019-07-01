var express = require("express");
var router = express.Router();
var Playlist = require("../models/playlist");
var mongoose = require("mongoose");
var x = [];
// go through scrape, if not in db, add it.
router.post("/addScrape", function(req, res) {
  req.body.forEach((e, i) => {
    if (e.artist.length > 0) {
      var data = {
        artist: e.artist,
        title: e.title,
        source: e.source,
        sourceLink: e.sourceLink,
        name: e.name
        // userId: e.id
      };
      Playlist.find(data, function(err, doc) {
        if (doc.length < 1) {
          x.push(data);
          playlist = new Playlist(data);
          playlist.save(data, function(err, doc) {
            if (err) return res.send(500, { error: err });
            // list of saved files

            if (req.body.length - 1 == i) {
              res.send({
                message: "done scraping",
                tunes: x
              });
            }
          });
        } else if (req.body.length - 1 == i) {
          res.send({ message: "done scraping", tunes: x });
        }
      });
    }
  });
});

router.post("/saveAll", function(req, res) {
  var playlist = new Playlist();
  var data = req.body;

  playlist.save(data, function(err, doc) {
    return res.send({ newTunes: data, message: "done" });
  });
});
 
// 1. get all from db when component loads

router.get("/getPlaylist", function(req, res) {
  Playlist.find({}, function(err, docs) {
    if (err) return res.send(500, { error: err });
    return res.send(docs);
  });
});

//////////////////////////////////////////////////////// user details

// user wants all tracks
router.get("/savedTunes/:id", function(req, res) {
  var id = req.params.id;
  Playlist.find({ userId: id }, function(err, doc) {
    return res.send(doc);
  });
});

router.put("/removeUser", function(req, res) {
  var user = [req.body.userId];
  var song = req.body._id;
  Playlist.updateOne({ songId: song }, { $pullAll: { userId: user } }, function(
    response
  ) {
    res.send({ message: "song removed" });
  });
});

// user wants to save one track
router.post("/add", function(req, res) {
  var data = {
    artist: req.body.artist,
    title: req.body.title,
    source: req.body.source,
    sourceLink: req.body.sourceLink,
    name: req.body.name,
    userId: req.body.id,
    usersRated: req.body.usersRated,
    votes: req.body.votes,
    average: req.body.average
  };
  Playlist.find(data, function(err, doc) {
    if (doc.length > 0) {
      return res.send("already saved");
    } else {
      playlist = new Playlist(data);

      playlist.save(data, function(err, doc) {
        if (err) return res.send(500, { error: err });

        return res.send({ message: "succesfully saved", tune: data });
      });
    }
  });
});

// user wants to delete item
router.post("/deleteTunes", function(req, res) {
  var ObjectId = mongoose.Types.ObjectId;
  console.log("file to delete - ", req.body);

  var id = req.body._id;
  var removeThis = req.body.idToRemove;
  console.log("to remove ", removeThis);
  Playlist.update(
    { _id: ObjectId(id) },
    {
      $pull: { userId: { $in: [removeThis] } }
    },
    function(err, doc) {
      return res.send(doc);
    }
  );
});

router.post("/saveRatings", function(req, res) {
  var ObjectId = mongoose.Types.ObjectId;
  console.log(req.body);
  console.log(req.body.songVotes, req.body.songAvg);
  Playlist.update(
    { _id: ObjectId(req.body.songId) },
    {
      $set: {
        usersRated: req.body.usersRated,
        average: req.body.songAvg,
        votes: req.body.songVotes
      }
    },
    function(err, doc) {
      return res.send(doc);
    }
  );
});

module.exports = router;
