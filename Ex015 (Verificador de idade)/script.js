function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var h = window.document.getElementById('hora')
    var data = new Date()
    var hora = data.getHours()
    //var hr = data.getTime()
    //var hora = 0 //Para testar outras horas manualmente

    if (hora >= 0 && hora < 4) {
        img.src = 'img/img_madrugada.png'
        document.body.style.background = '#101116'
        saudacao.innerHTML = 'Boa madrugada'
    } else if (hora >= 4 && hora < 6) {
        img.src = 'img/img_madrugada_manha.png'
        document.body.style.background = '#225C6F'
        saudacao.innerHTML = 'Bom dia'
    } else if (hora >= 6 && hora < 7) {
        img.src = 'img/img_inicio_manha.png'
        document.body.style.background = '#CEC8AE'
        saudacao.innerHTML = 'Bom dia'
    } else if (hora >= 7 && hora < 11) {
        img.src = 'img/img_final_manha.png'
        document.body.style.background = '#CCC1BB'
        saudacao.innerHTML = 'Bom dia'
    } else if (hora >= 11 && hora < 16) {
        img.src = 'img/img_tarde.png'
        document.body.style.background = '#FCBB66'
        saudacao.innerHTML = 'Boa tarde'
    } else if (hora >= 16 && hora < 18) {
        img.src = 'img/img_tarde_16.png'
        document.body.style.background = '#845565'
        saudacao.innerHTML = 'Boa tarde'
    } else if (hora >= 18 && hora < 19) {
        img.src = 'img/img_fim_de_tarde.png'
        document.body.style.background = '#524269'
        saudacao.innerHTML = 'Boa noite'
    } else if (hora >= 19 && hora <= 23) {
        img.src = 'img/img_noite.png'
        document.body.style.background = '#2A4755'
        saudacao.innerHTML = 'Boa noite'
    } else window.alert('Hora inválida')
    msg.innerHTML = `Agora são ${hora} horas.`
    h.innerHTML = `${data}`
}