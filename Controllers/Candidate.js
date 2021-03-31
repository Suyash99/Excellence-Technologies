const Candidate = require("../Model/Candidate")

exports.candidatePost = async (req, res) => {
    const candidate = new Candidate(req.body)
    candidate.save((err, candidates) =>{
        if(err){
            console.log(err)
            return res.status(400).json({
                err: "Not able to save candidate in DB"
            })
        }
        res.json({
            name: candidates.name,
            email: candidates.email
        });
    })
}

