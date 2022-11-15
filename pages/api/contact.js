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
    .create('mg.nouvel-air.org', {
      from: `${name} <${email}>`,
      to: ['sebastien@nouvel-air.org', 'elisa@nouvel-air.org'],
      subject: 'Message du site nouvel-air.org',
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
