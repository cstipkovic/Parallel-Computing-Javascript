# Iniciação Científica - Computação Paralela em Javascript

## Introdução
A pesquisa cientifica de computação paralela em Javascript tem como ponto de partida a aplicação de conceitos e técnicas de computação paralela tendo como ferramenta base a linguagem de programação Javascript. 

### Justificativa (com embasamento teórico)
Com a crescente utilização da web como plataforma de desenvolvimento de aplicações, oferta de hardware com alto poder de processamento em dispositivos móveis cada vez maior, e a demanda por aplicações mais rápidas e que tenham baixo consumo de recursos desses dispositivos, a utilização de Javascript para tornar essas aplicações ricas e com usabilidade e acessibilidade é quase que mandatória.

Tendo em vista a recente evolução e amadurecimento da linguagem Javascript (que antes era apenas interpretada pelo browser), o surgimento do framework NodeJS, a corrida dos browsers mais populares como Mozilla Firefox, Google Chrome, Apple Safari, entre outros, para oferecer aos usuários e principalmente aos desenvolvedores, engines de Javascript cada vez mais rápidas e eficientes, é notório que a aplicação de técnicas de computação paralela aos recursos das engines de interpretação de Javascript, podem contribuir para melhor desempenho dos browser, o que pode trazer melhor experiência para os usuários, melhor recurso computacional para os desenvolvedores e melhor utilização dos recursos computacionais.

Lembrando também que temos atualmente um sistema operacional inteiramente criado utilizando ferramentas e linguagems voltadas para a Web como HTML5, CSS e Javascript, que se chama Firefox OS.

Nele temos o browser Mozilla Firefox como base para o sistema operacional, ou seja, parte desse sistema é mantido e executado graças a engine de interpretação de Javascript IonMonkey e seu JIT (just in time compiler).

Optamos por utilizar os recursos de Javascript Engine e JIT da Mozilla, pois sabemos que todos os códigos estão disponíveis para utilização e alteração (liberdade garantida pela licença de utilização de código da própria Mozilla) e por sabermos que o projeto Mozilla sempre esteve aberto a colaboração de voluntários que queiram melhorar a web como um todo.

### Problema de Pesquisa
Muitas aplicações feitas para web hoje, demandam de velocidade de processamento na interpretação da linguagem Javascript e poder de rápida renderização desse código no lado cliente (ou seja, o browser).

Como temos uma gama de diferentes processadores (single core, dual core, quad core, etc) nos dispositivos, as implementações de código para interpretação e renderização de Javascript nas engines dos browser ainda não é muito bem explorado quanto a utilização de conceitos de computação paralela.

### Objetivo

#### Geral
A pesquisa tem como objetivo implementar e utilizar conceitos de computação paralela na engine de interpretação e renderização de Javascript da Mozilla.

#### Especifico
A utilização de conceitos de computação paralela, paralelismo, entre outros, será aplicada ao core de interpretação da engine de Javascript da Mozilla chamado "IonMonkey", bem como ao JIT (just in time compiler) que é parte da Javascript Engine. 

Com a aplicação desses conceitos, teremos ganho na performance da engine Ionmonkey, pois utilizando melhor os recursos do processadore, a interpretação e renderização desse código pelo JIT, será muito mais rápida, e com utilização mais eficiente dos recursos da maquina.

## Método
Utilizando a engine de interpretação e renderização de javascript da mozilla, chamada Ionmonkey, iremos mapear as areas da engine JS que mais necessitam da aplicação de técnicas de computação paralela.

Tendo um mapeamento das areas, a aplicação desses conceitos sera feita da seguinte forma:
 - Entendimento do código utilizado atualmente
 - Entendimento do problema que esse recurso causa
 - Estudo da melhor técnica a ser utilizada
 - Implementação da técnica escolhida
 - Testes de funcionalidade
 	- Testes funcionais serão escritos utilizando a plataforma Javascript Node.js
 - Testes de performance
 	- Teste de performance serão feitos utilizando os bundleds NPM (Node Package Manager) disponíveis para a plataforma de Javascript Node.js
 - Descrição da solução utilizada

## Cronograma

### Maio/2014

### Junho/2014

### Julho/2014

### Agosto/2014

### Setembro/2014

### Outubro/2014

### Novembro/2014

### Dezembro/2014

### Janeiro/2014

### fevereiro/2014

### Março/2014

### Abril/2014


## Referências Bibliográficas

### Livros
 - FLANAGAN, David. **JavaScript: The Definitive Guide**. 6th Edition, O'Reilly Media, 2011. 
 - ZAKAS, Nicholas C. **High Performance JavaScript**. O'Reilly Media, 2010.
 - STEFANOV, Stoyan. **JavaScript Patterns**. O'Reilly Media, 2010.
 - MACCAW, Alex. **JavaScript Web Applications**. O'Reilly Media, 2011.
 - WILSON, Jim R. **Node.js the Right Way**. Pragmatic Bookshelf, 2013.
 - Trostler, Mark Ethan. **Testable JavaScript**. O'Reilly Media, 2013.
 - ZAKAS, Nicholas C. **Maintainable JavaScript**. O'Reilly Media, 2012.
 - Bolin, Michael. **Closure: The Definitive Guide**. O'Reilly Media, 2010.
 - Burnham, Trevor. **Async JavaScript**. The Pragmatic Programmers, 2012.
 - Saleh, Hazem. **JavaScript Unit Testing**. Packt Publishing, 2013.
 - Fogus, Michael. **Functional JavaScript**. O'Reilly Media, 2013.
 
### Links
 - **CommonJS Specs Wiki** - http://wiki.commonjs.org/wiki/CommonJS
 - **Javascript Documentation** - https://developer.mozilla.org/en-US/docs/Web/JavaScript
 - **Javascript JIT** - https://wiki.mozilla.org/Modules/All#JavaScript_JIT
 - **asm.js AOT compilation and startup performance** - https://blog.mozilla.org/luke/2014/01/14/asm-js-aot-compilation-and-startup-performance/
