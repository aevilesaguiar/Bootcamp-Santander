# Posicionando elementos com Flexbox em CSS

## Objetivo

Construção de uma Landing page - Flex projeto

## Tecnologias

- FlexBox em CSS

## Introdução ao Flex Box

O Flexbox é um conceito do CSS3 que visa organizar os elementos de uma página HTML dentro de seus containers de forma dinâmica.

Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.


## Flex container


É a tag que envolve os itens, será nela que iremos aplicar a propriedade “display: flex”. Transforma todos os seus itens filhos
em flex itens.

![image](https://user-images.githubusercontent.com/52088444/171762073-5d21daf8-790a-4757-8994-b6e2ca981415.png)

Propriedades relacionadas:

● display - que é o inicializador do container
● flex-direction - direci. É a  propriedade que estabelece o eixo principal do container,
definindo assim a direção que os flex items são colocados no flex container (temos dois eixos linhas(row) e colunas (column - ondenação de cima para baixo e tem o column reverse também)), temos row-reverse que altera o modo leitura ele inverte ex: 1234-> 4321
● flex-wrap- se aplica na quebra de linha ou não.Por padrão não quebram linham, isso faz com que os flex-itens sejam compactados além do limite do conteudo - temos nowrap: é o padrão, não permite quebra de linha, elementos podem vazar do container. temos o wrap: que permite a quebra de linha, se o elemento não comportar ele pasa o componente para alinha de baixo, wrap-reverse: permite a quebra de linha no sentido contrario.
● flex-flow- abreviação para o flex-direction ou flex-wrap. Porem seu usso não é tão comum, visto que 
quando mudamos o flex direction para column, mantemos o padrão do flex-wrap que é now-wrap
● justify-content- que vai alinhar os itens do container de acordo com a sua direção. Ela trata a distribuição de espaço entre eles.. Caso os itens estejam ocupando 100% de todo o container, ela não se aplica.
● align-items - que vai alinhar esses itens de acordo com o seu eixo do container
● align-content - alinhar as linhas do container

flex-shrink
Esta propriedade define a proporção com que um item deve encolher caso seja necessário. Por padrão seu valor é 0, o que indica que o item não deve encolher, e são aceitos apenas valores numéricos positivos.


Qual a propriedade que possibilita fazer o alinhamento individual de um flex item em relação ao eixo do flex container?
align-self

## Flex Item

Ele nada mais é do que os elementos filhos diretos do Flex Container. E também pode se tornar flex container

![image](https://user-images.githubusercontent.com/52088444/171762664-0f0d1fd7-1c05-4139-b8a3-581b11afce8e.png)

Propriedades relacionadas:

● flex-grow - defini o fator de crescimento
● flax-basis- defini o tamanho inial desse item antes da distribuição do espaço restante dentro do container
● flex-shrink- defini a cpacidade de redução
● flex- abreviação para as tres propriedades acima
● order- que é relacionado a ordem de distribuição desses itens
● align-self- define o alinhamento especifico dentro do nosso container

## Fundamentos - Flex Container

Display flex Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.


