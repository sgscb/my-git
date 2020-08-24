var todoItem={
  props:["t","i","tasks"],
  template:`<li>
    {{i+1}} - {{t}}<button @click="del">x</button>
  </li>`,
  methods:{
    del(){
      if(confirm(`是否删除任务${this.t}吗？`)){
        this.tasks.splice(this.i,1)
      }
    }
  }
}