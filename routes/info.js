var express = require('express');
var router = express.Router();
var request = require('supertest');

var info = {
	players: function (req,res) {
		res.json(player_placement).end();
	},

	placedMen: function (req,res) {
		res.json(player_placement).end();
	},

	board: function (req,res) {
		res.json(game_array).end();
	}
}

module.exports = info;