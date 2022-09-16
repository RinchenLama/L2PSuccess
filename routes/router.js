
import express from "express"

const router = express.Router();

import aws from "aws-sdk";


const ses = new aws.SES({region: "ap-southeast-2"})

router.post("/email", (req, res)=> {
    const {email, message, name, phone} = req.body;
    sesTest("rinchhenlama17@gmail.com", email, message, name, phone).then((val)=>{
        console.log('got this back', val)
        res.send("successful")
    }).catch((err)=> {
        res.send('/error' + err)
    })
})

function sesTest(emailTo, emailFrom, message, name, phone){
    const params = {
        Destination: {
            ToAddresses: [emailTo]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Name: " + name + "\n" + "Message: " + message + "\n" + "Email: " + emailFrom + "\n" + "Phone: " + phone
                }
            },
            Subject: {
                Data: "Name: " + emailFrom
            }
        },
        Source: "rinchhenlama17@gmail.com"
    };
return ses.sendEmail(params).promise();
} 

export default router;