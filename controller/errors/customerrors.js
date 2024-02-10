

class customapierror extends error {
    constructor (message,statuscode){
        super(message)
        this.statuscode=statuscode
    }
}

const createcustomerror = (msg,statuscode)=>{
    return new customapierror (msg,statuscode)
}
module.exports={createcustomerror,customapierror}