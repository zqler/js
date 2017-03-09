var funcs = [];
for (let i = 0; i < 10; i++) {
funcs.push(function() {
console.log(i);
});
}
funcs.forEach(function(func) {
func();

// 从 0 到 9 依次输出
})
let name="zhang",
    message = `Hello, ${
`my name is ${ name }`
}.`;
    console.log(message);
let personname=Symbol();
let person={};
person[personname]="张权";
console.log(person[personname]);
let uid=Symbol.for("uid");
let object={};
object[uid]="myname";
console.log(object[uid]);
console.log(uid);
