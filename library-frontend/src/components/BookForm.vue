<template>
<form @submit.prevent="handleSubmit">
    <input v-model="book.title" placeholder="Título" required/>
    <input v-model="book.author" placeholder="Autor" required/>
    <input v-model="book.year" placeholder="Ano" required/>

<button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
</form>
</template>

<script>
import api from '../services/api'; //Importa o serviço API para fazer requisições

export default{
    props: ['bookToEdit'],
    data() {
    return {
        book: this.bookToEdit || { title: '', author: '', year: null } 
    };
},
watch: {
    bookToEdit: {
      immediate: true,
      handler(newVal) {
        this.book = newVal || { title: '', author: '', year: null }; // Atualiza os dados quando a prop mudar
      },
    },
  },
    methods: {
        //Função para enviar o formulário
        handleSubmit(){
            if (this.book._id) {
            api.updateBook(this.book._id, this.book).then(()=>{
                this.$emit('book-updated'); //Emite um evento quando o livro é atualizado
            });    
            } else {
            api.addBook(this.book).then(()=>{
              this.$emit('book-added'); //Emite um evento quando um novo livro é add
            });
            }
        },
    },
};
</script>