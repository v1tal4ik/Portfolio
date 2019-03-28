const express = require('express');
const path = require('path');
const router = express.Router();
const controllers = require('../controllers');


router.post('/send-message',(req, res, next)=>{
    const {name,email,phone,message} = req.body;
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
        from: `"${name}"`,
        to: config.mail.smtp.auth.user,
        subject:config.mail.subject,
        text:`Name: ${name},
Email: <${email}>,
Phone: ${phone},
${message}`
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            res.status(201).json('На жаль сталася помилка:(');
        }else{
            res.status(201).json("Ваше повідомлення було успішно відправлено");
        }
    });
});

module.exports = router;