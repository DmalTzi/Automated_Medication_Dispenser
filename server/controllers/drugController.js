const {createDrug} = require("../repository/drug.repository")
const {createDetail, getSerial, findOneDetail, usedSerialUpdate} = require("../repository/detail.repository")
const {craetePersonnel, mergePersonnelsDrugs, findOnePerson, mergeOnePersonnelDrug} = require("../repository/personnel.repository")
const { sendNotificationMessageToAdmin } = require("./lineController")

const check_symptom = async (id,serialnumber)=>{
    res.sendStatus(200)
}


exports.update_drug_para = async (req,res)=>{
    res.sendStatus(200)
}

exports.mergePersonnelApi = async (req,res)=>{
    res.sendStatus(200)
}


exports.findSerial = async (req,res)=>{
    res.sendStatus(200)
}


exports.usedSerial = async (req,res)=>{
    res.sendStatus(200)
}

