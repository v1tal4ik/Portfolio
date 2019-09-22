const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();
require('dotenv').config();


router.post('/send-message', (req, res) => {
  const {
    name, email, phone, message,
  } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: `"${name}"`,
    to: process.env.MAIL,
    subject: 'Повідомлення з сайту v1tal4ik',
    text: `Name: ${name},
Email: <${email}>,
Phone: ${phone},
${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(201).json('На жаль сталася помилка:( Можливо вимкніть VPN!');
    } else {
      res.status(201).json('Ваше повідомлення було успішно відправлено');
    }
  });
});

module.exports = router;
