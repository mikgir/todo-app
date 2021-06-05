<template>
  <div>
    <h2>ToDo Application</h2>
    <router-link to="/" class="home__link">Home</router-link>
    <hr>
    <add-to-do @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <to-do-list v-if="filteredTodos.length"
                v-bind:todos="filteredTodos"
                @delete-todo="removeTodo"
    />
    <p class="todos__text" v-else>No todos, <br> add new todo!</p>
  </div>
</template>

<script>
import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";

export default {
  name: "Todos",
  components: {
    AddToDo,
    ToDoList
  },
  data: () => ({
    API_URL: 'http://localhost:3000',
    todos: [],
    filter: 'all'
  }),
  mounted() {
    this.getTodos();
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods: {
    makeGetRequest (url) {
      return fetch(url)
      .then((data) => data.json())
    },
    makePostRequest(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((data) => data.json())

    },
    getTodos () {
      this.makeGetRequest(this.API_URL+'/todoData')
      .then((data) => {
        this.todos = data;
      })
    },
    removeTodo (todo) {
      this.makePostRequest(this.API_URL+'/removeTodo', todo)
      .then(() => this.getTodos())

    },
    addTodo (todo) {
      this.makePostRequest(this.API_URL+'/addTodo', todo)
      .then(() => this.getTodos())
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
}
.home__link {
  text-decoration: none;
  color: #2c3e50;
  font-size: 2rem;
}
.home__link:hover {
  color: blue;
  border-bottom: 1px solid blue;
}
select {
  width: 300px;
  height: 50px;
  font-size: 1.5rem;
  padding: 0 25px;
}
.todos__text {
  font-size: 2rem;
  font-weight: bold;
}
</style>