import fetch from 'node-fetch';

const listDomain = 'us17';
const listId = 'eda7a7d2c1';
const apiKey = '235f612d17ed4b857a44bd0cc8937146-us17';

export default function handle(req, res) {
  const { email, name } = req.body;

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
