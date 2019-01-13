const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
	{
		admin: { type: String, required: true },
		listUsers: { type: Array, default: [] },
		tasks: { type: Array, default: [] }
	},
  { timestamps: true }
);

schema.methods.addUser = function addUser(username) {
	this.listUsers.push(username);
};

module.exports = mongoose.model("Family", schema);