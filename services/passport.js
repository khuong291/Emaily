const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // The second argument of done will be stored in req.session.passport.user
  // In this case, it will be req.session.passport.user = {id: some value}
  // The result of this function will be passed into deserializeUser
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // The first argument is the id, which was passed by serializeUser
  // We find the user from database and attach it
  // to req.user
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
