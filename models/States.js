const mongoose = require('mongoose');
const uri = "mongodb+srv://ahmetadali:Test123@cluster0.ihags3u.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

const stateSchema = new mongoose.Schema({
    stateCode: {
        type: String,
        required: true
    },
    funfacts: [{
        type: String,
        required: true

    }]
});

const States = mongoose.model('States', stateSchema);

module.exports = States;
