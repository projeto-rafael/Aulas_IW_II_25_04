var a = Number(prompt("Digite o valor de A:"));
var b = Number(prompt("Digite o valor de B:"));
var c = Number(prompt("Digite o valor de C: "));


delta = (Math.pow(b,2) - (4*a*c));

delta1 = Math.sqrt(delta);

y1 = (((b) -  delta1)/(2*a));

delta2 = Math.sqrt(delta);
y2 = (((b) +  delta1)/(2*a));


alert(`Equação do Segundo Grau: Resolução \n Valores digitados: \n a = ${a} \n b = ${b} \n c = ${c} \n Δ = b² -4.a.c \n Δ = ${b}² - 4.${a}.${c} \n Δ = ${delta}`);
alert(`Valores de y' e y'': \n y = -b + √Δ / 2.a \n y'= -${b} ± √${delta} / 2.${a} \n y = -b + √Δ / 2.a \n y' = ${y1} \n y''= -${b} - √${delta} / 2.${a} \n y'' = ${y2}` )

console.log(delta)
console.log(y1)
console.log(y2)
