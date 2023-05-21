var firstName = "Abdul";
console.log(firstName);
var lastName = "Manan";
console.log(lastName);
lastName = "Hannan";
// lastName = 25
console.log(lastName);
var age = 22;
console.log(age);
// age = "22"
age = 21;
console.log(age);
var names = ["Manan", "Ahmad", "Ali"];
names.push("Abdullah");
// names.push(30)
console.log(names);
var mixedArray = ["Manan", 21, "Ali", true];
mixedArray.push(22);
// console.log(mixedArray[4])
console.log(mixedArray);
var users = {
    fName: "Ali",
    lName: "Haider",
    age: 20
};
// users.fName = 22
users.age = 22;
users.fName = "Hy";
// users.id = 1
// users.city = "FSD"
console.log(users);
var solveNum = function (num) {
    return num * 5;
};
// console.log(solveNum("2"))
console.log(solveNum(9));
var numSolution = function (num1, num2) {
    if (num2 === void 0) { num2 = 9; }
    return num1 + num2;
};
console.log(numSolution(2));
console.log(numSolution("2"));
console.log(numSolution(5, 3));
var num1Solution = function (num1, num2) {
    if (num2 === void 0) { num2 = 9; }
    return num1 / num2;
};
// console.log(num1Solution("6"))
console.log(num1Solution(55, 10));
var num2Solution = function (num1, num2) {
    if (num1 === void 0) { num1 = 20; }
    if (num2 === void 0) { num2 = 9; }
    return num1 / num2;
};
console.log(num2Solution("6"));
console.log(num2Solution(55, 10));
console.log(num2Solution());
var numbers = [];
// numbers.push(30)
numbers.push("abd");
console.log(numbers);
var numbers1 = [];
numbers1.push(30);
numbers1.push("ABC");
numbers1.push(true);
numbers1.push(["Hello World"]);
console.log(numbers1);
var myName = "Abdul Manan";
myName = 21;
myName = true;
console.log(myName);
