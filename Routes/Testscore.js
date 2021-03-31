var express = require('express')

var router = express.Router()

const {testPost, HighScore, averageScoreFirst, averageScoreSecond, averageScoreThird} = require("../Controllers/TestScore")

router.post("/testpost", testPost)
router.get("/getHighScore", HighScore)
router.get("/averageScoreFirst", averageScoreFirst)
router.get("/averageScoreSecond", averageScoreSecond)
router.get("/averageScoreThird", averageScoreThird)

module.exports = router;