import express from 'express';
import proxy from 'express-http-proxy';
import config from '../vue.config';

export default (app) => {
  app.use(express.json());
  
  app.get('/api/foo', (req, res) => {
    res.json({msg: 'foo'});
  });
  
  // Fallback to Vue app on dev env
  if (process.env.NODE_ENV != 'production') {
    app.use(proxy(`http://${config.devServer.host}:${config.devServer.port}/`))
  }

}
