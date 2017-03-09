const a = new Array();
a.__proto___ === Array.prototype;
a.__proto__.__proto__ === Object.prototype; //__proto__原型指针，指向原型，可以访问到他所继承的原型对象。
a.__proto__.__proto__.__proto__ === null; //prototype属性很特殊，它还有一个隐式的constructor，指向了构造函数本身。
let Foo = function() {

}
Foo.__proto__ = Object.prototype;
Foo.__proto__.constructor === Foo;