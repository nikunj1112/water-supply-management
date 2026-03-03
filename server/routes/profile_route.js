import express from 'express';
import {
  addUser,
  updateUser,
  getAllUser,
  getUserById,
  deleteUser,
  updateUserRole   // 👈 ADD THIS
} from '../controllers/profile_controller.js';

import { protect } from '../middleware/auth_middleware.js';
import { authorize } from '../middleware/role_middleware.js';

const router = express.Router();

// 🔐 Admin only routes

router.post(
  '/add-user',
  protect,
  authorize("admin"),
  addUser
);

router.put(
  '/update-user',
  protect,
  authorize("admin"),
  updateUser
);

router.put(
  '/update-role',
  protect,
  authorize("admin"),
  updateUserRole
);

router.get(
  '/get-all-users',
  protect,
  authorize("admin"),
  getAllUser
);

router.get(
  '/get-user/:email',
  protect,
  authorize("admin"),
  getUserById
);

router.delete(
  '/delete-user/:email',
  protect,
  authorize("admin"),
  deleteUser
);

export default router;