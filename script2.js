let numero1 = prompt("digite o primeiro numero:")
let numero2 = prompt("digite o segundo numero:")
let operação = prompt("informe a ooperação: \n[+] \n[-] \n[x] \n[/]" )
if(operação == "+"){
    alert(numero1 + numero2)
}else if(operação == "-"){
    alert(numero1 - numero2)
}else if(operação == "x"){
    alert(numero1*numero2)
}else if(operação == "/"){
    alert(numero1/numero2)
}