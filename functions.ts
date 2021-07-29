function getSum(num1:number, num2: number): number {
    return num1 + num2
}

let newSum = function(num1: any, num2: any): number{

    if(typeof num1 === 'string' || typeof num2 === 'string'){
        num1 = parseInt(num1)
        num2 = parseInt(num2)
    } return num1 + num2
    
    
}

// console.log(newSum('6','6'))

function getName(firstName:string, lastName?: string): string {
    if(lastName === undefined) return firstName
    
    return firstName+ " " +lastName
}

// console.log(getName('Lekan'))

function funcVoid(): void {
    console.log('returning empty')
    return 
}