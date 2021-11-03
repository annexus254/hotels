const mongoose    =   require("mongoose");
mongoose.Promise  =   global.Promise;
const db          =   mongoose.connection;


// Config

const mongoURI    =   "mongodb+srv://annexus:pass123@cluster0.ezy7s.mongodb.net/hotel?retryWrites=true&w=majority";

// Models

const Hotel       =   require("./models/hotel.js");
const hotelSeed   =   require("./models/seed.js");


// Connect to Mongo
mongoose.connect(

  mongoURI,
      
  { useNewUrlParser: true, useUnifiedTopology: true },
);



// Error / success

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));

db.on("connected", () => console.log("Mongo running at " + mongoURI + "\n\nConnection made!"));

db.on("disconnected", () => console.log("mongo disconnected"));

/**
 * Adding seed data to the database
 */
/*
  //Method 1
Hotel.create( hotelSeed , function (err , serena){
  if ( err ) console.log ( err.message );

  console.log( "added provided hotel data" );
})
  //Method 2
const serena  = new Hotel(hotelSeed);
serena.save().then( ()=> console.log("added provided hotel data") ).catch(err=>console.log(err));
*/