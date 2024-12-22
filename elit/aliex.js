// Define a function to find unique elements in an array
function unique(array) {
    return Array.from(new Set(array));
}

// Export the function to be used in other modules
module.exports.unique = unique;
