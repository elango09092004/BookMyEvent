const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingid: { type: String, required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: String, required: true },
    bookingdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
