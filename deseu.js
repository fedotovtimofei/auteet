// Example scenario: Checking if a line crosses a pole
function doesLineCrossPole(latitude1, latitude2) {
    if (latitude1 * latitude2 < 0) {
        console.log("Line crosses a pole.");
    } else {
        console.log("Line does not cross a pole.");
    }
}

doesLineCrossPole(80, -80); // Output: Line crosses a pole.
