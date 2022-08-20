const db = require('../database/models');
const { Op } = db.sequelize;

//const User = require('../models/User');
function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.userEmail;
    const userFromCookie = db.users.findAll({
        where: {
            email: req.cookies.userEmail
        }
    })

    if (userFromCookie){
        req.session.userLogged = userFromCookie;
        //console.log(req.cookies.userEmail);
    }

    if (req.session && req.session.userLogged) {
        //res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;  /*paso lo que tengo en session a locals para después usarlo en la vista de nabvaruser*/
    }

    next();
}

module.exports = userLoggedMiddleware;