import {Router} from 'express';
import {getStock , getTeclados , getMouses , getAuriculares , getMonitores , getAlmacenamientos , getHardwars , getImpresoras , getSillas, saveStock, deleteStock, getProducto} from '../controllers/productos.js'

const router = Router();

router.get('/productos' , getStock);
router.post('/producto' , saveStock);
router.delete('/producto' , deleteStock);
router.get('/producto' , getProducto);
router.get('/teclados' , getTeclados);
router.get('/mouses' , getMouses);
router.get('/auriculares' , getAuriculares);
router.get('/monitores' , getMonitores);
router.get('/almacenamientos' , getAlmacenamientos);
router.get('/hardwars' , getHardwars);
router.get('/impresoras' , getImpresoras);
router.get('/sillas' , getSillas);


export default router;