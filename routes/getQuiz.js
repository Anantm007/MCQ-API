const mcqs = require('../models/mcqs');

module.exports = (req, res) =>{
    mcqs.find({}, (err, data)=>{
        if(err){
            res.json({
                error: err,
            })
        } else if(data.length == 0){
            res.json({
                success: false,
                msg: "Please enter data first",
            })
        } else{
            res.send(data);
        
        }
    })
}
