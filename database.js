const mongooose = require('mongoose');
const dbs = mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})
module.exports = mongooose.model("studata", dbs)