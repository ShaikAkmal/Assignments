//premetive data type//


//1.number
let num1 = 10;
let num2 =10.5;
console.log(num1);
console.log(typeof num1);

//2.string
let str1 = "hello..,'good morning'";
console.log(str1);
console.log(typeof str1);
let str2 = 'hello..."good afternoon"';
console.log(str2);
console.log(typeof str2);
//let empName = "Akmal"
//console.log(`new employee ${empName}`)
let empName = "Viji";
let location = "TN";
console.log("New Employee Name is " + empName + " and Location is " + location);
console.log(`New Employee Name is ${empName} and Location is ${location}`);

// boolean
let x = 10 
let y = 20
let result = x<y
console.log(x<y);
console.log(x>y);
console.log(typeof result)

//non premitive data type
let person = {
    name :"chotu",
    mobile  : 9160541233,
    address : {
         city : "Gdvl",
         zip  : 512331
    }

}
console.log(person.mobile)
console.log(person);
//Array
let fruits = ["banna", "mango", "orange"];
let prices =[100,210,250];
let fruitAndprice =["mango",20,"orange",60,"apple"]
console.log(fruitAndprice[3]);
console.log(fruits[2])