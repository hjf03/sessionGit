function mrge(objc1, objc2) {
    var a = {};
    for (var key in objc1) {
        a[key] = objc1[key];
    }
    for (var key in objc2) {
        a[key] = objc2[key];
    }
    return a;
}

const one = {ali:25 , sara:13};
const two = {mhmd:30 , zahra:28};
console.log(mrge(one, two));