# javascript
 Curso de Javascript do CursoemVideo








## Operadores de lógicas e junção lógica

!       NÃO(NOT)  - Inverte o valor da condição 
&&      E (AND)   - As DUAS condições precisam ser VERDADEIRA
||      OU(OR)    - Somente UMA condição precisa ser VERDADEIRA      


O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentenção que vem na sequência.



#### Exemplos:

a !== b        // o valor de A é diferente de B
x !=== y       // o valor e o tipo de X são diferentes de Y  




#### As condições lógicas são convertidas em números binários:
true é equivcalente a 1
false é equivalente a 0




#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condilçao lógica, economiza IFs

Exemplo:

ver meuCarro = cor == 'preto' ? 'preto' : 'branco';

## If
If (ç...) {
    ...
}

## Else
else {
}

if (corr == 'preto'){
    meuCarro = 'preto';   
} else{
    meuCarro = 'cinza';
}

*
corr = 'branco'

# Else If

if (corr == 'preto'){
    meuCarro = 'preto';   
} else if (corr == 'vermelho'){
    meuCarro = 'cinza';
} else if (corr == 'amarelo'){
    meuCarro = 'azul';
} else {
    meuCarro = 'roxo';
}



## Switch

switch (corr){
    case 'branco' :
        meuCarro = 'branco'
        break;
    case 'vermelho':
        meuCarro = 'vermelho'
        break;
    case 'amarelo':
        meuCarro = 'amarelo'
        break;
    default :
        console.log('Não temos a cor desejada');
}


## media
let n1 = 10;
let n2 = 8;
let n3 = 9;
let n4 = 7;

let media = (n1 + n2 + n3 + n4)/ 4;
if (media > 7){
    console.log('Aluno Aprovado');
} else {
    console.log('Aluno Reprovado');
}



## Laços de Repetição

for([expressaoInicial]; [condicao]; [incremento])
...


var ();

for(condição){
    execução
}

// fazer a revisão do carro aos 10 km

então

var km;
var revisao = 10;

for(km = 0; km < revisao; km++ ){
    console.log('apenas' + km + 'kms então pode rodar!');
}




#### Calculo de média de alunos

var aluno = [
    [6, 7, 8, 6],
    [8, 5, 4, 2],
    [10, 8, 3, 9]
]
    var nota = 0

for (var i = 0; i < aluno.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log('Aluno: 'aluno);

    for( c = 0; c < aluno.length; c++){
         nota += aluno[i]    
    }

    media = nota / 4

    if(media >= 7){
        resultado = 'Aprovado!';
    } else{
        resultado = 'Reprovado';
    }

    console.log('Media: ' + media + ' - ' + resultado);
}


#### While

while ( condicao ){
    [execucao]
}


var contador = 0
while (1 < 10){
    contador++
    console.log(contador);
}

------------------

var hora = 23;
while (hora > 0){
    hora --;
    console.log(hora);
}


## Comparadores Lógicos: teste lógico, retorno booleano ( true/ false )

==     igualdade entre sentenças ( valor )
!=     diferença entre sentençãs ( valor )
===    igualdade entre sentenças ( valor e tipo)
!==    diferença entre sentenças ( valor e tipo)

a == b = true
a != b = false

* Atribuição

a = b 
b = 4