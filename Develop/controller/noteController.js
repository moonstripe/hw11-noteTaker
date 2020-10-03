const Note = require('../model/note');
const db = require('../db/db.json');
const fs = require('fs');
const url = require('url');

module.exports = {
    getNotes: async (_req, res) => {
        await fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(JSON.parse(data));
        });
    },
    postNotes: async (req, res) => {
        const userInput = req.body;
        let existingNotes = [];
        const note =

            await res.json(fs.readFile('./db/db.json', 'utf-8', (err, data) => {
                if (err) throw err;
                existingNotes = JSON.parse(data);
                //
                // console.log(existingNotes);

                userInput.id = parseInt(existingNotes.length + 1);

                existingNotes.push(userInput);

                console.log(existingNotes)


                fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err) => {
                    if (err) throw (err);
                });
            }));
        //
        // await res.json(fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        //     res.send(JSON.parse(data));
        // }));


        // await fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err) => {
        //         if (err) throw (err);
        //     });

    },

    deletePostById: async (req, res) => {
        const id = res.req.params['id'];
        let existingNotes = [];

        console.log(id);

        await fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            existingNotes = JSON.parse(data);
            const file = JSON.parse(data);


            const matches = file.filter(note => note.id !== parseInt(id));

            fs.writeFile('./db/db.json', JSON.stringify(matches), (err) => {
                if (err) throw (err);
            });

            // for (let i = 0; i < file.length; i++) {
            //     console.log(file[i].id);
            // }

        });
    }

};
