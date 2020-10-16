// Number no.1
// function random(min,max)
// {
//    return Math.random() * (max-min) + min;
// }

// console.log(random(1,5));


// String no.1

// function ucFirst(str)
// {

// }

// console.log(ucFirst("jeeno"));



//string no.2

// function checkSpam(message)
// {
   
// }

// console.log(checkSpam());



//string no.3

// function truncate(str,max_length)
// {
//     if(str.length > max_length)
//     {
//         return console.log(ans)
//     }
// }



//string no.4

// function extractCurrencyValue(string,rate)
// {

// }

// --- Number ---
// Math.random [return random form min to max]
// let random = (min, max) => {
//     return Math.random() * (max - min) + min;
//   };
//   console.log(random(1, 5));
  
  // --- String ---
  // 2.11-1 [return first character to Upper]
//   let ucFirst = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };
//   console.log(ucFirst("hello world"));
  
  // 2.11-2 [return true if string have "xxx" or "viagra"]
  // --- form 1 ---
//   let checkSpam = (str) => {
//     return str.includes("xxx") || str.includes(`viagra`);
//   };
//   console.log(checkSpam("I have viagra"));
  // --- form 2 ---
//   let a = (str) => {
//     if (str.indexOf("xxx") !== -1 || str.indexOf("viagra") !== -1) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   console.log(a("I have triple xxx"));
  
  // 2.11-3 [check str is over maxLength ? => replace with "..."]
//   let truncate = (str, maxLength) => {
//     if (str.length > maxLength) {
//       return str.slice(0, maxLength) + "...";
//     } else {
//       return str;
//     }
//   };
//   console.log(truncate("What I'd like to tell on this topic is:", 20));
  
  // 2.11-4 [convert string $ currency to THB form dollar,rate]
//   let extractCurrencyValue = (str, rate) => {
//     return str.slice(1) * rate;
//   };
//   console.log(extractCurrencyValue("$120", 30.5) === 3660);




// Method array 
//no 1.1
//   let array1 = [1,2,30,400];
//   let answer = array1.map(item => item * 2);
//    console.log(answer);

// no 1.2

// let array1 = [1,2,3,4]
// let answer = array1.map(item => String(item));
// console.log(answer);

//no 1.3
// let array1 = [1,"1",2,{}]
// let answer = array1.map(item => typeof (item));
// console.log(answer);


// no 1.4
// let array1 = ["apple","banana", "orange"]
// let answer = array1.map(item => item.toUpperCase());
// console.log(answer);


//no 1.12

//no 2.6

let array1 = [
    {name : "apple" , age : 14},
    {name : "banana" , age : 18},
    {name : "watermalon" , age : 32},
    {name : "pineapple" , age : 16},
    {name : "peach" , age : 24}
]

let answer = array1.filter(item => item.age !== 32);

console.log(answer);

