const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventid:{
        type:Number

    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    organizer: {
       type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    capacity: {
        type: Number,
        required: true
    },
    ticketPricing: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Postponed', 'Scheduled', 'Cancelled'],
        default: 'Draft'
    }
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
