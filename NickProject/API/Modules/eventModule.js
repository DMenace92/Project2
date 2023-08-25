const mongoose = require('mongoose');
// const { default: EventsComponent } = require('../../client/src/Components/Events/EventsComponent');
const {Schema} = mongoose;

const EventSchema = new Schema({
    image_name:{
        type:String,
        default:"nothing"
    },
    event_message:{
        type:String,
        // required:true
    },
    event_name:{
        type:String,
        // required:true
    },
    event_date:{
        type:String,
        // required:true
    },
    event_address:{
        type:String,
        // required:true
    },
    event_city:{
        type:String,
        // required:true
    },
    event_state:{
        type:String,
        // required:true,
    },
    event_zip:{
        type:String,
        // required:true
    },
    event_location_name:{
        type:String
    },
    event_Status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:Date,
})
const Events = mongoose.model('Events', EventSchema)
module.exports= Events