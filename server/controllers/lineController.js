const {findOneIdentity,findOneIdenAndUpdate} = require("../repository/identity.repository")
const line = require("@line/bot-sdk")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const config = {
    channelAccessToken:process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret:process.env.CHANNEL_SECRET
}

const client = new line.Client(config)


const checkRole = async(role,Luserid)=>{
    return Promise.resolve()

}

exports.firstlogin=async(req,res)=>{
    res.sendStatus(200)
}

exports.login=async(req,res)=>{
    res.sendStatus(200)
}

exports.logout=async(req, res)=>{
    res.sendStatus(200)
}

exports.sendMessageToUser=async(req,res)=>{
    res.sendStatus(200)
}

exports.sendMessageToUserByAdmin=async(req,res)=>{
    res.sendStatus(200)
}

exports.sendNotificationMessageToAdmin=async({msg})=>{
    return Promise.resolve()
}