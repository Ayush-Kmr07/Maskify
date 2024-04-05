const mongoose = require ("mongoose");

const messageSchema = new mongoose.Schema({
    post: {
        text: {
            type: String,
            required: true,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    username: {
        type: String,
        ref: "User",
        required: true,
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Posts", postSchema);

//A model of name "users"  is made inside the chat DB.
 


