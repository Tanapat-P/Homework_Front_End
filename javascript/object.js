//Example 4.7.1 Computed Properties


// let key = prompt("Enter your key");
// let value = prompt("Enter your value");
// let obj = {};

// while (key !== "stop") {
//     obj[key] = value;
//     key = prompt("Enter your key");
//     while (value !== "stop") {
//         value = prompt("Enter your value");
//     }

// }

// console.log(obj);

// //Example 4.7.2 Computed Properties
// let fruitkey = prompt("input your fruit name");
// let fruitvalue = prompt("input your amount ");
// let fruitobj = {};

// while(fruitkey !== "stop")
// {
    
   
//     if(fruitvalue > 1)
//     {
//         fruitkey = fruitkey + "s";
       
//     }

   
//     else if (fruitvalue < 0)
//     {
//         alert("error");
//         break;
//     }
//     fruitobj[fruitkey] = fruitvalue;
    
//     fruitkey = prompt("input your fruit name");
//     fruitvalue = +prompt("input your amount ");   
// }
// console.log(fruitobj);

   
// Example 4.18 ข้อ 1

// let user = {};

// user.name = "sonter";
// user.surname = "Pakorn"
// user.name = "Boy";
// delete user.name;

// console.log(user);

// Example 4.18 ข้อ 2
// let object = {};
// let count = 0;
// let ans = isEmpty(object);
// function isEmpty(obj) {
//   for (let key in obj) {
//     if (key !== "" || key !== null) count++;
//   }
//   if (count !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ans);

// // เเบบที่ 2
// function isEmpty(obj){
//     for(let key in obj) {
//         return false;
//     }

//     return true;
// }

// isEmpty({})


// Example 4.18 ข้อ 4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   };
  
//   function sum(obj) {
//     let sum = 0;
//     for (let key in obj) {
//       sum += +obj[key];
//     }
//     return sum;
//   }
//   console.log(sum(salaries));


//   function sum(a, b) {
//       return a+b;
//   }

//   sum(1,2)
//   const c =7
//   const d =10
//   const sum = sum(c, d)


// Example 4.18 ข้อ 5

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj,times) {
//     for (let key in obj){
//         if((typeof obj[key])==="number"){
//             obj[key]=obj[key]*times;
//         }
//     }
//     return menu;
// }
// console.log(multiplyNumeric(menu,5));




let obj = {

    name : "jeeno",
    age : 23,
    weight : 49,
    height : 165,
    calculateBmi : function () {
        return weight/height
    }
}

let clone = {};

for (let key in obj){

clone[key] = obj[key];
}

console.log(clone)



function calculateBmi()
{
    return this.weight/this.height
}

calculateBmi()


function Person()
{
    this.nation = "thai",
    this.job = "student"
}

let jack = new Person();
let bell = new Person();




