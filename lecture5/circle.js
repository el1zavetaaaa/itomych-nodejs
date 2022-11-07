circle = {
    x: 2,
    y: 5,
    r: 5
}

const PI = 3.14;

function circleArea(radius) {
    console.log("The area of he circle is pi * r^2: ", PI * Math.pow(radius, 2));
}

circleArea(circle['r'])

function circlePerimeter(radius) {
    console.log("The perimeter of he circle is 2 * pi * r: ", (2 * PI * radius).toFixed(1));
}

circlePerimeter(circle['r'])

randomDot = {
    a: 6,
    b: 8
}

function isDotBelongToTheCircle(dot, circle) {
    const centerCircle1 = circle['x'];

    const centerCircle2 = circle['y'];

    const radius = circle['r'];

    const dotCoordinate1 = dot['a'];

    const dotCoordinate2 = dot['b'];

    let circleEquation = Math.pow((dotCoordinate1 - centerCircle1), 2) + Math.pow((dotCoordinate2 - centerCircle2), 2);

    return circleEquation === Math.pow(radius, 2);

}

if (isDotBelongToTheCircle(randomDot, circle))
    console.log("The dot is belong to the circle.")
else
    console.log("The dot is NOT belong to the circle.")