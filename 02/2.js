const orders = { book: { name: "Girls of Sun", model: "paper", price: 30, count: 19}, pen: { name: "BIK", model: "Blue", price: 17, count: 35 }, laptop: { name: "HP", model: "Pavilion Gaming", price: 250, count: 6 }};
let kol = 0;
for (const item in orders) {
    orders[item].price += 10;
    kol += orders[item].price * orders[item].count;
    console.log(`${item}:`, orders[item]);}
console.log(`Mablaq Kol: ${kol}`);
