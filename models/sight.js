const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sightSchema = new Schema({
    title:String,
    image:String,
    description:String,
    location:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
});



module.exports = mongoose.model('Sight',sightSchema)