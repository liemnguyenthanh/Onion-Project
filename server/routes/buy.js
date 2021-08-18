import express from 'express';
import { createBuy, getListBuy} from '../controllers/buy.js';

const router = express.Router();

router.get('/', getListBuy);
router.post('/create', createBuy);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;