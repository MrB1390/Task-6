console.log("Circle")

class Circle{
     constructor(double,color){
        this.radius = double;
        this.color = color;

     }
     getRadius(){
        return this.radius
     }
     setRadius(double){
        this.radius = double;
     }
     getColor(){
        return this.color
     }
     setColor(color){
        this.color = color
     }
     toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2)
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }
}

const val = new Circle();
val.setRadius(1);
console.log(val.getRadius());
val.setColor("red")
console.log(val.getColor())
console.log(val.getArea());
console.log(val.getCircumference())
