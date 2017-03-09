let node = {
        type: "Identifier",
        names: "foo"
    },
    type = "Literal", //必须有初始值
    names = 5;

function outputinfo(value) {
    console.log(value === node);
}
// 使用解构来分配不同的值
outputinfo({ type, names } = node); //解构赋值表达式
console.log(type, name);