import express from 'express';

import {
    test,
    getUser,
    updateUser,
    deleteUser,
}from'../controllers/user.controllers.js';

const router = express.Router();

router.get('/', (reg,res,next) => {
    console.log('[DEBUG] Masuk ke tute GET /api/v1/users');
    next();
}, getUsers);

router.get('/:id', (reg,res,next) => {
    console.log('[DEBUG] Masuk ke tute GET /api/v1/users/:id');
    next();
}, getUsers);

router.get('/', test);
router.get('/:id',getUser);

export default router;