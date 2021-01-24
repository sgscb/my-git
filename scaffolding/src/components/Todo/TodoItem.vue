<template>
  <li>
    {{i+1}} - {{task}} <a href="javascript:;" @click="del">x</a>
  </li>
</template>
<script>
export default {
  props:["task","i"],
  methods:{
    del(){
      this.$emit("del",this.i);
    }
  }
}
</script>
