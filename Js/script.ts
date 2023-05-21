let firstName = "Abdul"
console.log(firstName)


let lastName = "Manan"
console.log(lastName)
lastName = "Hannan"
// lastName = 25
console.log(lastName)


let age = 22
console.log(age)
// age = "22"
age = 21
console.log(age)


let names = ["Manan", "Ahmad", "Ali"]
names.push("Abdullah")
// names.push(30)
console.log(names)


let mixedArray = ["Manan", 21, "Ali", true]
mixedArray.push(22)
// console.log(mixedArray[4])
console.log(mixedArray)


let users = {
    fName: "Ali",
    lName: "Haider",
    age: 20
}
// users.fName = 22
users.age = 22
users.fName = "Hy"
// users.id = 1
// users.city = "FSD"
console.log(users)


const solveNum = (num: number ) => {
    return num * 5
}
// console.log(solveNum("2"))
console.log(solveNum(9))


const numSolution = (num1 , num2 = 9) => {
    return num1 + num2
}
console.log(numSolution(2))
console.log(numSolution("2"))
console.log(numSolution(5,3))


const num1Solution = (num1: number, num2 = 9) => {
    return num1 / num2
}
// console.log(num1Solution("6"))
console.log(num1Solution(55,10))


const num2Solution = (num1: any = 20, num2 = 9) => {
    return num1 / num2
}
console.log(num2Solution("6"))
console.log(num2Solution(55,10))
console.log(num2Solution())


let numbers: string[] = []
// numbers.push(30)
numbers.push("abd")
console.log(numbers)


let numbers1: any  = []
numbers1.push(30)
numbers1.push("ABC")
numbers1.push(true)
numbers1.push(["Hello World"])
console.log(numbers1)


let myName: number | string | boolean  = "Abdul Manan"
myName = 21
myName = true
console.log(myName)

