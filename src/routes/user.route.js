import express from'express';
import { creatUserHandler , deleteUserHandler, updateUserHandler} from '../handlers/user.handler.js';

const router = express.Router();

router.post('/', creatUserHandler);
router.put('/updating/:id', updateUserHandler);
router.delete('/delete/:id',deleteUserHandler );

export default router; 