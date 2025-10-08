import express from 'express';
import { formSubmit } from '../controllers/UserController.js';
const router = express.Router();


router.post('/form-sumit', formSubmit);


export default router;