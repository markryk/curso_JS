var num = document.getElementById('txtNum')
var lista = document.querySelector('select#list')
var res = document.querySelector('div#res')
var arrayNum = []

/*function isEmpty() {
    if (num.value.length == 0) return true
    else return false
}*/

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) return true
    else return false
}

/*function inLista(n) {
    for (let i = 0; i < arrayNum.length(); i++) {
        if (arrayNum[i] == n) {
            return true
            break
        } else return false
    }
}*/
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) return true
    else return false
}

function adicionar() {    
    //if (!isEmpty() && isNumero(num.value) && !inLista(num.value, lista)) alert('[ERRO] Tudo ok')
    if (isNumero(num.value) && !inLista(num.value, arrayNum)) {
        arrayNum.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else alert('[ERRO] Valor inválido ou já encontrado na lista')
    num.value = ''
    num.focus()
}

function maior(array) {
    let M = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > M) M = array[i]
    }
    return M
}

function menor(array) {
    let m = array[0]
    for (let i in array) {
        if (array[i] < m) m = array[i]
    }
    return m
}

function media(array) {
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    med = soma / array.length
    return med
}

function soma(array) {
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    return soma
}

function finalizar() {
    if (arrayNum.length == 0) alert('[ERRO] Insira valores antes de finalizar')
    else {
        let total = arrayNum.length
        let prim = arrayNum[0]
        let ult = arrayNum[arrayNum.length - 1]
        res.innerHTML = ''
        res.innerHTML += `Total de elementos: <strong>${total}</strong><br>`
        res.innerHTML += `1º elemento: <strong>${prim}</strong><br>`
        res.innerHTML += `Último elemento <strong>${ult}</strong><br>`
        res.innerHTML += `Maior valor: <strong>${maior(arrayNum)}</strong><br>`
        res.innerHTML += `Menor valor: <strong>${menor(arrayNum)}</strong><br>`
        res.innerHTML += `Soma dos valores: <strong>${soma(arrayNum)}</strong><br>`
        res.innerHTML += `Média dos valores: <strong>${media(arrayNum)}</strong><br>`
    }
}