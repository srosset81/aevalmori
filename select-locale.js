const express = require('express');
const locale = require('locale');

const port = process.env.PORT || 3000;
const supportedLocales = ['fr', 'it'];
const defaultLocale = 'fr';

const app = express();

app.use(locale(supportedLocales, defaultLocale));

app.get('/', function(req, res) {
  res.redirect('/' + req.locale);
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready On Server http://localhost:${port}`);
});
