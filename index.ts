// HW:
// Compile Time Language
// Interepreted Language
// Just in time (JIT) language


// Define an interface for a Rectangle
interface Rectangle {
    length: number;
    width: number;
}

// Function to calculate the area of the rectangle
function calculateArea(rectangle: Rectangle): number {
    return rectangle.length * rectangle.width;
}

// Function to calculate the perimeter of the rectangle
function calculatePerimeter(rectangle: Rectangle): number {
    return 2 * (rectangle.length + rectangle.width);
}

// Create a rectangle object
const myRectangle: Rectangle = {
    length: 10,
    width: 5,
};

// Calculate and display the area and perimeter
console.log("Rectangle Dimensions:");
console.log(`Length: ${myRectangle.length}, Width: ${myRectangle.width}`);
console.log(`Area: ${calculateArea(myRectangle)}`);
console.log(`Perimeter: ${calculatePerimeter(myRectangle)}`);
