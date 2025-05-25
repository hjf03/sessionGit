//قطعه کدی بنویسید که عناصر سوم تا ششم یک آرایه را در هم ضرب کند
const array = [1,2,3,4,5,6,7,8];
const newArr = array.slice(3, 6);
let result = 1;

for(let num of newArr){
    result = result * num;
}