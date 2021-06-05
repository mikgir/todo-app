<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Add new todo">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
form {
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  width: 800px;
  height: 60px;
  border: 1px solid #2c3e50;
  outline: none;
  padding-left: 2rem;
  background: none;
  font-size: 2rem;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
input::placeholder {
  color: #afafaf;
  font-size: 1.5rem;
}
input:focus {
  background: white;
  color: black;
}
button {
  cursor: pointer;
  width: 150px;
  height: 66px;
  background-color: #2c3e50;
  color: white;
  font-size: 1.5rem;
  border: 1px solid #2c3e50;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
button:hover {
  background-color: blue;
}
button:active {
  box-shadow: inset 1px 2px 1px 2px;
}
</style>