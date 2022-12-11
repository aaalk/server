import { Subtitles } from "../subtitles.js";

export function add_Subtitles(app) {
    app.get("/addSubtitles", async (req, res) => {
    const query = req.query;
    const sub = await Subtitles.create({
      video_id: query.video_id,
      time: query.time,
      text: query.text,
    });
    res.send(sub);
  });
}