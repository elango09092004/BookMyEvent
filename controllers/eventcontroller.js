const Event =require("../models/eventmodel")
const { v4: uuidv4 } = require('uuid');


const addEvent = async (req, res) => {
    try {
        const { title, description, dateTime, location, organizer, category, capacity, ticketPricing, imageUrl, status } = req.body;

        const existingEvent = await Event.findOne({ title: title.trim() });

        if (existingEvent) {
            return res.status(400).json({
                message: "An event with this title already exists. Please choose a different title."
            });
        }

        const eventId = uuidv4();

        const newEvent = new Event({
            id: eventId,
            title,
            description,
            dateTime,
            location,
            organizer,
            category,
            capacity,
            ticketPricing,
            imageUrl,
            status
        });

        const savedEvent = await newEvent.save();

        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create event",
            error: error.message
        });
    }
};

module.exports = {
    addEvent
};
