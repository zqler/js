let promise = readFile("example.txt");
promise.then(function(contents) {
    console.log(contents)
}, function(err) {
    console.log(err.message);
})