# Posicionando elementos com Flexbox em CSS

## Objetivo

Construção de uma Landing page

## Tecnologias



## Introdução ao Flex Box

O Flexbox é um conceito do CSS3 que visa organizar os elementos de uma página HTML dentro de seus containers de forma dinâmica.

Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

## Flex container


É a tag que envolve os itens, será nela que iremos aplicar a propriedade “display: flex”. Transforma todos os seus itens filhos
em flex itens.

![image](https://user-images.githubusercontent.com/52088444/171762073-5d21daf8-790a-4757-8994-b6e2ca981415.png)

Propriedades relacionadas:

● display - que é o inicializador do container
● flex-direction - direciona o alinhamento dos itens , sejam em linhas ou colunas
● flex-wrap- se aplica na quebra de linha ou não
● flex-flow- abreviação para o direction ou wrap
● justify-content- que vai alinhar os itens do container de acordo com a sua direção
● align-items - que vai alinhar esses itens de acordo com o seu eixo do container
● align-content - alinhar as linhas do container


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


