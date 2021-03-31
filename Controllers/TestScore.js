const TestScore = require("../Model/TestScore")

exports.testPost = (req, res) => {
    const test = new TestScore(req.body)
    if(!test.first_round || !test.second_round || !test.third_round ){
        return res.json({"err": "fill all scores"})
    }
    test.totalScore = test.first_round + test.second_round + test.third_round
    test.save((err, Score) =>{
        if(err){
            console.log(err);
            return res.status(400).json({
                err: "Not able to save candidate in DB"
            })
        }
        res.json({
            "data": Score
        });
    })
}

exports.HighScore = async(req, res) => {
    let data = await TestScore.find({})
    await data.sort(function(a,b){
        return a.totalScore - b.totalScore
    })
    return res.send(data.reverse()[0])
}

exports.averageScoreFirst = async(req, res) => {
    let data = await TestScore.find({})
    let average = 0
    if(data.length === 0){
        return res.json({"err": "No data found!"})
    }
    for await (let values of data){
        average = average + values.first_round
    }
    average = average/data.length
    return res.json({"Average": average})
}

exports.averageScoreSecond = async(req, res) => {
    let data = await TestScore.find({})
    let average = 0
    if(data.length === 0){
        return res.json({"err": "No data found!"})
    }
    for await (let values of data){
        average = average + values.second_round
    }
    average = average/data.length
    return res.json({"Average": average})
}

exports.averageScoreThird = async(req, res) => {
    let data = await TestScore.find({})
    let average = 0
    if(data.length === 0){
        return res.json({"err": "No data found!"})
    }
    for await (let values of data){
        average = average + values.third_round
    }
    average = average/data.length
    return res.json({"Average": average})
}