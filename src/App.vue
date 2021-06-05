<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <a href="#">GM-develop</a>
        <div>
          <h2>ToDo Application</h2>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'App',
}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-image: url("./assets/img/bkg-blu.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  width: 100%;
  height: 80px;
  padding: 20px 0;
  background: none;
  border-bottom: 3px solid #2c3e50;

}
.wrapper {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper a {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  color: #2c3e50;
}

</style>
