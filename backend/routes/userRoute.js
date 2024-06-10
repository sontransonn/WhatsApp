import express from 'express';

import addUser from '../controllers/user/addUser.js';
import getUsers from '../controllers/user/getUsers.js';

const router = express.Router();

router.post('/addUser', addUser);
router.get('/allUsers', getUsers);

export default router;