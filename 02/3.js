function rmv(obj) {
    const rslt = {};
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            rslt[key] = obj[key];}}
    return rslt;}
const test = { name: "ali", family: "Mohammadi", age: undefined, phone: null, university: "montazeri" };

const check = rmv(test);
console.log(check);