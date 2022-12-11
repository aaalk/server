import {Chapters} from "../chapters.js";

export function add_Chapters(app) {
app.get("/addChapters", async (req, res) => {
    const query = req.query;
    const chapters = await Chapters.create({
      title: query.title,
    });
    res.send(chapters);
  });
}