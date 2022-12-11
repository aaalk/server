import { Chapters } from "../chapters.js";

export function get_Chapters(app) {
    app.get("/", async (req, res) => {
        const chapters = await Chapters.findAll();
        res.send(chapters);
    });
 }