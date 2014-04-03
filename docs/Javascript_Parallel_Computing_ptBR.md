# Iniciação Científica - Computação Paralela em Javascript

## Introdução
Essa pesquisa cientifica tem como ponto de partida a aplicação de conceitos e técnicas de computação paralela atraves da implementacao tecnicas e praticos de computação paralela tendo como ferramenta base a linguagem de programação Javascript.

### Justificativa (com embasamento teórico)
Com a crescente utilização da web como plataforma de desenvolvimento de aplicações, oferta de hardware de dispositivos moveis com poder de alto processamento cada vez maior, e a demanda por aplicações mais rápidas e que tenham baixo consumo de recursos desses dispositivos 

Com a utilização maciça de dispositivos moveis, e com o crescente poder de processamento que os novos dispositivos - seja ele celular ou tablet - possuem, aliado ao novo sistema operacional da Mozilla, chamado "Firefox OS", que tem como filosofia o termo "Open Web"

### Problema de Pesquisa
Muitas aplicações feitas na web hoje, demandam de velocidade de processamento de código Javascript e poder de rápida renderização desse código no lado cliente (ou seja, o browser).

Como temos uma gama de diferentes processadores (single core, dual core, quad core, etc) nos dispositivos, as implementações de código para interpretação e renderização de Javascript nas engines JS dos browser ainda é muito mal explorada na parte de conceitos de computação paralela.

### Objetivo

##### Geral
Essa pesquisa tem como objetivo utilizar e implementar conceitos e metodologias relacionadas a computação paralela em uma browser engine utilizando principalmente a linguagem de programação Javascript.

#### Especifico
A utilização de conceitos de computação paralela, paralelismo entre outros, será aplicada ao core de interpretação da engine de Javascript da Mozilla chamado "IonMonkey". Com a aplicação desses conceitos, teremos ganho na performance da engine Ionmonkey, pois a utilizando melhor os recursos dos processadores, a interpretação e renderização desse código sera muito mais rápida e eficiente.

This project have the goal with implement some parallel computing technics and concepts using the Javascript language (most of the time) at the SpiderMonkey JIT (Just in time Compiler).

## Método
Utilizando a engine de interpretação e renderização de javascript da mozilla, chamada Ionmonkey, iremos mapear as areas da engine JS que mais necessitam da aplicação de técnicas de computação paralela.

Tendo um mapeamento das areas, a aplicação desses conceitos sera feita da seguinte forma:
 - Entendimento do código utilizado atualmente
 - Entendimento do problema que esse recurso causa
 - Estudo da melhor técnica a ser utilizada
 - Implementação da tecnica escolhida
 - Testes de funcionalidade
 	- Testes funcionais serão escritos utilizando a plataforma Javascript Node.js
 - Testes de performance
 	- Teste de performance serão feitos utilizando os pacotes NPM disponíveis para a plataforma de Javascript Node.js
 - Descrição da solução utilizada
 


## Cronograma

## Referências Bibliográficas
 - FLANAGAN, David. **JavaScript: The Definitive Guide**. 6th Edition, O'Reilly Media, 2011. 
 - ZAKAS, Nicholas C. **High Performance JavaScript**. O'Reilly Media, 2010.
 - STEFANOV, Stoyan. **JavaScript Patterns**. O'Reilly Media, 2010.
 - MACCAW, Alex. **JavaScript Web Applications**. O'Reilly Media, 2011.
 - WILSON, Jim R. **Node.js the Right Way**. Pragmatic Bookshelf, 2013.
 - **Javascript JIT** - https://wiki.mozilla.org/Modules/All#JavaScript_JIT
 - **asm.js AOT compilation and startup performance** - https://blog.mozilla.org/luke/2014/01/14/asm-js-aot-compilation-and-startup-performance/
