module.exports={
  chainWebpack:config=>{
    //删除带有prefetch属性的link，不要异步下载占时不需要的页面组件文件
    config.plugins.delete("prefetch")
  }
}