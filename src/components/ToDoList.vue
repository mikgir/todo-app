<template>
  <ul class="todo__list">
    <to-do-item v-for="(todo, i) of todos"
                v-bind:key="todo.id"
                v-bind:index="i"
                v-bind:todo="todo"
                @delete-todo="removeTodo"
                @on-comlete="setCompleted"

    />
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: {
    ToDoItem
  },
  props: {
    todos: []
  },
  methods: {
    removeTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    setCompleted (todo) {
      this.$emit('on-completed', todo)
    }
  }
}
</script>

<style scoped>
.todo__list {
  width: 60%;
  margin: 30px auto;

}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>