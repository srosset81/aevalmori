import fetch from 'node-fetch';

const listDomain = process.env.MAILCHIMP_LIST_DOMAIN;
const listIdByLocale = {
  fr: process.env.MAILCHIMP_LIST_ID_FR,
  it: process.env.MAILCHIMP_LIST_ID_IT
};
const apiKey = process.env.MAILCHIMP_API_KEY;

export default function handle(req, res) {
  const { email, name, locale } = req.body;
  const listId = listIdByLocale[locale] || listIdByLocale.fr;

  return fetch(`https://${listDomain}.api.mailchimp.com/3.0/lists/${listId}/members/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + Buffer.from(`anystring:${apiKey}`).toString('base64')
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name
        //  LNAME: "lastName"
      }
    })
  })
    .then(() => {
      res.status = 200;
      res.json({ success: true });
    })
    .catch(e => {
      console.error(e);
      res.status = 500;
      res.json({ success: false });
    });
}
