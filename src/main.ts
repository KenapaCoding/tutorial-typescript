let variable:any

variable = "ranggo"
variable = 25
variable = true

function logValue(value:any){
    console.log(value)
}

function anyRisk(value:any){
    console.log(value.toFixed(2))
}

anyRisk("ranggo")

logValue("ini data dari api")
logValue(34890067)

console.log(variable)