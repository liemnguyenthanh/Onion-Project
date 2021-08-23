import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { type: String, require : true},
    password: { type: String, require : true},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model('User', userSchema);

export default User;