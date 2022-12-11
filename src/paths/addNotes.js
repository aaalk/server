import { Notes } from "../notes.js";

export function add_Note(app) {
    app.get("/addNote", async (req, res) => {
    const query = req.query;
    const note = await Notes.create({
      video_id: query.video_id,
      color_id: query.color_id,
      time: query.time,
      text: query.text,
    });
    res.send( note );
  });
}