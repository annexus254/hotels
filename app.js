const mongoose    =   require("mongoose");
mongoose.Promise  =   global.Promise;
const db          =   mongoose.connection;


// Config

const mongoURI = "mongodb+srv://annexus:pass123@cluster0.ezy7s.mongodb.net/hotel?retryWrites=true&w=majority";

// Models

const Hotel = require("./models/hotel.js");
const hotelSeed = require("./models/seed.js");


// Connect to Mongo
mongoose.connect(

  mongoURI,
      
  { useNewUrlParser: true, useUnifiedTopology: true },
);



// Error / success

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));

db.on("connected", () => console.log("mongo connected: ", mongoURI));

db.on("disconnected", () => console.log("mongo disconnected"));
