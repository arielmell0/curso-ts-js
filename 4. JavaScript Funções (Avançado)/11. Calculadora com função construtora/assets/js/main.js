function Calculator() {
  // Private methods and atributes
  const display = document.querySelector('.display')

  const captureEvents = () => {
    document.addEventListener('click', (event) => {
      const clickTarget = event.target
      
      if(clickTarget.classList.contains('btn-num')){
        btnToDisplay(clickTarget.innerText)
      } else if(clickTarget.classList.contains('btn-clear')) {
        clearDisplay()
      } else if(clickTarget.classList.contains('btn-del')) {
        deleteBtn()
      } else if(clickTarget.classList.contains('btn-eq')) {
        realizeAccount()
      }

    })
  }

  const pressEnter = () => {
    document.addEventListener('keyup', event => {
      if(event.keyCode === 13) {
        realizeAccount()
      }
    })
  }

  const realizeAccount = () => {
    let account = display.value

    try {
      account = eval(account)

      if(!account) {
        alert('Conta inválida')
      }

      display.value = String(account)
    } catch(error) {
      alert('Conta inválida')
      return
    }
  }

  const clearDisplay = () => {
    display.value = ''
  }

  const deleteBtn = () => {
    display.value = display.value.slice(0, -1)
  }

  const btnToDisplay = (value) => {
    display.value += value
  }

  // Public methods and atributes
  this.start = () => {
    captureEvents()
    pressEnter()
  }
  
}

const calculator = new Calculator()
calculator.start()