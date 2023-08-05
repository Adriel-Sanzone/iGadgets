import express from 'express';
import cors from 'cors';
import ProductosRoutes from './routes/productos.js';
import ValidacionesRoutes from './routes/validacion.js';

const app = express();
app.set('port' , 3000);

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/' , (req, res) =>
{
    res.send("INICIO");
})

app.use(ProductosRoutes);
app.use(ValidacionesRoutes);

export default app;

