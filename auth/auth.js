const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../model/model");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const {authSecret} = require("../.env")
const {connectdb} = require("../db");
const bcrypt = require("bcrypt");

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        //const user = await UserModel.findOne({ email });
        const connection = await connectdb();
        const [usersResults, usersFields] = await connection.execute(
          `SELECT * FROM users WHERE mail = ?`, [email])
        
        //if (!user)
        if (!usersResults.length) {
          return done(null, false, { message: "Invalid user or password" });
        }

        const validate = await bcrypt.compare(password, usersResults[0].hash);

        if (!validate) {
          return done(null, false, { message: "Invalid user or password" });
        }

        return done(null, usersResults[0], { message: "Logged in Successfully" });
      } catch (error) {
        console.log(error)
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: authSecret,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
