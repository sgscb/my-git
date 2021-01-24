<template>
  <div>
    <input type="text" v-model="task"><button @click="add">添加</button>
  </div>
</template>
<script>
export default {
  props:["tasks"],
  data(){
    return {
      task:""
    }
  },
  methods:{
    add(){
      this.tasks.push(this.task);
      this.task="";
    }
  }
}
</script>

