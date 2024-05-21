import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    body: {type: String, required: true, trim: true},
})

const PostModel = mongoose.model('post', postSchema)

export default PostModel