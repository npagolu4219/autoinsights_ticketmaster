const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appSchema = new Schema({
    reportHeader:{
        type:String,
        required:true
    },
    reportType:{
        type:String,
        required:true
    },
    reportFor:{
        type:String,
        required:true
    }
});

module.exports = fields = mongoose.model('field',appSchema);