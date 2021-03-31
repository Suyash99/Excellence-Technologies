var express = require('express')

var router = express.Router()

const {candidatePost} = require("../Controllers/Candidate")

router.post("/canpost", candidatePost)

module.exports = router;