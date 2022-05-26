let value = document.querySelector(".value")
let divisor = document.querySelector(".divisor")
let c = document.querySelector(".c")
let mult = document.querySelector(".mult")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let dot = document.querySelector(".dot")
let result = document.querySelector(".result")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let doublezero = document.querySelector(".doublezero")

c.addEventListener("click", () => {
    calc.txt.value=''
})

minus.addEventListener("click", () => {
    calc.txt.value+="-"
})

mult.addEventListener("click", () => {
    calc.txt.value+='*'
})

divisor.addEventListener("click", () => {
    calc.txt.value+='/'
})

plus.addEventListener("click", () => {
    calc.txt.value+='+'
})

one.addEventListener("click", () => {
    calc.txt.value+='1'
})

two.addEventListener("click", () => {
    calc.txt.value+='2'
})

three.addEventListener("click", () => {
    calc.txt.value+='3'
})

four.addEventListener("click", () => {
    calc.txt.value+='4'
})

five.addEventListener("click", () => {
    calc.txt.value+='5'
})

six.addEventListener("click", () => {
    calc.txt.value+='6'
})

seven.addEventListener("click", () => {
    calc.txt.value+='7'
})

eight.addEventListener("click", () => {
    calc.txt.value+='8'
})

nine.addEventListener("click", () => {
    calc.txt.value+="9"
})

zero.addEventListener("click", () => {
    calc.txt.value+='0'
})

doublezero.addEventListener("click", () => {
    calc.txt.value+='00'
})

dot.addEventListener("click", () => {
    calc.txt.value+='.'
})

result.addEventListener("click", () => {
    document.calc.txt.value=eval(calc.txt.value)
})