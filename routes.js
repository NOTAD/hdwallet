'use strict';
module.exports = function(app) {
  let Ctrl = require('./controller.js');

  // todoList Routes
  app.route('/genaddress')
    .get(Ctrl.genaddress),
    
  app.route('/')
  .get(Ctrl.getAccPriv);

  app.route('/createtask')
    .get(Ctrl.createtask),
  app.route('/getaddress')
    .get(Ctrl.getaddress)
  //   app.route('/products/:productId')
  //     .get(Ctrl.detail)
  //     .put(Ctrl.update)
  //     .delete(Ctrl.delete);
};