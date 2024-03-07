agora = new Date()     // HORAS ATUAIS
hora = agora.getHours()  // HORAS ATUAIS 
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if ( hora <= 18 ){
    console.log('Boa tarde!')
} else if ( hora > 18){
    console.log('Boa noite!')
} else if ( hora > 0  && hora < 5){
    console.log('Boa madrugada!')
}