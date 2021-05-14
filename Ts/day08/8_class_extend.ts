class Enemy{
    x:number=0;
    y:number=0;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    fly(){
        console.log(`飞到x=${this.x},y=${this.y}位置`)
    }
}

class Plane extends Enemy{
    score:number=0;
    constructor(x:number,y:number,score:number){
        super(x,y) // 把x，y传给父，请父类型帮忙
        console.log(x,y)
        this.score=score
    }
    getScore(){
        console.log(`击落敌机得${this.score},x:${this.x},y:${this.y}`)
    }
}

var p1=new Plane(100,200,5);
p1.fly();
p1.getScore();
console.log(p1)