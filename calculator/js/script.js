function clear(){
    a = 0
    firstNum = ''
    operand = ''
    secondNum = ''
    answer = ''
    tempNum = ''
    tempNum1 = ''
    return a
}

function display(a){
    element.innerHTML = a;
}

function append(a){
    if(firstNum == '' && secondNum ==''){
        tempNum = tempNum.toString() + a.toString()
        return tempNum
    }else if (firstNum != '' && secondNum ==''){
        tempNum1 = tempNum1.toString() + a.toString()
        return tempNum1
    }
}

function selectOperation(a,b){
    if(firstNum == '' && secondNum == ''){
        firstNum = a
        operand = b
        return firstNum.toString() + operand.toString()
    }else if(firstNum != '' && secondNum ==''){
        secondNum = a
        operand = b
        return firstNum.toString() + operand.toString() + secondNum.toString()
    }
}

function prevanswer(a){
    firstNum = prevans
    operand = a
    return firstNum.toString() + operand.toString()
}

function computation(){
    switch (operand) {
        case '+':
            answer = parseInt(firstNum) + parseInt(secondNum);
            return
        case '-':
            answer = parseInt(firstNum) - parseInt(secondNum);
            return
        case '*':
            answer = parseInt(firstNum) * parseInt(secondNum);
            return
        case '/':
            answer = parseInt(firstNum) / parseInt(secondNum);
            return
    }
}

// code starts

firstNum = ''
operand = ''
secondNum = ''
answer = ''
tempNum = ''
tempNum1 = ''
prevans = ''

const element = document.getElementById("display_box");
const numbers = document.querySelectorAll("[data-number]")
const operation = document.querySelectorAll("[data-operation]")
const clears = document.querySelectorAll("[data-clear]")
const equals = document.querySelectorAll("[data-equals]")

displayVar0 = clear()
display(displayVar0)

clears.forEach(button => {
    button.addEventListener("click", function(){
        displayVar = clear()
        display(displayVar)
    });
})

numbers.forEach(button => {
    button.addEventListener("click", function(){
        if(firstNum == '' && secondNum == ''){
            displayVar1 = append(button.innerText)
            display(displayVar1)
        }else if(firstNum != '' && secondNum == ''){
            displayVar1 = append(button.innerText)
            display(firstNum.toString() +operand.toString() +displayVar1)
        }
    });
})

operation.forEach(button => {
    button.addEventListener("click", function(){
        if(firstNum == '' && secondNum == '' && operand == '' && tempNum == '' && tempNum1 == '' && answer == '' && prevans != ''){
            displayVar2 = prevanswer(button.innerText)
            display(displayVar2)
        }else{
            displayVar2 = selectOperation(tempNum,button.innerText)
            display(displayVar2)
        }
    });
})

equals.forEach(button => {
    button.addEventListener("click", function(){
        if(firstNum == '' && secondNum == '') return
        if (firstNum != '' && secondNum == ''){
            secondNum = tempNum1
            computation()
            display(firstNum.toString() + operand.toString() + secondNum.toString() +"=" +answer.toString())
            prevans = answer
            console.log(answer)
            clear()
        }
    });
})