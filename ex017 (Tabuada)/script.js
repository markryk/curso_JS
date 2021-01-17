function gerar() {
    var num = document.getElementById('txtNum')
    var res = document.querySelector('div#result')
    var soma
    var subtr
    var mult
    var div

    if (num.value.length == 0) window.alert('Preencha o campo!')
    else {
        let n = Number(num.value)
        tabSoma.innerHTML = ''
        tabSubtr.innerHTML = ''
        tabMult.innerHTML = ''
        tabDivReal.innerHTML = ''
        tabDivInt.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            soma = n + i
            subtr = n - i
            mult = n * i
            div = n / i
            div2 = n / i

            if (n % i == 0) div = Math.trunc(div)
            else div = div.toFixed(5).replace('.',',')

            tabSoma.innerHTML += `${n} + ${i} = ${soma}\n`
            tabSubtr.innerHTML += `${n} - ${i} = ${subtr}\n`
            tabMult.innerHTML += `${n} * ${i} = ${mult}\n`
            tabDivReal.innerHTML += `${n} / ${i} = ${div}\n`
            tabDivInt.innerHTML += `${n} / ${i} = ${Math.trunc(div2)}, resto ${n % i}\n`
        }
    }
}