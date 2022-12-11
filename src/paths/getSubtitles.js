import { Subtitles } from "../subtitles.js";

export function get_Subtitles(app) {
    app.get("/getSubtitles", async (req, res) => {
        const sub = await Subtitles.findAll();
        res.send(sub);
    });
 }