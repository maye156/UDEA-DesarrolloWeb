import {Router} from 'express';
import {obtener_libro, todos_libros, crear_libro} from "../controllers/books.controllers.js";

const router = Router();

router.get('/', (req,res)=>res.send('Home Page'));
router.get('/books', todos_libros);//get muestra todos los libros 
router.get('/:isbn', obtener_libro);//get muestra el libro solicitado
router.post('/books', crear_libro); //Crear un nuevo libro
router.put('/books/:isbn', (req,res)=>res.send('libro actualizado'));
router.delete('/books/:isbn', (req,res)=>res.send('Libro borrado'));


export default router;