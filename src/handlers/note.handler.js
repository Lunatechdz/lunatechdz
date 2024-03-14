import { Note } from "../models/note.model.js";

async function createNoteHandler(req, res) {
  const { title, content, category, userId } = req.body;
  const categories = ["home", "personal", "business"];

  if (!title || !content || !category) {
    return res.json({ message: "impossible to create this note" });
  }

  if (!categories.includes(category)) {
    return res.json({ message: "note cannot create" });
  }
  const noteCreation = await Note.create({
    title,
    content,
    category,
    userId,
    creationDate: new Date(),
  });
  res.json({ message: " note created!", noteCreation });
}

async function updateNoteHandler(req, res) {
  const id = req.params.id;
  const { title, content, category, status } = req.body;

  if (!id || !title || !content || status == undefined || !category) {
    return res.sendStatus(400);
  }
  const editNote = await Note.findByIdAndUpdate(id, {
    title,
    content,
    status,
    category,
  });
  return res.json({ message: "note was updated", editNote });
}

async function getNoteHandler(req, res) {
  const { id } = req.params;

  const note = await Note.findOne({ _id: id });
  return res.json(note);
}

async function deleteNoteHandler(req, res) {
  if (!req.body.title)
    try {
      const trashNote = await Note.findByIdAndDelete(req.body.id);
      res.json({ message: "note deleted" });
    } catch (error) {
      console.log("error");
    }
}
export {
  createNoteHandler,
  getNoteHandler,
  updateNoteHandler,
  deleteNoteHandler,
};
