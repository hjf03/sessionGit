function func(obj) {
    const a = {};
    for (const key in obj) {
        a[obj[key]] = key;
    }
    return a;
}

const test = {ali:25 , sara:13};
console.log(func(test));