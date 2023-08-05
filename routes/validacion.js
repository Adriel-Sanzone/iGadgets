import {Router} from 'express';
import {getUsers, UpdateAccessKey , getUser} from '../controllers/validacion.js'

const router = Router();

router.get('/usuarios' , getUsers);
router.get('/usuario' , getUser);
router.post("/validacion" , UpdateAccessKey);


export default router;