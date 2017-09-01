'use strict';
module.exports = function(app) {
  var control = require('../controllers/monsterController');

  // control Routes
  // get monsters
  app.route('/monsters')
    .get(control.list_all_monsters);
    //.post(control.create_a_task);


  app.route('/tasks/:taskId')
    .get(control.read_a_task)
    .put(control.update_a_task)
    .delete(control.delete_a_task);
};
