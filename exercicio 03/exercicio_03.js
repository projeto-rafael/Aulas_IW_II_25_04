var n1 = Number(prompt("Digite a primeira nota: "));
var n2 = Number(prompt("Digite a segunda nota: "));

var media = (n1 + n2) /2;

if (media >= 9){
    var conceito = "A";
    alert(`A sua primeira nota foi: ${n1} \n A sua segunda nota foi: ${n2} \n Sua média é de: ${media} \n Seu conceito de nota é ${conceito}`);
}

if ((media >= 7.5) && (media < 9)){
    var conceito = "B";
    alert(`A sua primeira nota foi: ${n1} \n A sua segunda nota foi: ${n2} \n Sua média é de: ${media} \n Seu conceito de nota é ${conceito}`);
}

if ((media >= 6) && (media < 7.5)){
    var conceito = "C";
    alert(`A sua primeira nota foi: ${n1} \n A sua segunda nota foi: ${n2} \n Sua média é de: ${media} \n Seu conceito de nota é ${conceito}`);
}

if ((media > 4) && (media < 6)){
    var conceito = "D";
    alert(`A sua primeira nota foi: ${n1} \n A sua segunda nota foi: ${n2} \n Sua média é de: ${media} \n Seu conceito de nota é ${conceito}`);
}

if ((media <= 4) && (media == 0)){
    var conceito = "E";
    alert(`A sua primeira nota foi: ${n1} \n A sua segunda nota foi: ${n2} \n Sua média é de: ${media} \n Seu conceito de nota é ${conceito}`);
}

if ((conceito === "A") || (conceito  === "B") || (conceito === "C")){
    alert("Você está APROVADO!");
}
else{
    alert("Você está REPROVADO!");
}

