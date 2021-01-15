function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (fAno.value == 1991) img.setAttribute('src', 'img/foto_marcos.png')
            else {
                if (idade >= 0 && idade < 3) {
                    //Bebê
                    img.setAttribute('src', 'img/foto_bebe_m.png')
                } else if (idade < 10) {
                    //Criança
                    img.setAttribute('src', 'img/foto_crianca_m.png')
                } else if (idade < 21) {
                    //Adolescente
                    img.setAttribute('src', 'img/foto_adolescente_m.png')
                } else if (idade < 50 && idade != 30) {
                    //Adulto
                    img.setAttribute('src', 'img/foto_adulto_m.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'img/foto_idoso_m.png')
                }
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'img/foto_bebe_f.png')
            } else if (idade < 10) {
                //Criança
                img.setAttribute('src', 'img/foto_crianca_f.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'img/foto_adolescente_f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/foto_adulto_f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/foto_idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}