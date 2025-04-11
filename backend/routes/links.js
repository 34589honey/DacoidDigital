import express from 'express';
import { createLink, redirectLink, getLinks } from '../controllers/linkController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, createLink);
router.get('/', protect, getLinks);
router.get('/:code', redirectLink);
export default router;
