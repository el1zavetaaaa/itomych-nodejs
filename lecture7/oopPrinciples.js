class Figure{
    constructor(side) {
        this.side = side;
    }

    area(){
    }

    perimeter(){
    }
}

class Square extends Figure{
    arrOfPoints;

    constructor(side) {
        super(side);
    }

    area() {
        super.area();
        return Math.pow(this.side, 2);
    }

    perimeter() {
        super.perimeter();
        return 4 * this.side;
    }

    setPoints(right, left, top, bottom){
        this.arrOfPoints = [right, left, top, bottom];
    }

    getPoints(){
        return this.arrOfPoints;
    }

}

class Rectangle extends Figure{
    arrOfPoints;
    side;
    side2;

    constructor(side, side2) {
        super(side);
        this.side = side;
        this.side2 = side2;
    }

    area() {
        super.area();
        return this.side * this.side2;
    }

    perimeter() {
        super.perimeter();
        return 2 * (this.side + this.side2);
    }

    setPoints(right, left, top, bottom){
        this.arrOfPoints = [right, left, top, bottom];
    }

    getPoints(){
        return this.arrOfPoints;
    }

}

class Rhombus extends Figure{
    height;
    constructor(side, height) {
        super(side);
        this.height = height;
    }

    area() {
        super.area();
        return this.height * this.side;
    }

    perimeter() {
        super.perimeter();
        return 4 * this.side;
    }
}

class Triangle extends Figure{
    side1;
    side2;
    side3;
    halfPerimeter;
    constructor(side1, side2, side3) {
        super(side1);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }



    perimeter() {
        super.perimeter();
        return this.side1 + this.side2 + this.side3;
    }

    area() {
        super.area();
        this.halfPerimeter = this.perimeter()/2;
        return Math.sqrt(this.halfPerimeter *
                        (this.halfPerimeter- this.side1) * (this.halfPerimeter - this.side2) * (this.halfPerimeter - this.side3))
                        .toFixed(1);
    }

}

class Trapeze extends Figure{
    side;
    side2;
    height;
    side3;
    side4;
    constructor(side, side2, side3, side4, height) {
        super(side);
        this.side = side;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
        this.height = height;
    }

    area() {
        super.area();
        return (this.side +  this.side2)/2 * this.height;
    }

    perimeter() {
        super.perimeter();
        return this.side + this.side2 + this.side3 + this.side4;
    }
}



function intersectArea(figure1, figure2){
    /*
    fig1LeftX, fig1LeftY - левая нижняя точка первого прямоугольника
    fig1RightX, fig1RightY - правая верхняя точка первого прямоугольника
    fig2LeftX, fig2LeftY - левая нижняя точка второго прямоугольника
    fig2RightX, fig2RightY - правая верхняя точка второго прямоугольника
*/
    if (figure1 instanceof Square && figure2 instanceof Square ||
        figure1 instanceof Rectangle && figure2 instanceof Rectangle) {

        const arrOfPointsFig1 = figure1.getPoints();
        const arrOfPointsFig2 = figure2.getPoints();

        const fig1RightX = arrOfPointsFig1[0]['x'];
        const fig1RightY = arrOfPointsFig1[0]['y'];

        const fig1LeftX = arrOfPointsFig1[1]['x'];
        const fig1LeftY = arrOfPointsFig1[1]['y'];

        const fig2RightX = arrOfPointsFig2[0]['x'];
        const fig2RightY = arrOfPointsFig2[0]['y'];

        const fig2LeftX = arrOfPointsFig2[1]['x'];
        const fig2LeftY = arrOfPointsFig2[1]['y'];

        let left = Math.max(fig1LeftX, fig2LeftX);
        let top = Math.min(fig1RightY, fig2RightY);
        let right = Math.min(fig1RightX, fig2RightX);
        let bottom = Math.max(fig1LeftY, fig2LeftY);

        let width = right - left;
        let height = top - bottom;

        return `Intersection area is: ${width * height}`;
    }
    else
        return 'The intersection area could be found only for Squares & Rectangles';
}


square = new Square(6);
square2 = new Square(4);
console.log("Square area: ", square.area());
console.log("Square perimeter: ", square.perimeter());

square.setPoints({x:12, y:10}, {x:6, y:8}, {x:2, y:4}, {x:3, y:9});
square2.setPoints({x:3, y:5}, {x:7, y:24}, {x:3, y:1}, {x:2, y:10});

console.log(intersectArea(square, square2));

rectangle = new Rectangle(4, 6);
rectangle2 = new Rectangle(3,10);
console.log("\nRectangle area: ", rectangle.area());
console.log("Rectangle perimeter: ", rectangle.perimeter());

rectangle.setPoints({x:3, y:5}, {x:7, y:24}, {x:3, y:1}, {x:2, y:10});
rectangle2.setPoints({x:12, y:10}, {x:6, y:8}, {x:2, y:4}, {x:3, y:9});

console.log(intersectArea(rectangle, rectangle2));

rhombus = new Rhombus(2, 10);
rhombus2 = new Rhombus(3, 15);
console.log("\nRhombus area: ", rhombus.area());
console.log("Rhombus perimeter: ", rhombus.perimeter());

triangle = new Triangle(5, 3, 7);
triangle2 = new Triangle(3, 7, 10);
console.log("\nTriangle  area: ", triangle.area());
console.log("Triangle  perimeter: ", triangle.perimeter());

console.log(intersectArea(triangle, triangle2));

trapeze = new Trapeze(3,6, 12, 20, 8);
console.log("\nTrapeze  area: ", trapeze.area());
console.log("Trapeze  perimeter: ", trapeze.perimeter());
