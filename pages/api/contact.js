const formData = require('form-data');
const Mailgun = require('mailgun.js');

export default function handle(req, res) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.eu.mailgun.net'
  });

  const { name, email, phone, message } = req.body;

  return mg
    .messages
    .create('mg.anna-elisa-valmori.com', {
      from: `${name} <${email}>`,
      to: ['aelisa.valmori@gmail.com'],
      subject: 'Message du site web',
      text: message.replace(/\n/, '\n\n') +
        '\n\n___________________\n\nNom : ' +
        name +
        '\n\nEmail : ' +
        email +
        '\n\nTéléphone : ' +
        phone
    })
    .then(() => {
      res.status = 200;
      res.json({ success: true });
    })
    .catch(error => {
      console.error(error.toString());
      res.status = 500;
      res.json({ success: false, error: error.toString() });
    });
}
