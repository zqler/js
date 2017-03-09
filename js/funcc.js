function outer(a) {
    var b = 20;

    function inner(c) {
        var d = 40;
        return a * b / (d - c)
    }
    return inner;
}
var x = outer(10);
y = x(30);