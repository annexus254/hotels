const express     =   require("express");
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
  _ =>{
    app.listen(5000 , _ => console.log("\nServer started. Listening on port 5000...") );
  }
);



// Error / success

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));

db.on("connected", () => console.log("Mongo running at " + mongoURI + "\n\nConnection to the database successfully made!"));

db.on("disconnected", () => console.log("mongo disconnected"));

//  HUNGRY FOR MORE?
const app     = express();

app.get("/" , (req , resp) => {
  Hotel.find({}).then((data) => {
    resp.status(200).send(data);
    console.log("Data successfully sent");
  });
});

app.get("/hotels/:id" , (req , resp) => {
  Hotel.findById(req.params['id']).then( data => {
    resp.status(200).send(data);
    console.log("Data successfully sent");
  });
});