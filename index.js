function calculate() {
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    
    let sign = document.querySelector('#calcSign')

    let add = document.querySelector('#sign_add')
    let sub = document.querySelector('#sign_sub')
    let mul = document.querySelector('#sign_mul')
    let div = document.querySelector('#sign_div')

    let result = document.querySelector('#resultArea')

    if(add.checked == true){
        sign.innerHTML = `${add.value}`
        result.textContent = `The result is: ${num1 + num2}`
        console.log(`Addition selected
            ${num1} + ${num2} = ${num1 + num2}`)
    } 
    
    else if (sub.checked == true){
        sign.innerHTML = `${sub.value}`
        result.textContent = `The result is: ${num1 - num2}`
        console.log(`Subtraction selected
            ${num1} - ${num2} = ${num1 - num2}`)
    } 
    
    else if (mul.checked == true){
        sign.innerHTML = `${mul.value}`
        result.textContent = `The result is: ${num1 * num2}`
        console.log(`Multiplication selected
            ${num1} * ${num2} = ${num1 * num2}`)
    } 
    
    else if (div.checked == true) {
        sign.innerHTML = `${div.value}`
        result.textContent = `The result is: ${num1 / num2}`
        console.log(` Division selected
            ${num1} / ${num2} = ${num1 / num2}`)
    }
}