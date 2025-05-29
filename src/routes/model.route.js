import { modelController } from '../controllers/model.controller.js';
import express from 'express';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/', modelController.getListByUser);
router.get('/:id', modelController.getOne);
router.post('/', upload.single('file'), modelController.create);
router.patch('/:id', modelController.update);
router.delete('/:id', modelController.delete);
export default router;
