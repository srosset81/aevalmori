const sgMail = require('@sendgrid/mail');

export default function handle(req, res) {
  sgMail.setApiKey('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');

  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };

  sgMail.send(msg);

  res.end('Message sent !')
}
