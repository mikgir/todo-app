<template>
  <div class="home__content">
    <h2>Home page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet aut, eligendi eum fugiat, impedit inventore itaque iure iusto molestiae quae, quos rem vero voluptatibus! Architecto aut dolore optio. Eum ex laborum magni, nobis officiis quaerat vel! Aut fugiat incidunt ut. Ab culpa dignissimos, non quod sapiente soluta tenetur?</p>
    <router-link  class="home__link" to="/todos">Todos</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home__content {
  width: 70%;
  height: 100vh;
  margin: 5rem auto;
}
h2 {
  font-size: 3rem;
  font-weight: bold;
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
</style>