// 1 -
// Escreva uma função que possa ser utilizada para fazer a comparação de dois
// objetos pelos valores de suas propriedades
// Exemplo de retorno esperado:
// let obj1 = { ‘nome’: ‘Pedro’ };
// let obj2 = { ‘nome’: ‘Pedro’ };
// console.log(obj1 === obj2); // false!
// console.log(deepEqual(obj1, obj2)); // true!
// Considere que o seu objeto pode ter outros objetos como propriedade :)

let deepEquals = (a, b) => {
    if (typeof (a) !== typeof (b) &&
        (Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(b).length)) {
        return false;
    }
    for (let i = 0; i < Object.getOwnPropertyNames(a).length; i++) {
        let propName = Object.getOwnPropertyNames(a)[i];
        if (a[propName] !== b[propName]) {
            if (JSON.stringify(a[propName]) === JSON.stringify(b[propName])) {
                continue;
            }
            return false;
        }
    }
    return true;
};


let isEqualsLazy = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};




jhon1 = {
    "titulo": "Jhon Snow",
    "resumo": `Filho ilegítimo de Ned Stark, o honorável Lorde de Winterfell, 
    uma fortaleza ancestral no Norte do reino de Westeros.`,
    "birth": new Date(1986, 12, 26),
    "house": ["Stark"]
};

jhon2 = {
    "titulo": "Jhon Snow",
    "resumo": `Filho ilegítimo de Ned Stark, o honorável Lorde de Winterfell, 
    uma fortaleza ancestral no Norte do reino de Westeros.`,
    "birth": new Date(1986, 12, 26),
    "house": ["Stark"]
};

arya = {
    "titulo": "Arya Stark",
    "resumo": `segunda filha e o terceiro dos filhos de Lorde Eddard "Ned" Stark e Lady Catelyn Stark.
    Ela é uma tomboy, obstinada, independente, despreza as atividades femininas tradicionais e muitas 
    vezes é confundida com um garoto. Ela usa um pequeno espadim chamado "Needle", um presente de seu 
    meio-irmão, Jon Snow`,
    "birth": new Date(1997, 4, 15),
    "house": ["Stark"]
};


function assertEquals(result, expected, msg="") {
    if (result === expected) {
        console.log(`Passou: ${msg}`);
    } else {
        console.log(`Falhou: ${msg}`);
    }
}


assertEquals(deepEquals(jhon1, jhon1), true, "deepEquals(jhon1, jhon1)");
assertEquals(deepEquals(jhon1, jhon2), true, "deepEquals(jhon1, jhon2)");
assertEquals(deepEquals(jhon1, arya), false, "deepEquals(jhon1, arya)");

assertEquals(isEqualsLazy(jhon1, jhon1), true, "isEqualsLazy(jhon1, jhon1)");
assertEquals(isEqualsLazy(jhon1, jhon2), true, "isEqualsLazy(jhon1, jhon2)");
assertEquals(isEqualsLazy(jhon1, arya), false, "isEqualsLazy(jhon1, arya)");
