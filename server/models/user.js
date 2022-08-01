const mongoose = require('mongoose')

const Userschema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	},
)

const Users = mongoose.model('User', Userschema)

module.exports = Users;