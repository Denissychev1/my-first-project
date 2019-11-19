const Patients = require('../../db/connection');
const db = require('./db.config');

const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  console.log(id);
  Patients.findById(id, function(err, user){
    done(err, user);
  });
});


module.exports = router;
