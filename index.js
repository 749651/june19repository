function createCircle(radius){
return{
    radius,
    draw:function(){
        console.log('draw');
    }
};
}
const circle=createCircle(1);

function Circle(radius){
    console.log('this',this);
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
const another =new Circle(1);

const Circle1= new Function('radius',`
this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
    `);
   
    Circle.call
    const orange = new Circle(1);