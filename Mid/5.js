//قطعه کدی بنویسید که ویژگی هایی با مقادیر نال و آندیفایند را از یک آبجکت حذف کند
let orders = {
    laptop: 1 ,
    pen: 'hello',
    phone: undefined,
    book: null
}

const result = {};

for (let item in orders){
    if (orders[item] != null && orders[item] != undefined){
        result[item] = orders[item];
    }
}