const name = "wonseok",
age = 21, 
gender ="male";

const sayHi= (name:string, age:number ,gender:string):string =>{
    return `hello ${name}, you age ${age}, gender ${gender}`
}

console.log(sayHi(name , age , gender));

export {};