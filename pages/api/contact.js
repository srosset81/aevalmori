const sgMail = require('@sendgrid/mail');

export default function handle(req, res) {
  sgMail.setApiKey('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');

  const { name, email, phone, message } = req.body;

  return sgMail
    .send({
      to: 'aelisa.valmori@gmail.com',
      from: {
        name: 'Anna-Elisa-Valmori.com',
        email: 'ae@anna-elisa-valmori.com>'
      },
      replyTo: email,
      subject: 'Message du site web',
      text:
        message.replace(/\n/, '\n\n') +
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
      res.json({ success: false });
    });
}
