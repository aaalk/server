import { Video } from "../video.js";

export function get_Video(app) {
    app.get("/getVideo", async (req, res) => {
        const videos = await Video.findAll();
        res.send(videos);
    });
 }