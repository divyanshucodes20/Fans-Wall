"use server"
import Razorpay from "razorpay"
import payment from "@/app/models/payment"
import connectDB from "@/app/db/connectdb"
import User from "@/app/models/user"
import Username from "@/app/[username]/page"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options={
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    let x=await instance.orders.create(options)
    await payment.create({oid:x.id,amount:amount,to_user:to_username,name:paymentform.name,message:paymentform.message})
    return x
}
export const fetchuser=async (username)=>{
    await connectDB()
    let u=await User.findOne({username:username})
    if(!u){
        return {error:"User not found"};
    }
    let user=u.toObject({flattenObjectIds:true})
    return user
}
export const fetchpayments=async (username)=>{
    await connectDB()
    let p=await payment.find({to_user:username}).sort({amount:-1}).lean()
    return p;
}
export const updateprofile=async (data,oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data) 
    if(oldusername!==ndata.username){
        let u=await User.findOne({username:ndata.username})
        if(u){
            return {error:"Username already exists"}
        }
    }
    await User.updateOne({email:ndata.email},ndata)
}