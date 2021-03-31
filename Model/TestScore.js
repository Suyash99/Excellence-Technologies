const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const testScoreSchema = new mongoose.Schema({
      first_round:{
          type: Number,
          required: true
      },
      second_round:{
          type: Number,
          required: true
      },
      third_round:{
          type: Number,
          required: true
      },
      totalScore:{
          type: Number,
      },
      studentEmail:{
          type: String,
          required: true
      }
})

module.exports = mongoose.model("TestScore", testScoreSchema)