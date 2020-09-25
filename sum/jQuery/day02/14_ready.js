//整个页面内容都加载完成后自动执行以下操作
window.onload=function(){
  //为两个按钮绑定单击事件
  $("#btn1").click(function(){
    console.log(`btn1 疼!`)
  });
  $("#btn2").click(function(){
    console.log(`btn2 疼!`)
  })
}