function isFunction(value) {
    return typeof value === 'function';
}

// Assuming s is a variable referencing a function
var s = function(d, _) {
    return d + _;
};

var datum = 5;
var _ = 10;

if (isFunction(s)) {
    s = s(datum, _);
    console.log(s);  // Output: 15
}
