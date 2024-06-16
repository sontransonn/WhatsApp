import express from 'express';

import newMessage from '../controllers/message/newMessage.js';
import getMessage from '../controllers/message/getMessage.js';
import { deleteAllMessages } from '../controllers/message/deleteMessage.js';

const router = express.Router();

router.post('/addMessage', newMessage);
router.get('/:id', getMessage);
router.delete('/:id', deleteAllMessages)

export default router;