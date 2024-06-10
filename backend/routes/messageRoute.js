import express from 'express';

import newMessage from '../controllers/message/newMessage.js';
import getMessage from '../controllers/message/getMessage.js';

const router = express.Router();

router.post('/addMessage', newMessage);
router.get('/:id', getMessage);

export default router;