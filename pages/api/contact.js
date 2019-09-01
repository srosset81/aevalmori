const sgMail = require('@sendgrid/mail');

export default function handle(req, res) {
  sgMail.setApiKey('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');

  const { name, email, phone, message } = req.body;

  sgMail
    .send({
      to: 'srosset81@gmail.com',
      from: {
        name: 'Anna-Elisa-Valmori.com',
        email: 'ae@anna-elisa-valmori.com>'
      },
      replyTo: email,
      subject: 'Message du site web',
      text:
        message.replace(/\n/, '\n\n') +
        '\n___________________\n\nNom : ' +
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
