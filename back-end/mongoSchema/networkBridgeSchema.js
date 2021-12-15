
const mongoose = require('mongoose');

const networkBridgeDb = new mongoose.Schema({

    fromToken:{
        type:String,required:true
    },

    toToken:{
        type:String,
    },
    fromAddress:{
        type:String,
    },
    toAddress:{
        type:String,
    },
    amount:{
        type:Number,required:true
    },
    nonce: {
        type:Number,required:true
    },
    timeStamp: {
        type: Number,
    },
    transactionHash: {
        type : String,
    },
    Status : {
        type : Boolean, default: false,
    },

});

const User = mongoose.model('trasnferToken',networkBridgeDb);

module.exports  = User;