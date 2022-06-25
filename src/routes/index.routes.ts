import { Router } from "express";
import { getAllUser, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.ctrl'

const router = Router();

router.get('/users', getAllUser);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);

export default router;