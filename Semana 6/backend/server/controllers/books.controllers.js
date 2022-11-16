import User from "../models/book.js";

export function get_data(isbn) {
    var query = User.find({ isbn: isbn }).exec();
    return query;
}

export const obtener_libro = (req, res) => {
    let response = get_data(req.params.isbn)
    response.then(function (isbn) {
        res.json(isbn)
    })
}

export const todos_libros = async (req, res) => {
    try{
        const libros = await User.find();
        res.send(libros);
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const crear_libro =  (req, res) =>{
    const {isbn, title, author, publish_date, publisher, numOfPages} = req.body;
    const nvo_libro = new User({isbn:isbn, title:title, author:author, publish_date:publish_date, publisher:publisher, numOfPages:numOfPages})
    console.log(nvo_libro);
    nvo_libro.save();
}