const fs = require("fs");

module.exports = function (app) {

    //API routes
    //Returns list of notes
    app.get('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        return res.json(notes);
    });

    //Post a new note to the list of notes
    app.post('/api/notes', (req, res) => {

        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        notes.push(req.body);

        for (let i = 0; i < notes.length; i++)
            notes[i].id = i + 1;

        fs.writeFileSync("./db/db.json", JSON.stringify(notes));

        return res.json(req.body);
    });

    //Delete a note from the list of notes
    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        for (let i = 0; i < notes.length; i++) {

            if (notes[i].id === parseInt(id)) {
                notes.splice(i, 1);

                for (let i = 0; i < notes.length; i++)
                    notes[i].id = i + 1;

                fs.writeFileSync("./db/db.json", JSON.stringify(notes));
                return res.json(true);
            }
        }

        return res.json(false);
    });
}

