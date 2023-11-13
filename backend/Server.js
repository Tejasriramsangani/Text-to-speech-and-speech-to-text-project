const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const PORT = 8000;

app.post('/send-email', (req,res)=>{
    const {name,lname, email,number,gender,country, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'ajaypunyapureddy@gmail.com',
          pass: 'hmyy tdpd esdh vebb'
        }
      });

      const mailOptions = {
        from: email,
        to: 'ajaypunyapureddy@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
        firstName: ${name}
        lastName: ${lname}
        Number:${number}
        Gender:${gender}
        Country:${country}
        email: ${email}
        Message: ${message} `,
      };

      transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('DEV2 ERROR: - ',error);
            res.status(500).json({success: false, message: 'Error sending mail!!'})
        }else{
            console.log("Email Sent!!", info.response);
            res.status(200).json({success: true, message:"Email Sent successfully!!"})
        }
      })
});



app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})