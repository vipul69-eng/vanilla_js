function Multiply(n1,n2){
    let num1=parseInt(n1),num2=parseInt(n2)
    return (num1*num2).toString()
}
function Add(n1,n2){
    let num1=parseInt(n1),num2=parseInt(n2)
    return (num1+num2).toString()
}
let multiplication=Multiply("1","2")
let addition=Add("1","2")
console.log('Multiplication is',multiplication)
console.log('Addition is',addition)