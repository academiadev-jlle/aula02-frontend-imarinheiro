document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    updateHint();
    document.querySelector('#btn-save').addEventListener('click', btnCadastrarAcao);
}

function updateHint() {
    const body = document.querySelector('tbody');
    const rows = body.querySelectorAll('tr');
    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.stock-price').textContent);
        const hint = verifyValueHint(price);
        const infoElement = row.querySelector('.hint');
        infoElement.textContent = hint;
        infoElement.classList.add(verifyValueClass(price));
        row.classList.add(verifyValueClass(price));
    });
}

function btnCadastrarAcao(event) {
    const form = document.querySelector('#form-stock');
    if(document.querySelector('p') !== null){
        document.querySelector('p').remove();
    }
    if (formIsValid(form)){
        formSave(form);
    }
    else{
        const errors = formErrors(form);
        showErrors(errors);
    }
}

function verifyValueHint(price) {
    if (price < 50.0) {
        return "Comprar Ação";
    }
    if (price > 50.0) {
        return "Vender Ação";
    }
    return "Manter Ação";
}


function verifyValueClass(price) {
    if (price < 50.0) {
        return "less";
    }
    if (price > 50.0) {
        return "more";
    }
    return "equal";
}

function formIsValid(form) {
    const price = parseFloat(form.price.value);
    if (isNaN(price) || price < 0){return false}
    if (form.stock.value === "" ){return false}
    if (form.url.value === "" ){return false}
    return true;
}

function formSave(form) {
    const name = form.stock.value;
    const url = form.url.value;
    const price = parseFloat(form.price.value);

    const rowElement = document.createElement('tr');
    const urlElement = document.createElement('a');
    const nameElement = document.createElement('td');
    const priceElement = document.createElement('td');
    const hintElement = document.createElement('td');

    hintElement.classList.add(verifyValueClass(price));
    rowElement.classList.add(verifyValueClass(price));

    urlElement.href = url;
    urlElement.target = "_blank";
    urlElement.title = name;
    urlElement.textContent = name;
    priceElement.textContent = price;
    hintElement.textContent = verifyValueHint(price);

    nameElement.appendChild(urlElement);
    rowElement.appendChild(nameElement);
    rowElement.appendChild(priceElement);
    rowElement.appendChild(hintElement);

    const tabela = document.querySelector('tbody');
    tabela.prepend(rowElement);
}

function formErrors(form) {
    const price = parseFloat(form.price.value);
    let errors = [];
    if (isNaN(price) || price < 0) {errors.push("Cotação: Apenas valores maiores que 0.00")}
    if (form.stock.value === "" ) {errors.push("Ação: Campo obrigatório")}
    if (form.url.value === "" ) {errors.push("URL: Campo obrigatório")}
    return errors;
}

function showErrors(errors) {
    const pElement =  document.createElement('p');
    const spanElement = document.createElement('span');
    const ulElement = document.createElement('ul');
    spanElement.textContent = "Verifique os erros abaixo:";
    pElement.append(spanElement);
    errors.forEach(error => {
        const liElement = document.createElement('li');
        liElement.textContent = error;
        ulElement.append(liElement);
    });
    pElement.append(ulElement);
    form.prepend(pElement);
}