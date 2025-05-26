// ------------- Start 1 ------------//
let information = ['ali', 23, 25];
const checkNumber = function (array){
    let str = typeof('A');
    for (let one of array){
        if (typeof(one) == typeof(str)){
            console.log(`${one} is string`)
            break;
        }
        else{
            continue;
        }
    }
}
checkNumber(information)
// ------------- End 1 ------------//


// ------------- Start 2 ------------//
const students = [{name : 'Ali', grade : 16}, {name: 'Sara', grade : 18}, {name: 'Reza', grade: 19}];
function highGrade (array){
    for (let obj of array){
        let grad = obj.grade;
        let nam = obj.name;
        if (grad >= 18){
            console.log(`${nam} have ${grad} grade`);
        }
        console.log('_______________')
    }
}
// ------------- End 2 ------------//


// ------------- Start 3 ------------//
const calculator = {
    name: 'math',
    subtract: function(number1,number2){ console.log(`${number1} - ${number2} = ${number1-number2}`)},
    sum: function(number1,number2){ console.log(`${number1} + ${number2} = ${number1+number2}`) }
}

console.log(calculator.subtract(2-2))
// ------------- End 3 ------------//


// ------------- Start 4 ------------//
let n = 5;
function sum (number){
    let finalSum = 0;
    for(let i = 1; i <= n; i++){
        finalSum += i;
    }
    return finalSum;
}

sum(n)
// ------------- End 4 ------------//