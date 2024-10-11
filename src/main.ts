function processData(data:number[], callback: (item:number) => void):void{
    data.forEach(callback)
}

function logItem(item:number):void{
    console.log(item *2)
}

processData([1,2,3,4,5],(item:number)=> {
    console.log(item*2)
})