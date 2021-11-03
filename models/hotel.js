const mongoose      =   require("mongoose");

const Schema        =   mongoose.Schema;

const hotelSchema   =   new Schema({
                            name : { type : String, required : true, unique : true },
                            location : String,
                            rating : { type : Number , max : 5},
                            vacancies : Boolean,
                            tags : [{type : String}],
                            rooms     : [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
                        },
                        {   timestamps : true }
                        );
const hotelModel    =   mongoose.model("hotel" , hotelSchema);

module.exports      =   hotelModel;