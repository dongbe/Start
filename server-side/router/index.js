module.exports = function (app) {

    // The signup route
    app.use('/moncompte', require('./routes/moncompte'));
}