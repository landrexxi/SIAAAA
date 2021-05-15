var mathObject = {
    num1: 0,
    operation: 'n',
    num2: 0,
  }
  
  function addNumToText(num: any) {
    if ((<HTMLInputElement>document.getElementById('myText')).value != '0') {
      ;(<HTMLInputElement>document.getElementById('myText')).value = (<HTMLInputElement>document.getElementById('myText')).value + num
    } else {
      ;(<HTMLInputElement>document.getElementById('myText')).value = num
    }
  }
  
  function operation(ope: string) {
    mathObject.num1 = parseInt((<HTMLInputElement>document.getElementById('myText')).value)
    mathObject.operation = ope
    ;(<HTMLInputElement>document.getElementById('myText')).value = '0'
  }
  
  function calculate() {
    var result = 0
    mathObject.num2 = parseInt((<HTMLInputElement>document.getElementById('myText')).value)
    if (mathObject.operation == '+') {
      result = mathObject.num1 + mathObject.num2
      ;(<HTMLInputElement>document.getElementById('myText')).value = result.toString()
    } else if (mathObject.operation == '-') {
      result = mathObject.num1 - mathObject.num2
      ;(<HTMLInputElement>document.getElementById('myText')).value = result.toString()
    } else if (mathObject.operation == '/') {
      result = mathObject.num1 / mathObject.num2
      ;(<HTMLInputElement>document.getElementById('myText')).value = result.toString()
    } else if (mathObject.operation == '*') {
      result = mathObject.num1 * mathObject.num2
      ;(<HTMLInputElement>document.getElementById('myText')).value = result.toString()
    } else if (mathObject.operation == '%') {
      result = mathObject.num1 % mathObject.num2
      ;(<HTMLInputElement>document.getElementById('myText')).value = result.toString()
    }
    if (mathObject.operation == 'n') alert('Select an operator!')
    else
      (<HTMLInputElement>document.getElementById('displayHistory')).innerHTML =
        (<HTMLInputElement>document.getElementById('displayHistory')).innerHTML +
        (mathObject.num1 + mathObject.operation + mathObject.num2 + '=' + result + '<br>')
  }