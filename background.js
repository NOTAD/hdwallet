const HdWallet = require('tron-wallet-hd'); 
const keyStore = HdWallet.keyStore;
const utils = HdWallet.utils;
require('dotenv').config();
var mysql = require('mysql');
const CC = require('currency-converter-lt')

var con = mysql.createConnection({
  host: process.env.HOSTSQL,
  user: process.env.USQL,
  password: process.env.PSQL,
  database: process.env.DSQL
});
con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!!!")
});
const seed = process.env.MNEMONIC;

module.exports = {
  generateAccounts: async function(index) {
     const acc = await utils.generateAccountsWithMnemonic(seed, index);
    console.log("Address :",acc[0].address);
    return acc 
 },
 
  getAccounts: async function(index) {
     const acc = await utils.getAccountAtIndex(seed, index);
    console.log("Address :",acc.address);
    return acc 
 },
  getAccFromPriv: async function(key) {
    let validate = utils.validatePrivateKey(key);
    if (validate == false) {
      let res = ("Key không tồn tại.");
      return res;
    } else {
      const res = await utils.getAccountFromPrivateKey(key);
      return res;
    }
  },
  createtask: async function(network, amountVND, numberAddress) {
    if (network == "trc20") {
      let amountUSD = new CC({from:"VND", to:"USD", amount: Number(amountVND)})
      let convertamount = await amountUSD.convert()

      const acc = await utils.getAccountAtIndex(seed, numberAddress);
      let address = acc.address;
      // let sql = "abc" //Sql thêm acc.address, acc.privatekey, timeNow"
      let sql = "INSERT INTO `address` (`index`, `address`, `privatekey`, `timeused`, `network`, `amount`) VALUES (" + numberAddress + "," + address + "," + address.privatekey + "," + Date.now + ",'TRC20'," + convertamount +")";
      console.log(sql)
      let obj = {address: address, amount: convertamount };
      let json = JSON.stringify(obj);
      return json
    } if (network == "bep20") {
      let result = "Will update"
      return result
    } else {
      let result = "Network không tồn tại."
      return result
    }
  }
};