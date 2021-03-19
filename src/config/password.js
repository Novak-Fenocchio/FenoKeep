const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserModule = require('../models/User');


passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async (email, password, done) => {

        // Match Email's User
        const user = await UserModule.findOne({ email: email });

      
        if (!user) {
          return done(null, false, { message: "Not User found." });
        } else {

          if(password == user.password)
          {
            console.log('SI');
            return done(null, user);

          }else
          {
            return done(null, false, { message: "Incorrect Password." });

          }
  

       /*    // Match Password's User
          const match = await user.matchPassword(password);
          if (match) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect Password." });
          } */

          // Match Password's User
      /*     const match = await user.matchPassword(password);
          if (match) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect Password." });
          }
 */
        }
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    UserModule.findById(id, (err, user) => {
      done(err, user);
    });
  });