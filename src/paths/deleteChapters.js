import {Chapters} from "../chapters.js";

export function delete_Chapters(app) {
    app.get("/deleteChapters", async (req, res) => {
        const query = req.query;
        const chapters = await Chapters.destroy({
        where: {
            id: query.id,
        },
        });
        res.send( chapters );
    });
}
    