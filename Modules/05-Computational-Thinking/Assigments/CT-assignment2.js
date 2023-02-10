//Perimeter of a square: 4 * side.
//Perimeter of a circle: 6.28 * radius.
function perimeter(shape, num) {
    const perimeter = (shape === "s") * 4 * num + (shape === "c") * 6.28 * num;
    
    return perimeter;
  }

console.log(perimeter("c",5))