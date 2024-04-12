
const session = require("express-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

function set_session(req, content) {
  // Ensure that req.session is defined before setting properties
  if (req.session) {
    req.session.userID = content; // Store the user ID in req.session.userId
  } else {
    console.error("Session middleware not properly initialized");
  }
}


function get_session(req) {
  console.log(req.session.userID);
  return req.session.userID
}

async function delete_Session (req, res) {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.sendStatus(500); // Internal Server Error
    } else {
      res.redirect('/'); // Redirect to the login page or any other desired location
    }
  });
}
module.exports= {set_session, get_session ,delete_Session }