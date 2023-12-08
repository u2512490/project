const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName:{type:String,trim:true},
        isGroupChat:{type:Boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            },
        ],
        latestMessage:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;


//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin

/* 
-> trim = so there are no trailing spaces or spaces after the name.
-> mongoose.Schema.Types.ObjectId = contain the ID of the user. 
->Timestamp = creates a timestamp everytime a new data is added.
->const chatModel = Object
*/