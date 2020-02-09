const fs = require("fs");

module.exports = function (app) {

    //API routes
    app.get('/api/notes', (req, res) => {
        const notesJSON = fs.readFileSync("./db/db.json", "utf8");

        return res.json(JSON.parse(notesJSON));
    });

    app.post('/api/notes', (req, res) => {

        const notesJSON = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        notesJSON.push(req.body);

        for (let i = 0; i < notesJSON.length; i++)
            notesJSON[i].id = i + 1;

        fs.writeFileSync("./db/db.json", JSON.stringify(notesJSON));

        return res.json(req.body);
    });

    // app.delete('/api/notes/:id', (req, res) => {

    // });
}

