import express from 'express';
import * as usercontroller from './../controllers/usercontroller.js';

export const router = express.Router();

router.post('/setuser',usercontroller.saveUser);
router.get('/allusers',usercontroller.allUsers);
router.post('/register',usercontroller.register);
router.post('/login',usercontroller.login);
router.get('/logout',usercontroller.logout);