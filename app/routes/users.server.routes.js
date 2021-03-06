const users = require('../controllers/users.server.controller.js');
const passport = require('passport');

module.exports = (function(app) {

    app.route('/signup')
        .post(users.signup);

    app.route('/signin')
        .post(passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/signin',
                failureFlash: true
            }));

    app.get('/oauth/facebook', passport.authenticate('facebook', {
            failureRedirect: '/'
        }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
            failureRedirect: '/',
            successRedirect: '/'
        }));

    app.get('/oauth/twitter', passport.authenticate('twitter', {
            failureRedirect: '/'
        }));

    app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
            failureRedirect: '/',
            successRedirect: '/'
        }));

    app.route('/logout')
        .get(users.logout);

});

