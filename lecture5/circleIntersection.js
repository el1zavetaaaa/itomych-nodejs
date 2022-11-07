function areaOfIntersection(circle1, circle2) {
    const x1 = circle1['x'];
    const y1 = circle1['y'];
    const r1 = circle1['r'];

    const x2 = circle2['x'];
    const y2 = circle2['y'];
    const r2 = circle2['r'];

    const rr0 = r2 * r2;
    const rr1 = r1 * r1;
    const d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

    // circles do not overlap
    if (d > r1 + r2) {
        return 0;
    }

    // circle1 is completely inside circle2
    else if (d <= Math.abs(r2 - r1) && r2 >= r1) {
        // return area of circle1
        return (Math.PI * rr1).toFixed(1);
    }

    // circle2 is completely inside circle1
    else if (d <= Math.abs(r2 - r1) && r2 < r1) {
        // return area of circle0
        return (Math.PI * rr0).toFixed(1);
    }

    // circles partially overlap
    else {
        const phi = (Math.acos((rr0 + (d * d) - rr1) / (2 * r2 * d))) * 2;
        const theta = (Math.acos((rr1 + (d * d) - rr0) / (2 * r1 * d))) * 2;
        const area1 = 0.5 * theta * rr1 - 0.5 * rr1 * Math.sin(theta);
        const area2 = 0.5 * phi * rr0 - 0.5 * rr0 * Math.sin(phi);

        // return area of intersection
        return (area1 + area2).toFixed(1);
    }
}

circle1 = {
    x: 2,
    y: 5,
    r: 5
}

circle2 = {
    x: 8,
    y: 10,
    r: 4
}

console.log(areaOfIntersection(circle1, circle2))