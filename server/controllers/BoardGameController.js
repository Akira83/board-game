'use strict'

const BoardGame = require('../models/BoardGameModel')
const mongoose = require('mongoose')
const BoardGameModel = mongoose.model('BoardGame', BoardGame)

exports.getAll = function (req, res) {
  BoardGameModel.find({}, function (err, board) {
    if (err) res.send(err)
    res.json(board)
  })
}

exports.create = function (req, res) {
  const newBoard = new BoardGameModel(req.body)
  newBoard.save(function (err, board) {
    if (err) res.send(err)
    res.json(board)
  })
}

exports.get = function (req, res) {
  BoardGameModel.findById(req.params.boardId, function (err, board) {
    if (err) res.send(err)
    res.json(board)
  })
}

exports.update = function (req, res) {
  BoardGameModel.findOneAndUpdate(
    { _id: req.params.boardId },
    req.body, { new: true },
    function (err, board) {
      if (err) res.send(err)
      res.json(board)
    })
}

exports.delete = function (req, res) {
  BoardGameModel.remove({
    _id: req.params.boardId
  }, function (err, board) {
    if (err) res.send(err)
    res.json({ message: 'Board successfully deleted' })
  })
}
