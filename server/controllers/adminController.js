const {mergeOnePersonnelDrug, mergePersonnelsDrugs, mergePersonnelsAppointment, mergePersonnelsEmergency, mergePersonnelsReport} = require("../repository/personnel.repository")
const {update} = require("../repository/detail.repository")
const { drugExcel, downloadExcel, appointmentExcel ,reportExcel, emergencyExcel} = require("./excelController")

exports.detailPersonnel=async(req,res)=>{
    res.sendStatus(200)
}

exports.accept=async(req, res)=>{
    res.sendStatus(200)
}

exports.unaccept=async(req, res)=>{
    res.sendStatus(200)
}

exports.toExcel=async(req,res)=>{
    res.sendStatus(200)
}