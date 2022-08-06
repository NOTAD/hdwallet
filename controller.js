'use strict'
var bg = require("./background.js");

module.exports = {
  genaddress: (req, res) => {
    let index = req.query.index
    console.log (index)
    let accounts = bg.generateAccounts(index);
    accounts.then(function(result) {
      res.send(result);
      console.log(result);
      console.log("Đã trả kết quả");
    })},
    getaddress: (req, res) => {
      let index = req.query.index
      console.log (index)
      let accounts = bg.getAccounts(index);
      accounts.then(function(result) {
        res.send(result);
        console.log(result);
        console.log("Đã trả kết quả");
      })},
  createtask: (req, res) => {
    let network = req.query.network
    let amountVND = req.query.amount
    let numberAddress = req.query.number
    let createTaskNapTien = bg.createtask(network, amountVND, numberAddress);
    createTaskNapTien.then(function(result){
      res.send(result);
      console.log(result);
    })},

  
  getAccPriv: (req, res) => {
    const key = "53053cec45c095ea788c60fab9dafdc463f0801b5bb294e5c7077195da545d27";
    let address = bg.getAccFromPriv(key);
    address.then(function(result){
      res.send(result);
    })}
}
