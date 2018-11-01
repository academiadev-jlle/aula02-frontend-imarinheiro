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
    return typeof (a) === typeof (b) && 
    Object.getOwnPropertyNames(a).length === Object.getOwnPropertyNames(b).length && 
    a === b;
};

jhon1 = {
    "titulo": "Jhon Snow",
    "resumo": `Filho ilegítimo de Ned Stark, o honorável Lorde de Winterfell, 
    uma fortaleza ancestral no Norte do reino de Westeros.`,
    "birth": new Date(1986, 12, 26),
    "house": ["Stark"]
}

jhon2 = {
    "titulo": "Jhon Snow",
    "resumo": `Filho ilegítimo de Ned Stark, o honorável Lorde de Winterfell, 
    uma fortaleza ancestral no Norte do reino de Westeros.`,
    "birth": new Date(1986, 12, 26),
    "house": ["Stark"]
}

arya = {
    "titulo": "Arya Stark",
    "resumo": `segunda filha e o terceiro dos filhos de Lorde Eddard "Ned" Stark e Lady Catelyn Stark.
    Ela é uma tomboy, obstinada, independente, despreza as atividades femininas tradicionais e muitas 
    vezes é confundida com um garoto. Ela usa um pequeno espadim chamado "Needle", um presente de seu 
    meio-irmão, Jon Snow`,
    "birth": new Date(1997, 4, 15),
    "house": ["Stark"]
}
console.log(typeof (jhon1));
console.log(deepEquals(jhon1, jhon1)); //true
console.log(deepEquals(jhon1, jhon2)); //true
console.log(deepEquals(jhon1, arya)); //false


var objeto1 = {id: 1 , name: 'atila'}
var objeto2 = {id: 1 , name: 'atila'}
var objeto3 = {id: 2 , name: 'marcos'}