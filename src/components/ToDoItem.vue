<template>
  <li>
    <span v-bind:class="{done: todo.completed === true}">
    <input type="checkbox"
           v-bind:checked="todo.completed === true"
           v-on:change="onCompleted">
    <strong>{{ index + 1 }}</strong>
    {{todo.title}}
    </span>
    <button class="rm"
            @click="$emit('delete-todo', todo)"

    >&times;</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    onCompleted (todo) {
      this.todo.completed = !this.todo.completed
      this.$emit('on-complete', todo)
    }
  }
}
</script>

<style scoped>
li {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  margin: 20px auto;
  padding: 1rem 2rem;
  border: 1px solid #2c3e50;
  border-radius: 5px;
}
input {
  margin-right: 1rem;
  width: 30px;
  height: 30px;
}
strong {
  font-size: 3rem;
  margin: auto 1rem;
}
.rm {
  margin: auto 0;
  width: 35px;
  height: 35px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
}
.done {
  text-decoration: line-through;
}
</style>