const passport=require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const googleClientapi="473438913149-ea6o8j1ps8pkohgh1vt8amogoh46flr8.apps.googleusercontent.com";
const googleClientSecret="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"


passport.use(new GoogleStrategy({
    clientID:     googleClientapi,
    clientSecret: googleClientSecret,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  
      return done(null, profile);
   
  }
));

passport.serializeUser(function(user,done){
      done(null,user)
});


passport.deserializeUser(function(user,done){
    done(null,user)
});