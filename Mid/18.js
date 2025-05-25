// تابع ارایه با بیشترین طول
let arr = [[1,2], [3,4,5]];
function bigArr(arrays){
    let max = 0;
    let arayeValue = [];
    for (let array of arrays){
        const leng = array.length;
        if (leng > max){
            max = leng;
            arayeValue = array;
        }
    }
    console.log(`${arayeValue} with ${max} item`);
}