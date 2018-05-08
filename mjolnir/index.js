const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser');
const rest = require('./rest');
const usersRouter = require('./rest/users');
const actionsRouter = require('./rest/actions');
const authRouter = require('./rest/auth');


module.exports = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/actions', actionsRouter());
    app.use('/actionxuser', rest());
    app.use('/applications', rest());
    app.use('/auth', authRouter());
    app.use('/users', usersRouter());
    app.use('/userxapplication', rest());

    app.use((err, req, res, next) => {
        res.status(500).send({ 
          error : true,
          message : err.message,
          code : err.code
      })
    })    

    
    return app
}