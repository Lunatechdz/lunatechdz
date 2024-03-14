import express from 'express'
import { createNoteHandler ,getNoteHandler, updateNoteHandler , deleteNoteHandler} from '../handlers/note.handler.js';

const router = express.Router();

router.post('/' , createNoteHandler);
router.put('/:id' , updateNoteHandler);
router.delete('/:id', deleteNoteHandler);
router.get('/:id',getNoteHandler )

export default router;