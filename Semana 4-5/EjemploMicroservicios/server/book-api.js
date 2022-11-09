const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.listen(port, () => console.log("Aplicación corriendo en puerto " + port));

let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];

app.use(cors());// maneja la seguridad de las solicitudes con REST que se realizar por HTTP

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// insertar libro
app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);// agregamos el objeto recopilado de la web a la data
    console.log(books);// verificar que quedo agregado 
    res.send('El libro fue añadido a la base de datos ');
});

//Consultar toda la data
app.get('/book', (req, res) => {
    res.json(books);
}
)

//Consultar data por isbn
app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;// lee el isbn desde la url

    // buscar en data por isbn 
    for (let book of books) {
        if (book.isbn == isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('El libro no se encontró');

})

//Editar un libro 
app.post('/book/:isbn', (req, res) => {

    const isbn = req.params.isbn;// lee el isbn desde la url
    const newBook = req.body;

    // quitar el libro   
    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        if (book.isbn == isbn) {
            books[i] = newBook;
        }
    }
    res.send('El libro se ha editado');

})

//Borrar libro 
app.delete('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true
        }
        return false;
    });
 res.send('Libro eliminado');

})








