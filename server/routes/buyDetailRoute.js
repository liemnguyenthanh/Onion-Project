import express from 'express';
import { createDriver, getListDriver } from '../controllers/buyDetailController.js';

const router = express.Router();

router.get('/', getListDriver);
router.post('/create', createDriver);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/edit/:id', updateBuy);
// router.delete('/delete/:id', deleteBuy);
// router.patch('/:id/likePost', likePost);

export default router;