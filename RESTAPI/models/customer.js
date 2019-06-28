const db = require('mongoose');

const customerSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    lastname:       { type: String, required: true },
    address:        { type: String, required: true },
    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }   
});

module.exports = db.model("Customer", customerSchema);