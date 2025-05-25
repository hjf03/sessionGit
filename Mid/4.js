//متغیری از نوع آبجکت با نام اوردرز تعریف کنید که شامل سه کلید لپ تاپ,خودکار,کتاب باشد. هر کدام دارای کلیدهای تعداد,قیمت,مدل,نام هستند.پس از تعریف، در ادامه قطعه کدی بنویسید که به مقدار قیمت هر کدام 10 واحد اضافه کند و مبلغ کل خرید را چاپ کند
let orders = {
    laptop: {name : 'HP', model: 'Pavilion', price: 40, count: 1} ,
    pen: {name : 'Bik', model: 'Blue', price: 2, count: 3},
    book: {name : 'Silence', model: 'Paper', price: 10, count: 6}
}

let total = 0;
for (const item in orders) {
    orders[item].price += 10;
    total += orders[item].price * orders[item].count;}
