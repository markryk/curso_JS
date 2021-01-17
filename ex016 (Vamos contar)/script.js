function contar() {
    let ini = document.getElementById('txtIni')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.querySelector('div#result')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos!')
        res.innerHTML = 'Preencha todos os campos'
    }
    else {
        res.innerHTML = 'Contando: <br>'
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert(`Passo inválido! [${p}] Considerando passo 1`)
            p = 1
        }

        if (i < f) {
            msg.innerHTML = `Início > fim ➡️ ${i} > ${f} ➡️ Ordem crescente`
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} 👉`
            }
        } else if (i > f) {
            msg.innerHTML = `Início < fim ➡️ ${i} < ${f} ➡️ Ordem decrescente`
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 👉`
            }
        } else {
            msg.innerHTML = `Início == fim ➡️ ${i} = ${f} ➡️ Impossível contar`
            window.alert('[ERRO] Números iguais, não tem como contar!')
        }
        res.innerHTML += '🏁'    
    }
}