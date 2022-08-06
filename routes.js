'use strict';
module.exports = function(app) {
  let Ctrl = require('./controller.js');

  app.route('/genaddress')
    .get(Ctrl.genaddress),
    
  app.route('/')
  .get(Ctrl.getAccPriv);

  app.route('/createtask')
    .get(Ctrl.createtask),

  app.route('/getaddress')
    .get(Ctrl.getaddress)

  // app.route('/checkBalance')
  //   .get(Ctrl.checkBalance)

    // app.route('checkAllHDWallet')
    //   .get(Ctrl.checkAllHDWallet)


  // app.route('')
  //   .get(Ctrl.)
  // //   app.route('/products/:productId')
  //     .get(Ctrl.detail)
  //     .put(Ctrl.update)
  //     .delete(Ctrl.delete);
};