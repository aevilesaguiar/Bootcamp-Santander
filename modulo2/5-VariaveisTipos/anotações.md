- Variaveis

var: escopo global ou local
const: bloco
let: bloco e reatribuir

Constantes: declaradas sempre em maiusculas

Estruturas de dados:Uma estrutura de dados é uma maneira particular de organizar dados em um computador com o intuito de usar os recursos de modo eficaz. As estruturas de dados e os algoritmos são a base de todas as soluções para qualquer problema de programação.

Quais são os tipos de dados do JavaScript?
Sete tipos de dados são: primitives:
Boolean.
Null.
Undefined.
Number.
BigInt.
String.
Symbol.

Tipagem Dinâmica

JavaScript é uma linguagem de tipagem dinâmica. Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. Isso também significa que você pode reatribuir uma mesma variável com um tipo diferente:

Valores Primitivos
Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar). Por exemplo e diferentemente da linguagem C, Strings são imutáveis. Nós nos referimos a valores desse tipo como "valores primitivos".


Tipo "Boolean"
Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).

Tipo "Null"
O tipo Null tem exatamente um valor: null(nulo). Veja null e Null para mais detalhes.

Tipo "Undefined"
Uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido). Veja undefined e Undefined para mais detalhes.

Tipo "Number"
De acordo com os padrões ECMAScript, existe somente um tipo numérico. O double-precision 64-bit binary format IEEE 754 value (número entre -(253 -1) e 253 -1). Não existe um tipo específico para inteiros. Além de poderem representar números de ponto-flutuante, o tipo number possui três valores simbólicos: +Infinity, -Infinity, e NaN (não numérico).

Para verificar o maior ou o menor valor disponível dentro de +/-Infinity, você pode usar as constantes Number.MAX_VALUE ou Number.MIN_VALUE, e a partir do ECMAScript 6, você também consegue verificar se um número está dentro da região de um ponto flutuante do tipo double-precision, usando Number.isSafeInteger(), como também Number.MAX_SAFE_INTEGER, e Number.MIN_SAFE_INTEGER. Fora dessa região, números inteiros em JavaScript não são mais precisos e serão uma aproximação de um número de ponto flutuante do tipo double-precision.

Tipo "String"
O tipo String em JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. Cada elemento na string ocupa uma posição na string. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma string é o número de elementos nela.

Diferente de linguagens como C, strings em JavaScript são imutáveis. Isto significa que: uma vez criada a string, não é possível modificá-la. Entretanto, ainda é possível criar outra string baseada em um operador na string original. Por exemplo:

Uma substring da original a partir de letras individuais ou usando String.substr().
Uma concatenação de duas strings usando o operador (+) ou String.concat().

Coleções indexadas: Arrays e Arrays tipados

Arrays são objetos comuns nos quais existe uma relação particular entre propriedades de chaveamento inteiro e a propriedade 'length'. Além disso, arrays herdam de Array.prototype que nos dá vários metodos úteis para manipulação de arrays. Por exemplo, indexOf (procura um valor no array) ou push (adiciona um valor no array), etc. Isso faz com que os Arrays sejam candidatos perfeitos para representação de listas e conjuntos.

Typed Arrays (arrays tipados) são novos no JavaScript com ECMAScript Edition 6 e apresenta uma visão básica similar a de um array para um data buffer binário. A tabela a seguir mostra o equiva