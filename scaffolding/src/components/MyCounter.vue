<template>
  <span class="my-counter">
    <b @click="change(-1)">-</b><span>{{n}}</span><b @click="change(+1)">+</b>
  </span>
</template>
<script>
export default {
  data(){
    return {
      n:0
    }
  },
  methods:{
    change(i){
      this.n+=i;
      this.n<0&&(this.n=0)
    }
  }
}
</script>
<style scoped>
.my-counter>b{
  padding:5px 10px;
  cursor:pointer;
  border:1px solid #555;
}
.my-counter>span{
  display:inline-block;
  width:35px;
}
</style>

