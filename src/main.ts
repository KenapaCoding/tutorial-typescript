function combine(a:number, b:number):number;
function combine(a:string, b:string):string;
function combine(a:any, b:any):any{
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a + b + 'ini string'
    }
}

console.log(combine(10,20))
console.log(combine("hello","world"))