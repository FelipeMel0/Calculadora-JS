const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const botaoSomar = document.getElementById("botaoSomar")
const formulario = document.getElementById("formulario")

function somador (){
    if(numero1.value !== '' && numero2.value !== ''){
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    formulario.classList.remove("botaoSubtrair")
        formulario.classList.add("botaoSomar")
        formulario.classList.remove("botaoMultiplicar")
        formulario.classList.remove("botaoDividir")
    }else{
        alert("Preencha os campos corretamente!")
    }
}

botaoSomar.addEventListener("click", somador)

function subtrador (){
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
        formulario.classList.add("botaoSubtrair")
        formulario.classList.remove("botaoSomar")
        formulario.classList.remove("botaoMultiplicar")
        formulario.classList.remove("botaoDividir")
        }else{
            alert("Preencha os campos corretamente!")
        }
    
}
botaoSubtrair.addEventListener("click", subtrador)

function multiplicador (){
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
        formulario.classList.remove("botaoSubtrair")
        formulario.classList.remove("botaoSomar")
        formulario.classList.add("botaoMultiplicar")
        formulario.classList.remove("botaoDividir")
        }else{
            alert("Preencha os campos corretamente!")
        }
}
botaoMultiplicar.addEventListener("click", multiplicador)

function divisor (){
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
        formulario.classList.remove("botaoSubtrair")
        formulario.classList.remove("botaoSomar")
        formulario.classList.remove("botaoMultiplicar")
        formulario.classList.add("botaoDividir")
        }else{
            alert("Preencha os campos corretamente!")
        }
   
}
botaoDividir.addEventListener("click", divisor)

