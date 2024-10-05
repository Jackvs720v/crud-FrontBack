<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
    <!-- Lista de livros -->
    <BookList @edit-book="setBookToEdit" ref="bookList" />
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import BookForm from './components/BookForm.vue';

export default {
  data() {
    return {
      bookToEdit: null,
    };
  },
  components: {
    BookList,
    BookForm,
  },
  methods: {
    // Função para definir o livro que será editado
    setBookToEdit(book) {
      this.bookToEdit = book;
    },
    // Função para atualizar a lista de livros após adicionar ou editar
    fetchBooks() {
      this.$refs.bookList.fetchBooks();
      this.bookToEdit = null; // Limpa o formulário após a ação
    },
  },
};
</script>

<style>
#app {
  font-family: 'Poppins', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f3f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

button {
  background-color: #1abc9c;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 5px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #16a085;
}

form {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 350px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus {
  border-color: #1abc9c;
  outline: none;
  box-shadow: 0 0 8px rgba(26, 188, 156, 0.3);
}

h1 {
  color: #34495e;
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.book-list {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 700px;
}

.book-item {
  background-color: #ecf0f1;
  padding: 18px;
  margin: 12px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-item:hover {
  background-color: #dfe6e9;
}

.book-item button {
  background-color: #e74c3c;
  padding: 8px 12px;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-item button:hover {
  background-color: #c0392b;
}
</style>
   