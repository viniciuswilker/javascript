function verificar(){
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')
    if( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        gênero = ''
        img = document.createElement ('img')
        img.setAttribute ('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //
                img.setAttribute('src', 'fotohomembebe.png')
            } else if (idade < 27){
                //jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'fotohomemadulto.png')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotomulherbebe.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'fotomulheradulta.png')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
} 