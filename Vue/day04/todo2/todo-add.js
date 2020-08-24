var todoAdd={
  props:["tasks"],
  template:`<div>
    <input v-model="newTask">
    <button @click="add">+</button>
  </div>`,
  data(){
    return {
      newTask:""
    }
  },
  methods:{
    add() {
      if(this.newTask!==""){
        this.tasks.push(this.newTask);
        // this.tasks[this.tasks.length]=this.mewTask="";
        //框架只能用数组函数
        this.newTask="";
      }
    }
  }
}