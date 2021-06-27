class Calculator {
  constructor(previousTextEle, currentTextEle) {
    this.previousTextEle = previousTextEle
    this.currentTextEle = currentTextEle
    this.clear()
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

const previousTextEle = document.querySelector('[data-previous-operand]')
const currentTextEle = document.querySelector('[data-current-operand]')
const calculator = new Calculator(previousTextEle, currentTextEle)

const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll('[data-operation]')
const allClearBtn = document.querySelector('[data-all-clear]')
const deleteBtn = document.querySelector('[data-delete]')
const equalsBtn = document.querySelector('[data-equals]')

numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText)
    calculator.updateDisplay()
  })
})

operationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText)
    calculator.updateDisplay()
  })
})

allClearBtn.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteBtn.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

equalsBtn.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})
