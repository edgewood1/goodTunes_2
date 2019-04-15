var express = require("express");
var router = express.Router();
var passport = require("passport");
var passportSetup = require("../config/passport");

// Register User
var cors = require("cors");

// var corsOption = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   exposedHeaders: ["x-auth-token"]
// };
// router.use(cors(corsOption));

// router.use((req, res, next) => {
// router.all("*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

router.get("/isLogged", (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.send(req.user);
    // get playlist
    // make a call to database based on users preferences.
  } else {
    res.send(false);
    // user not logged in
    //so login open module
  }
});

router.post("/register", function(req, res, next) {
  // does passport take username from req.body?
  passport.authenticate("register", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(info);
    }
    req.login(user, function(err) {
      if (err) {
        return next(err);
      }

      user.message = info;

      return res.send(user);
    });
  })(req, res, next);
});

// user log in

router.post("/login", function(req, res, next) {
  passport.authenticate("login", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(info);
    }
    req.login(user, function(err) {
      if (err) {
        return next(err);
      }
      // res.redirect("/logged");
      user.message = info.message;
      return res.send(user);
    });
  })(req, res, next);
});

// Endpoint to logout
router.get("/logout", function(req, res) {
  req.logout();
  res.send({ message: "logged out" });
});

// Endpoint to get current user
router.get("/user", function(req, res) {
  if (!req.user) {
    res.send("no user logged in");
  } else {
    res.send(req.user);
  }
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    successRedirect: "/",
    scope: ["profile"]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/"
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log("you're logged in");
    // console.log(res.data);
    // res.send(res.currentUser);
    return;
    // res.redirect("/protected");
    // res.json({ message: "hello" });
  }
);

module.exports = router;
