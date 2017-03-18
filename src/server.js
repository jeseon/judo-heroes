import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirectLocation, renderProps) => {
    let markup;

    // in case of error display the error message
    if (err) {
      return res.status(500).send(err.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      markup = renderToString(<RouterContext {...renderProps}/>);
    } else {
      markup = renderToString(<NotFoundPage/>);
      res.status(404);
    }

    // render the index template with the embedded React markup
    return res.render('index', { markup });
  });
});

// start the server
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`);
});