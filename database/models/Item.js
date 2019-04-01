const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        description: "name of the product, ex. REI Passage 2"
    },
    category: {
        type: String,
        trim: true,
        required: true,
        description: "category the product falls under, ex. Tents"
    },
    status: {
        $in: ["Available", "Out for Rent", "In Maintenance"],
        default: "Available",
        required: true,
        description: "One of three potential statuses."
    },
    serial_number: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        description: "unique id for each item that is also physically on each item"
    },
    image: {
        type: String,
        required: true,
        description: "URL for image"
    },
    condition: {
        $in: ["New", "Good", "Fair", "Poor"],
        default: "New",
        required: true,
        description: "General descriptor of the items condition"
    },
    comments: [
        {
            //Store ObjectIds of the comments in the array
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    number_of_times_rented: {
        type: Number,
        required: true,
        description: "Keeps track of the number of times an item has been rented out. Potential use for future statistics."
    },
    maintenance_comments: [
        {
            //Store ObjectIds of the maintenance comments in the array
            type: Schema.Types.ObjectId,
            ref: "MaintenanceComment"
        }
    ],
    dateRentedOut: {
        type: Date,
        description: "If not currently out for rent, this will be left empty. If out for rent, this will be the date it left with the customer."
    },
    dateDue: {
        type: Date,
        description: "The date the item is due back from rent"
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;