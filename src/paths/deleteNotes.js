import { Notes } from "../notes.js";

export function delete_Note(app) {
    app.get("/deleteNote", async (req, res) => {
        const query = req.query;
        const note = await Notes.destroy({
        where: {
            id: query.id,
        },
        });
        res.send( note );
    });
}