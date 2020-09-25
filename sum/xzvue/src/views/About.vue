<template>
  <div class="about">
    <carousel></carousel>
    <myheader></myheader>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Myheader from "../components/MyHeader"
import carousel from "./carousel"
export default {
  components:{
    Myheader,carousel
  }
}
</script>