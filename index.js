import express from "express";
import { get_Chapters } from "./src/paths/getChapters.js";
import { delete_Chapters } from "./src/paths/deleteChapters.js";
import { add_Chapters } from "./src/paths/addChapters.js";
import { add_Video } from "./src/paths/addVideo.js";
import { get_Video } from "./src/paths/getVideo.js";
import { delete_Video } from "./src/paths/deleteVideo.js";
import { add_Subtitles } from "./src/paths/addSubtitles.js";
import { delete_Subtitles } from "./src/paths/deleteSubtitles.js";
import { get_Subtitles } from "./src/paths/getSubtitles.js";
import { delete_Note } from "./src/paths/deleteNotes.js";
import { add_Note } from "./src/paths/addNotes.js";
import { get_Notes } from "../func/get_notes/src/getNotes.js";

const app = express();
const port = 5000;

get_Chapters(app);
delete_Chapters(app);
add_Chapters(app);
add_Video(app);
get_Video(app);
delete_Video(app);
add_Subtitles(app);
delete_Subtitles(app);
get_Subtitles(app);
delete_Note(app);
add_Note(app);
get_Notes(app);

app.listen(port);