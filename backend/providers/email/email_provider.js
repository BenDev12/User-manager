class Email_service {
    static async send_mail(params){
        const message={}
        if(params)
        {
            message=params.attributes
        }else{
            console.log('can not send row emails for now')
        }
    }

}
module.exports=Email_service;