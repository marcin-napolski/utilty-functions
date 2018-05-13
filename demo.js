var example = new Promise(function (resolve, reject) {
    // Use resolve or reject to determine the fate of the promise
    resolve(123);
    // reject(new Error('failed'));
});
example.then(function (value) {
    console.log('then', value);
});
example["catch"](function (error) {
    console.log('catch', error);
});
var first = new Promise(function (resolve, reject) {
    // Use resolve or reject to determine the fate of the promise
    resolve(123);
});
var second = first
    .then(function (value) {
    // return new Promise((res, rej) => rej(new Error('example')));
    // throw new Error('example')
    // foo.bar
});
// console.log(first === second);
second.then(function (value) {
    console.log('second then', value);
});
second.then(function (error) {
    console.log('second catch', error);
});
new Promise(function (resolve, reject) {
    // Use resolve or reject to determine the fate of the promise
    resolve(123);
})
    .then(function (res) {
    console.log(res);
    foo.bar;
    return 456;
})
    .then(function (res) {
    console.log(res);
    return 789;
})
    .then(function (res) {
    console.log(res);
})
    .then(function (err) {
    console.log('ERROR', err);
});
