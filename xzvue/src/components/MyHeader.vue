<template>
    <div id="nav">
      <router-link to="/">Home</router-link>我是全局的头部
      <router-link to="/about">About</router-link>
      
    </div>
</template>
<style>
#nav {
  padding: 30px;
  background-color: aqua;
  color: chocolate;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>