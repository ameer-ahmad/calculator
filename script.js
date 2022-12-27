// Query selectors
const answer = document.querySelector('.answer')
const numbers = document.querySelector('.numbers')
const erase = document.querySelector('.erase')
const operators = document.querySelector('.operators')

// Variables
let equation = ""

// Event Listeners
numbers.addEventListener('click', (e) => {
    if (answer.innerText === "0") {
        if (e.target.innerText !== "0") {
            answer.innerText = e.target.innerText
            equation += e.target.innerText
        }
    } else {
        answer.innerText += e.target.innerText
        equation += e.target.innerText
    }
})

erase.addEventListener('click', (e) => {
    if (e.target.innerText === "←") {
        if (answer.innerText.length === 1) {
            answer.innerText = "0"
            equation = equation.slice(0, -1)
        } else {
            answer.innerText = answer.innerText.slice(0, -1)
            equation = equation.slice(0, -1)
        }
    } else if (e.target.innerText === "C") {
        answer.innerText = "0"
        equation = ""
    }
})

operators.addEventListener('click', (e) => {
    if (e.target.classList.contains("button")) {
        if (e.target.innerText !== "=") {
            if (e.target.innerText === "÷") {
                answer.innerText = "0"
                equation += "/"
            } else if (e.target.innerText === "x") {
                answer.innerText = "0"
                equation += "*"
            } else {
                answer.innerText = "0"
                equation += e.target.innerText
            }
            
        } else {
            answer.innerText = eval(equation)
            equation = eval(equation)
        }
    }
})
