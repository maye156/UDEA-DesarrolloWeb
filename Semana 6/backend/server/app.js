import express from 'express';
import  rutas  from './routes/book_routes.js';

const app = express();
app.use(express.json());
app.use(rutas);

export default app;