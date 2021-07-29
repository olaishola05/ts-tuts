function getSum(num1, num2) {
    return num1 + num2;
}
var newSum = function (num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(newSum('6','6'))
function getName(firstName, lastName) {
    if (lastName === undefined)
        return firstName;
    return firstName + " " + lastName;
}
// console.log(getName('Lekan'))
function funcVoid() {
    console.log('returning empty');
    return;
}
