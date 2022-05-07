
var sal = Number(prompt("Digite o seu salário: "));


if (sal <= 280){
    let aumento = sal * (20/100);
    let aumentoporct = 20;
    let sal_final = aumento + sal; 

    alert(`O seu salário é de: R$ ${sal} \n
    Será aplicado um aumento de ${aumentoporct}% \n
    O aumento que você receberá é de: R$ ${aumento} \n
    Portanto a partir de agora você receberá: R$ ${sal_final}`);
}


if ((sal < 700) && (sal >= 280)){
    let aumento = sal * (15/100);
    let aumentoporct = 15;
    let sal_final = aumento + sal; 

    alert(`O seu salário é de: R$ ${sal} \n
    Será aplicado um aumento de: ${aumentoporct}% \n
    O aumento que você receberá é de: R$ ${aumento} \n
    Portanto a partir de agora você receberá: R$ ${sal_final}`);
}


if ((sal < 1500) && (sal >= 700)){
    let aumento = sal * (10/100);
    let aumentoporct = 10; 
    let sal_final = aumento + sal; 

    alert(`O seu salário é de: R$ ${sal} \n
    Será aplicado um aumento de ${aumentoporct}% \n
    O aumento que você receberá é de: R$ ${aumento} \n
    Portanto a partir de agora você receberá: R$ ${sal_final}`);
}


if (sal >= 1500){
    let aumento = sal * (5/100);
    let aumentoporct = 5;
    let sal_final = aumento + sal; 

    alert(`O seu salário é de: R$ ${sal} \n
    Será aplicado um aumento de ${aumentoporct}% \n
    O aumento que você receberá é de: R$ ${aumento} \n
    Portanto a partir de agora você receberá: R$ ${sal_final}`);
}