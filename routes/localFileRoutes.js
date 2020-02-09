const path = require("path");

module.exports = function (app) {
    //Directing routes for the styles.css and index.js files
    app.get('/assets/js/index.js', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/js/index.js'));
    });

    app.get('/assets/css/styles.css', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'))
    });
}