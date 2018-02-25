# Desafio da semana #4

``js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruty = function(a) {
    return a ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruty(0)
isTruty(-0)
isTruty(false)
isTruty(undefined)
isTruty(null)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruty(1)
isTruty(true)
isTruty("String")
isTruty('String')
isTruty(1.2)
isTruty(70)
isTruty(99)
isTruty(10)
isTruty(20)
isTruty(30)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'hyunday',
    modelo: 'hb20',
    placa: 'OOS2806',
    ano: 2015,
    cor: 'branco',
    quantasPortas: 5,
    assentos: 5 ,
    quantidadePessoas: 5
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(novaCor){
    carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoa = function(numeroPessoas){
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    if( carro.quantidadePessoas === carro.assentos ){
        return 'O carro já está lotado!';
    }

    if( totalPessoas > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
        return 'Só cabem mais ' + quantasPessoasCabem + pluralSingular;
    }

    carro.quantidadePessoas += numeroPessoas    
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor()
"branco"

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')
undefined

// E agora, qual a cor do carro?
carro.obterCor()
"vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')
undefined


// E agora, qual a cor do carro?
carro.obterCor()
"verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()
"Esse carro é um hyunday hb20"

carro.adicionarPessoa(2)
"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoa(4)
"Só cabem mais 3 pessoas"

// Faça o carro encher.
carro.adicionarPessoa(3)
"Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1
1

// Adicione 10 pessoas no carro.
carro.adicionarPessoa(10)
"Só cabem mais 4 pessoas"

// Quantas pessoas temos no carro?
carro.quantidadePessoas
1
```
