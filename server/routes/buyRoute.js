import express from 'express';
import { createBuy, deleteBuy, getListBuy, updateBuy} from '../controllers/buyController.js';

const router = express.Router();

router.get('/', getListBuy);
router.post('/create', createBuy);
// router.post('/', createPost);
//router.get('/:id', getPost);
router.patch('/edit/:id', updateBuy);
router.delete('/delete/:id', deleteBuy);
// router.patch('/:id/likePost', likePost);

export default router;