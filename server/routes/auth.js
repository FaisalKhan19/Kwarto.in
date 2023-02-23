import express from 'express'

const router = express.Router();

import {  register } from '../controllers/auth';

// Controllers
router.post('/register', register);
module.exports = router