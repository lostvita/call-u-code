class Calculator {
  constructor(previousTextEle, currentTextEle) {
    this.previousTextEle = previousTextEle
    this.currentTextEle = currentTextEle
    this.equalsLock = false
    this.clear()
  }

  setEqualsLock(flag) {
    if (this.equalsLock === flag) return
    this.equalsLock = flag
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = null
  }

  delete() {
    if (this.equalsLock) return
    this.currentOperand = this.currentOperand.slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.equalsLock && (this.currentOperand = '')
    this.currentOperand += number.toString()
    calculator.setEqualsLock(false)
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(curr)) return
    switch (this.operation) {
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case '*':
        computation = prev * curr
        break
      case '÷':
        computation = prev / curr
        break
      default:
        return
    }
    this.currentOperand = computation.toString()
    this.previousOperand = ''
    this.operation = null
  }

  numberFormat(number) {
    const numbers = number.toString().split('.')
    const integer = parseInt(numbers[0])
    const decimal = numbers[1]
    let integerDisplay = isNaN(integer) ? '' : integer.toLocaleString()
    return decimal != null ? `${integerDisplay}.${decimal}` : integerDisplay
  }

  updateDisplay() {
    this.currentTextEle.innerText = this.numberFormat(this.currentOperand)
    if (this.operation) {
      this.previousTextEle.innerText = `${this.numberFormat(this.previousOperand)} ${this.operation}`
    } else {
      this.previousTextEle.innerText = ''
    }
  }
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
    calculator.setEqualsLock(false)
    calculator.chooseOperation(btn.innerText)
    calculator.updateDisplay()
  })
})

allClearBtn.addEventListener('click', () => {
  calculator.setEqualsLock(false)
  calculator.clear()
  calculator.updateDisplay()
})

deleteBtn.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

equalsBtn.addEventListener('click', () => {
  calculator.setEqualsLock(true)
  calculator.compute()
  calculator.updateDisplay()
})
