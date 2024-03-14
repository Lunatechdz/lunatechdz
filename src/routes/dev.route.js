import express from "express";
import {getServerStatuseHandler} from '../handlers/dev.handler.js';

const router = express.Router();

router.get('/status', getServerStatuseHandler);

export default router;