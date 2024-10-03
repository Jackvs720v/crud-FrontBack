const mongoose = require('mongoose') //Metodo mongoose, método responsavel por 

//Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type:Number},
});

//Exportando o modelo
module.exports = mongoose.model('Book',BookSchema); 
