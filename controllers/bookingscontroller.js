const Booking = require('../models/bookingmodel');
const {v4:uuidv4}=require("uuid")

// Add a new booking
const addBooking = async (req, res) => {
    try {
        const { event, user, bookingdate } = req.body;
        const newBooking = new Booking({
            bookingid: uuidv4(),
            event,
            user,
            bookingdate
        });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ message: "Failed to create booking", error: err.message });
    }
};

// Get all bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('event');
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve bookings", error: err.message });
    }
};

module.exports = {
    addBooking,
    getBookings
};
