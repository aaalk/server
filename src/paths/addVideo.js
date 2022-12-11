import { Video } from "../video.js";

export function add_Video(app) {
    app.get("/addVideo", async (req, res) => {
    const query = req.query;
    const chapters = await Video.create({
      chapter_id: query.chapter_id,
      date: new Date(),
      url: query.url,
      title: query.title,
    });
    res.send(chapters);
  });
}