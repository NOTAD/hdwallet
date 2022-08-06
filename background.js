const HdWallet = require('tron-wallet-hd'); 
const keyStore = HdWallet.keyStore;
const utils = HdWallet.utils;
require('dotenv').config();
var mysql = require('mysql');
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
  createtask: function(network, amount) {
    if (network == "trc20") {

    }
  }
};