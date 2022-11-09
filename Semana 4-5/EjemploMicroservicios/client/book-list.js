
const setEditModal = (isbn) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();

    const book = JSON.parse(xhttp.responseText);

    const {
        title,
        author,
        publish_date,
        publisher,
        numOfPages
    } = book;

    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('publish_date').value = publish_date;
    document.getElementById('numOfPages').value = numOfPages;

    //Ubicar los datos del libro en un formulario/url
    document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
}

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:3000/book`, false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);
    for (let book of books) {
        const x = `
        <div class="col-4">
        <div class = "card">
           <div class= "card-body">
           <h5>${book.title}</h5>
           <h6>${book.isbn}</h6>
           <div>Autor:</div>
           <div>Editor:</div>
           <div>Número de Páginas:</div>
           <button types="button" class="btn btn-danger" 
            onClick="deleteBook(${book.isbn})">Borrar</button>
           
            <button types="button" class="btn btn-primary" data-toggle="modal"
           data-target="#editBookModal" onClick="setEditModal(${book.isbn})">Editar</button>
       </div>
        </div>
    </div>
        `
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;

    }
}

const deleteBook = (isbn) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();
    
    location.reload();
}

loadBooks();

