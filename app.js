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

/**
 * Checking for the number of hotels in the database
 */
/*
Hotel.count({} , (err , data)=> {

  if ( err ) console.log( err.message );

   console.log ( `There are ${data} hotels in this database` );

});
*/


/**
 * USING MONGOOSE TO CRUD OUR DATA
 */

/*  C - Create
const hiltonData  = { 
                      name : "Hilton Hotel", 
                      location : "Nairobi", 
                      rating : 5, 
                      vacancies : true,
                      tags : ["Five-star" , "Luxury" , "Expensive" , "Exotic"],
                      rooms : [{roomNumber: 25, size: "100 by 100", price: 100000, booked: false}]
                    };

const hilton      = new Hotel(hiltonData);
hilton.save().then( ()=> console.log("Added provided hotel data") ).catch(err=>console.log(err));
*/

/*  R - Read
Hotel.find({}).then( data => console.log(data) );
Hotel.find({} , "-_id name").then( data => console.log(data) );
Hotel.find({name : "Hilton Hotel"}).then( data => console.log(data) );
*/
Hotel.find({vacancies : {$gt : 0}} , "-rating").then( data => console.log(data) );
