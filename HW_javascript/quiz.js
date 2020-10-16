
// Don't understand      1,4,11,15

// Question 1 ***


// function minFrac(numA = +prompt("หาเศษส่วนอย่างต่ำ ใส่ค่าเศษ"), numB = +prompt("หาเศษส่วนอย่างต่ำ ใส่ค่าส่วน")) {
//     console.log(" -> เศษส่วนอย่างต่ำของ " + numA + "/" + numB);
//     let intMore = numA >= numB ? numA : numB;
//     let intLess = numA >= numB ? numB : numA;
//     const numerator = numA >= numB ? "MORE" : "LESS";
//     for (i = intLess; i > 1; i--) {
//         if (intLess % i === 0) {
//             if (intMore % i === 0) {
//                 intLess /= i;
//                 intMore /= i;
//             }
//         }
//     }
//     if (numerator === "MORE") {
//         return intMore + "/" + intLess;
//     } else {
//         return intLess + "/" + intMore;
//     }
// }
// console.log(`ข้อ 1: หาเศษส่วนอย่างต่ำ\n  minFrac(เศษ,ส่วน)`);
// console.log(minFrac(30, 45));


// Question 2

// function sumNum(start = +prompt('ค่าเริ่มต้น'), stop = +prompt('ค่าไม่เกิน'), plus = +prompt('เพิ่มทีละ')) {
//     console.log(`start: ${start}, stop: ${stop}, plus: ${plus}`);
//     let result = 0
//     for (let i = start; i <= stop; i += plus) {
//         result += i
//     }
//     return result
// }
// console.log(`ข้อ 2: ผลบวก 160 162 164 ... 2048 คือ\n sumNum(เลขแรก,ไม่เกินเลข, เพิ่มทีละ) `);
// console.log(sumNum(160, 2048, 2));


// Question 3

// function sumNum(start = +prompt('ค่าเริ่มต้น'), stop = +prompt('ค่าไม่เกิน'), plus = +prompt('เพิ่มทีละ')) {
//     console.log(`start: ${start}, stop: ${stop}, plus: ${plus}`);
//     let result = 0
//     for (let i = start; i <= stop; i += plus) {
//         result += i
//     }
//     return result
// }

// console.log(`ข้อ 3: ผลบวก 163 167 171 ... 815 คือ\n sumNum(เลขแรก,ไม่เกินเลข, เพิ่มทีละ) `);
// console.log(sumNum(163, 815, 4));


// Question 4 ***

// function fibonacci(n = +prompt('fibonacci กรอกลำดับที่ต้องการ')) {
//     return n < 1 ? `error ${n}` : (n === 1 ? 0 : (n === 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)))
// }
// console.log(`ข้อ 4 วิธี 1: ตัวที่ n ของ 0 1 1 2 3 5 8 13 ... คือ\n fibonacci(ตัวที่)`);
// console.log(fibonacci(20));



// Question 5

// function minusEven(num = +prompt("1-2+3-4+5...(กรอกตัวเลข): ")) {
//     if (num % 2 === 0) {
//         console.log(`1-2+3-4+...+${num - 1}-${num} คือ `);
//     } else {
//         console.log(`1-2+3-4+...-${num - 1}+${num} คือ `)
//     }
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             result -= i;
//         } else {
//             result += i;
//         }
//     }
//     return result
// }
// console.log(`ข้อ 5 วิธี 1: minusEven(เลข)`);
// console.log(minusEven(18954));



// Question 6

// function korHog(num = +prompt("1x2 + 2x3 + 3x4 + ... +(กรอกตัวเลข)x(ตัวเลข+1): ")) {
//     console.log(`1x2 + 2x3 + 3x4 + ... + ${num}x${num + 1} คือ`);
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i * (i + 1);
//     }
//     return result;
// }
// console.log('ข้อ 6: korHog(เลข)');
// console.log(korHog(87));



// Question 7

// function korJet(num = +prompt("1x2x3 + 2x3x4 + 3x4x5 + ... +(กรอกตัวเลข)x(ตัวเลข+1)x(ตัวเลข+2): ")) {
//     console.log(`1x2x3 + 2x3x4 + 3x4x5 + ... + ${num}x${num + 1}x${num + 2} คือ`);
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i * (i + 1) * (i + 2);
//     }
//     return result;
// }
// console.log('ข้อ 7: korJet(เลข)');
// console.log(korJet(87));


//Question 8 

// function korPad(num = +prompt('1x3x5 + 3x5x7 + 5x7x9 + ... + (กรอกเลข)x(เลข+2)x(เลข+4)')) {
//     console.log(`1x3x5 + 3x5x7 + 5x7x9 + ... + ${num}x${num + 2}x${num + 4} คือ `);;
//     let result = 0;
//     for (let i = 1; i <= num; i += 2) {
//         result += i * (i + 2) * (i + 4);
//     }
//     return result
// }
// console.log("ข้อ 8: korPad(เลข)");
// console.log(korPad(155));


// Question 10 

// function findMin() {
//     let min = Infinity;
//     let input = "";
//     console.log("หาค่า min | ค่าที่รับมา:");
//     while (input.trim().toLowerCase() !== "stop") {
//         console.log(input);
//         input = prompt("'stop' เพื่อจบ | หาค่า min | input number");
//         min = Number(input) < Number(min) ? input : min
//     }
//     return +min;
// }
// console.log('ข้อ 10 :findMin()');
// console.log(findMIn())


// Question 11 ***

// function find3Min() {
//     let input = "Infinity", min1 = Infinity, min2 = Infinity, min3 = Infinity;
//     console.log("หาค่า min 3 ค่า | ค่าที่รับมา:");
//     while (input.trim().toLowerCase() !== "stop") {
//         input = Number(input);
//         if (input < min3 || min2 === min3 || min2 === min1) {
//             if (input !== min3 && input !== min2 && input !== min1) {
//                 if (input < min1) {
//                     min3 = min2;
//                     min2 = min1;
//                     min1 = input;
//                 } else if (input < min2) {
//                     min3 = min2;
//                     min2 = input;
//                 } else {
//                     if (min2 === min1) {
//                         min2 = input;
//                         min3 = input;
//                     } else {
//                         min3 = input;
//                     }
//                 }
//             }
//         }
//         input = prompt("input number");
//         console.log(input);
//     }
//     return [min1, min2, min3]
// }
// console.log('ข้อ 11 :find3Min()');
// console.log(find3Min())




// Qusetion 12 ,13 

// function findMaxMin() {
//     let input = prompt("'stop' เพื่อจบ | หาค่า max, min | input number");
//     let min = input, max = input;
//     while (input.trim().toLowerCase() !== "stop") {
//         input = Number(input);
//         if (input < min) {
//             min = input;
//         } else if (input > max) {
//             max = input;
//         }

//         input = prompt("'stop' เพื่อจบ | หาค่า max, min | input number");
//         console.log(input);
//     }
//     return { max: max, min: min, MaxMinDiff: max - min }
// }
// console.log('ข้อ 12,13 :findMaxMin()');
// console.log(findMaxMin())


// Question 14

// function findAverage() {
//     let input = "0";
//     let sum = 0, count = -1;
//     while (input.trim().toLowerCase() !== "stop") {
//         input = Number(input);
//         sum += input;
//         count++;
//         input = prompt("หาค่าเฉลี่ย | input number: ")
//         console.log(input);
//     }
//     return sum / count;
// }
// console.log('ข้อ 14 :findMaxMin()');
// console.log(findAverage())



//Question 15 ***

function tenPower(getNum) {
    let powerCount = 0;
    while (getNum > 9) {
        powerCount++;
        getNum /= 10
    }
    return powerCount
}
function reverseNum(getNum, power) {
    let result = 0, num;
    for (let i = 0; i <= power; i++) {
        num = Math.floor(getNum / 10 ** (power - i));
        result += num * 10 ** i;
        getNum -= num * 10 ** (power - i);
    }
    return result;
}
function getReverseNum(input = +prompt("กลับตัวเลข | input number")) {
    console.log("ค่าที่รับมา: ");
    console.log("  "+input);
    let isMinus = false;
    if (input < 0) {
        input = -input;
        isMinus = true;
    }
    let result = reverseNum(input, tenPower(input));
    if (isMinus) { result = -result };
    return result
}

console.log("ข้อ 15: getReverseNum(เลข)");
console.log(getReverseNum(1234500));
