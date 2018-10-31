// 2)
// Utilize a mesma estrutura criada no exercício anterior, porém neste exercício crie
// uma tabela com dados vindos de uma API Rest qualquer.
// O formulário pode servir para selecionar alguma entidade a ser carregada ou criar um filtro na API.
// Pode ser por exemplo: https://pokeapi.co, ou https://swapi.co/
// Obs: para resolução deste exercício, aprenda a utilizar o objeto XMLHttpRequest para
// criar uma requisição HTTP GET para a API escolhida.
// Melhore a legibilidade do seu código utilizando Promises.

document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    document.querySelector('#home').addEventListener('click', loadHome);
    document.querySelector('#starships').addEventListener('click', fetchDataStarships);
    document.querySelector('#planets').addEventListener('click', fetchDataPlanets);
    document.querySelector('#people').addEventListener('click', fetchDataPeople);
}

function loadHome(){
    window.location.href = 'index.html';
}


function fetchDataStarships(event) {
    document.querySelector('#starships').classList.add('active');
    document.querySelector('#planets').classList.remove('active');
    document.querySelector('#people').classList.remove('active');
    let table = document.getElementsByTagName("table")[0];
    table.parentNode.removeChild(table);
    const article = document.querySelector("article");
    const header = ["Starship Name", "Modelo", "Fabricante"];
    const url = "https://swapi.co/api/starships";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 || xhr.status === "200") {
            const data = JSON.parse(this.responseText).results;
            article.appendChild(createTable(data, header, 'starships'));
        } else {
            console.error("ERRO");
        }
    };
    xhr.send();
}


function fetchDataPlanets(event) {
    document.querySelector('#starships').classList.remove('active');
    document.querySelector('#planets').classList.add('active');
    document.querySelector('#people').classList.remove('active');
    let table = document.getElementsByTagName("table")[0];
    table.parentNode.removeChild(table);
    const article = document.querySelector("article");
    const header = ["Planet Name", "Terrain", "Climate"];
    const url = "https://swapi.co/api/planets";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 || xhr.status === "200") {
            const data = JSON.parse(this.responseText).results;
            article.appendChild(createTable(data, header, 'planets'));
        } else {
            console.error("ERRO");
        }
    };
    xhr.send();
}


function fetchDataPeople(event) {
    document.querySelector('#starships').classList.remove('active');
    document.querySelector('#planets').classList.remove('active');
    document.querySelector('#people').classList.add('active');
    let table = document.getElementsByTagName("table")[0];
    table.parentNode.removeChild(table);
    const article = document.querySelector("article");
    const header = ["Character Name", "Gender", "Birth Year"];
    const url = "https://swapi.co/api/people";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 || xhr.status === "200") {
            const data = JSON.parse(this.responseText).results;
            article.appendChild(createTable(data, header, 'people'));
        } else {
            console.error("ERRO");
        }
    };
    xhr.send();
}

function createTable(items, header, type) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');
    thead.appendChild(createRow(header, 'th', type));
    items.forEach(item => {
        tbody.appendChild(createRow(item, 'td', type));
    });
    table.classList.add('ui', 'inverted', 'table');
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}


function createRow(item, elemento, type) {
    const tr = document.createElement('tr');
    const td1 = document.createElement(elemento);
    const td2 = document.createElement(elemento);
    const td3 = document.createElement(elemento);

    if (elemento === 'td') {
        td1.textContent = item.name;
        if(type === 'starships') {
            td2.textContent = item.model;
            td3.textContent = item.manufacturer;
        }
        if (type ==='planets'){
            td2.textContent = item.terrain;
            td3.textContent = item.climate;
        }
        if (type ==='people'){
            td2.textContent = item.gender;
            td3.textContent = item.birth_year;
        }
    } else {
        td1.textContent = item[0];
        td2.textContent = item[1];
        td3.textContent = item[2];
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    return tr;
}