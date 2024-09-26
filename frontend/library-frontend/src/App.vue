<template>
  <div id="app">
<!--Formulário para adicionar ou editar um livro-->
<BookForm :bookToEdit="bookToEdit" @book-addead="fetchBooks" @book-updated="fetchBooks" />
<!--Lista de livros-->
<BookList @edit-book="setbooktoedit" ref="bookList" />
  </div>
</template>

<script>
import BookForm from './components/BookForm.vue'
import BookList from './components/BookList.vue'

export default {
  data() {
    return {
      bookToEdit: null,
    }
  },
  components:{
    BookList,
    BookForm,
  },
  methods: {
    //Função para definir o livro que será editado
    setBookEdit(book){
      this.bookToEdit = book
    },
    //Função para atualizar a lista de livros após adicionar ou editar
    fetchBooks(){
      this.$refs.bookList.fetchBooks();
      this.bookToEdit = null; //Limpa o formulário após a ação
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
