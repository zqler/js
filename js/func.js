//this和call用法
function say(content) {
    console.log("form" + this + ":hello" + content) //call 第一个参数指向this,第二个参数作为要传入的参数
}
say.call("bob", "you");

function sayhello(word) {
    console.log(word)
}
sayhello("hello world");
sayhello.call(window, "Hello world"); //默认this指向window
var x = 10;
var obj = {
    x: 20,
    f: function() {
        console.log(this.x); //20
        var that = this; //obj
        var foo = function() {
            console.log(that.x);
        }
        foo(); //10
    }
};
obj.f(); //obj.f.call(obj)
(function(a, b) {
    var result = a + b;
    return result;
})(4, 5);