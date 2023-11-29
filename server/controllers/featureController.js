const {createAppointment} = require("../repository/appointment.repository")
const {createEmergency} = require("../repository/emergency.repositoy")
const {createReport} = require("../repository/report.repository")
const {craetePersonnel} = require("../repository/personnel.repository")
const {mergePersonnelsAppointment, mergePersonnelsEmergency, mergePersonnelsReport} = require("../repository/personnel.repository")
const { sendNotificationMessageToAdmin } = require("./lineController")

exports.appointment = async(req,res)=>{
    res.sendStatus(200)
}

exports.emergency = async(req,res)=>{
    res.sendStatus(200)
}

exports.report = async(req,res)=>{
    res.sendStatus(200)
}

exports.mergePersonnelAppointmentApi = async (req,res)=>{
    res.sendStatus(200)

}

exports.mergePersonnelEmergencyApi = async (req,res)=>{
    res.sendStatus(200)

}

exports.mergePersonnelReportApi = async (req,res)=>{
    res.sendStatus(200)

}