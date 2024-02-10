const {customapierror}=require('../errors/customerrors')
const errorhandlermiddleware=(err,req,res,next)=>{
    if(err instanceof customapierror){
        return res.status(err.statuscode).json({msg :err.message})
    }
    return res.status(500).json({mssg:'something went wrong,try again later'})
}
module.exports=errorhandlermiddleware