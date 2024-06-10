import express from 'express';

import newConversation from '../controllers/conversation/newConversation.js';
import getConversation from '../controllers/conversation/getConversation.js';

const router = express.Router();

router.post('/addConversation', newConversation);
router.post('/getConversation', getConversation);

export default router;