import mongoose from "mongoose";
import  bcrypt from 'bcrypt'
import { ConnectionPoolClosedEvent } from "mongodb";
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type:String,
        trim:true,
        required:'Name is required'
    },
    email: {
        type:String,
        trim:true,
        unique:true,
        required:'Email is required'
    },
    phone: {
        type:String,
        trim:true,
        required:true
    },
    password: {
        type:String,
        trim:true,
        required:true,
        min:6,
        max:64
    },
    stripe_account_id:'',
    stripe_seller: {},
    stripeSession: {},
},
{timestamps:true}
)

userSchema.pre('save', function(next) {
    let user = this;
    if (user.isModified('password')){
        return bcrypt.hash(user.password,12,function(err,hash)
        {
            if(err){
                console.log("BCRYPT HASH ERR",err);
                return next(err);
            }
            user.password = hash;
            return next();
        })
    }else {
        return next();
    }
});

export default mongoose.model('User',userSchema); 