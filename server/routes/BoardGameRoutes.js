'use strict'

module.exports = function (app) {
  const boardGame = require('../controllers/BoardGameController')

  // todoList Routes
  app.route('/boardGame')
    .get(boardGame.getAll)
    .post(boardGame.create)

  app.route('/boardGame/:boardId')
    .get(boardGame.get)
    .put(boardGame.update)
    .delete(boardGame.delete)
}
