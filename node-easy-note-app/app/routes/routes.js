module.exports = (app) => {
    const notes = require('../controllers/controller.js');

    // Create a Note
    app.post('/notes', notes.create);

    // Update a Note
    app.put('/notes/:noteId', notes.update);

    // Delete a Note
    app.delete('/notes/:noteId', notes.delete);
}