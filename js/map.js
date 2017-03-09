var t = ['1', '2', '3'].map(parseInt);
console.log(t);

xo = 'alex';

function Bar() {
    console.log(xo);
} //已经形成了作用域了；

function func() {
    var xo = 'seven';
    Bar();
}
var ret = func();
ret();