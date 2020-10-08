module.exports = {
  mongoURI: "mongodb+srv://chris:" + process.env.DB_PW + "@cluster0.ezrzw.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority",
  secretOrKey: process.env.SECRET
};
