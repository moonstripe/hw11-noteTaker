const noteController = require('../../../controller/noteController');
const app = require('../../../server');
const router = require('express')
    .Router();

// /api/users prepended to every Route

// route to get/post noteRoutes
router.route('/')
    .get(noteController.getNotes)
    .post(noteController.postNotes);

router.route('/:id')
    .delete(noteController.deletePostById);



// router.route('/')
//     .get(async (_req, res) => {
//         try {
//             const users = await fetchUsers();
//             res.json(users);
//         } catch (e) {
//             res.status(400).json(e);
//         }
//     })
//     .post(async (req, res) => {
//         const userInput = req.body;
//         const result = await connection.query(insertUser, userInput);
//         res.json(result);
//     });

module.exports = router;
