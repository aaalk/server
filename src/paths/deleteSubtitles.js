import { Subtitles } from "../subtitles.js";

export function delete_Subtitles(app) {
    app.get("/deleteSubtitles", async (req, res) => {
        const query = req.query;
        const sub = await Subtitles.destroy({
        where: {
            id: query.id,
        },
        });
        res.send( sub );
    });
}