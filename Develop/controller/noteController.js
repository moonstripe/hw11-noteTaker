const Note = require('../model/note');
const db = require('../db/db.json');
const fs = require('fs');

module.exports = {
    getNotes: async (_req, res) => {
        // res.send(process.cwd());
        await fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(JSON.parse(data));
        });
    }

};
