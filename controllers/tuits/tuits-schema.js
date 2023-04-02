import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    username: String,
    handle: String,
    time: String,
    title: String,
    tuit: String,
    liked: Boolean,
    likes: Number,
    replies: Number,
    retuits: Number,
    disliked: Boolean,
    dislikes: Number,
    image: {
        type:String,
        default:"nasa.jpg"
    }
}, {collection: 'tuits'});
export default schema;
