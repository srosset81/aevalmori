const brevo = require("@getbrevo/brevo");

export default function handle(req, res) {
  const { name, email, phone, message } = req.body;
  const content =
    message.replace(/\n/, "\n\n") +
    "\n\n___________________\n\nNom : " +
    name +
    "\n\nEmail : " +
    email +
    "\n\nTéléphone : " +
    phone;

  let apiInstance = new brevo.TransactionalEmailsApi();

  let apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = "Message du site web";
  sendSmtpEmail.textContent = content;
  sendSmtpEmail.sender = {
    name: "Anna Elisa Valmori",
    email: "noreply@anna-elisa-valmori.com",
  };
  sendSmtpEmail.to = [
    { email: "aelisa.valmori@gmail.com", name: "Anna Elisa Valmori" },
  ];
  sendSmtpEmail.replyTo = { email, name };

  return apiInstance.sendTransacEmail(sendSmtpEmail).then(
    (data) => {
      res.status = 200;
      res.json({ success: true, messageId: data.body.messageId });
    },
    (error) => {
      console.error(error);
      res.status = 500;
      res.json({ success: false, error: error.message });
    }
  );
}
