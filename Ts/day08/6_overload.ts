// 重载实现三种支付方式
// 1.定义三种重载的情况
function pay():void;
function pay(money:number):void
function pay(cardID:string,pwd:string):void

// 2.定义一个调用的函数
function pay(x?:any,y?:any){
    if(x==undefined){
        console.log('手机支付')
    }else if(y==undefined){
        console.log(`现金支付，收您${x}元`)
    }else{
        console.log(`刷卡支付，从您卡号${x}中扣款成功...`)
    }
}
// 3.调用会限制规范
pay();
pay(23)
pay('65549754','56')