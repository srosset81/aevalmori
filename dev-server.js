const express = require('express');
const next = require('next');
const routes = require('./utils/router/routes.json');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // https://learnnextjs.com/basics/server-side-support-for-clean-urls/create-our-custom-route
    /*server.get('/blog/:slug', (req, res) => {
      const actualPage = '/article';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });*/

    server.get('/fr/blog', (req, res) => {
      res.redirect(302, '/fr/blog/l-enfant-interieur');
    });

    server.get('/:locale(it|fr)(/:page)?(/:subPage)?', (req, res) => {
      const queryParams = { locale: req.params.locale };

      if (req.params.subPage) req.params.page += '/' + req.params.subPage;

      if (req.params.page) {
        const actualPage = Object.keys(routes).find(page => routes[page][req.params.locale] === req.params.page);
        if (actualPage) {
          app.render(req, res, '/' + actualPage, queryParams);
        } else {
          return handle(req, res);
        }
      } else {
        app.render(req, res, '/', queryParams);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // We need to handle POST when posting to the API
    server.post('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
