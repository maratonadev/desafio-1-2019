[![IBM Cloud](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://cloud.ibm.com)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)
[![Slack](https://maratona-inviter.mybluemix.net/badge.svg)](https://ibm.biz/convite-slack)

# Desafio 01 | Grupo Pão de Açucar

* [Desafio](#desafio)
* [Avaliação](#avaliação)
* [Comece aqui](#comece-aqui)
* [Pré-requisitos](#pré-requisitos)
* [Treinamento no Watson Assistant](#treinamento-no-watson-assistant)
    * [Veja como criar um Chatbot com Watson Assistant](#veja-como-criar-um-chatbot-com-watson-assistant)
    * [Credenciais do Watson Assistant](#credenciais-do-watson-assistant)
* [Aplicação na nuvem](#aplicação-na-nuvem)
    * [Veja como configurar o IBM Continuous Delivery](#veja-como-configurar-o-ibm-continuous-delivery)
* [Submissão](#submissão)
* [Material de Apoio](#material-de-apoio)
* [Dúvidas](#dúvidas)
* [PDF do Desafio](#pdf-do-desafio)
* [License](#license)

## Desafio

O Grupo Pão de Açúcar (GPA), lançou no final de 2018 o Pão de Açúcar Adega, uma plataforma omnichannel para a venda de vinhos e outras bebidas alcoólicas, formada por um site, app e loja física com o objetivo de alavancar ainda mais a venda de vinhos através de um conceito rico em produtos selecionados, conteúdo e experiência. 

Gostaríamos de desenvolver um assistente virtual para facilitar a escolha e auxiliar o cliente na compra de um vinho. 

Espera-se que este assistente virtual seja capaz de responder dúvidas, tais como:
* Qual vinho combina mais com carnes de caça? 
* Qual vinho é adequado para bacalhau?
* Preciso de um vinho para combinar com peixe.
* Pretendo servir queijo branco como aperitivo. Qual é o vinho que melhor combina com este queijo? 
* Eu quero uma sugestão de vinho branco para acompanhar com carne vermelha.
* Tenho um vinho tinto francês Les Violettes. Que prato você sugere que eu devo fazer para acompanhar este vinho? 
* Tenho um vinho chileno Rosé Céfiro. Que prato eu devo preparar? 

Sabemos que as regras de harmonização podem ser um tanto quanto complexas. Por exemplo, existem diversos tipos de carne vermelha e para cada tipo de carne vermelha podemos ter diferentes tipos de vinhos que harmonizam melhor. No entanto, a primeira versão deste assistente virtual irá tratar apenas poucas relações de harmonização. Estas relações são apresentadas na Tabela 1. 

<div align="center">
    <img width="750" src="doc/source/images/Tabela%2001.jpg" />
    <p>Tabela 1: Regras de harmonização.</p>
</div>
<br>
<br>
<br>

Além de perguntas diretas, como as apresentadas na Tabela 1, este assistente virtual também terá que tratar perguntas de escopo aberto, como por exemplo:
* Vou dar um jantar em casa. Qual vinho devo comprar? 
* Vou servir uma massa no almoço. Qual é o vinho que melhor combina? 
* Pretendo servir queijo como aperitivo. Qual é o vinho que melhor combina? 
* Tenho um vinho tinto, que prato preparar? 

Nestes casos, o assistente virtual ao invés de retornar uma resposta direta, deverá solicitar mais informações para então fornecer uma resposta. Veja os exemplos nas Figuras 1 e 2.

<div align="center">
    <img width="375" src="doc/source/images/Figura%2001.png">
    <p>Figura 1: Exemplo de diálogo para perguntas abertas.</p>
</div>
<br>
<br>
<br>

<div align="center">
    <img width="375" src="doc/source/images/Figura%2002.jpg">
    <p>Figura 2: Exemplo de diálogo para perguntas abertas.</p>
</div>
<br>
<br>
<br>

Na figura 3, é apresentado uma situação onde o usuário faz uma pergunta completa logo no início do diálogo.

<div align="center">
    <img width="375" src="doc/source/images/Figura%2003.jpg">
    <p>Figura 3: Exemplo de diálogo com pergunta completa.</p>
</div>
<br>
<br>
<br>

## Avaliação

Todos os participantes da maratona deverão construir um assistente virtual sobre harmonização de vinhos como descrito acima. Para avaliar a qualidade do assistente virtual, a coordenação da maratona irá utilizar um validador automático. Por isso, é importante que no corpo de cada resposta exista uma marcação com o SKU* do vinho ou do prato recomendado. Esta marcação deve estar entre parênteses () com o número do SKU*.

Você poderá utilizar qualquer texto no corpo da resposta. No entanto, é muito importante que o texto com a marcação esteja presente. Por exemplo, uma resposta válida para a pergunta “Qual é o melhor vinho tinto para acompanhar carnes vermelhas?” é: “Sugiro um Vinho Argentino Tinto CADUS Signature Series Petit Verdot Garrafa 750ml (1178431)”. Uma resposta que não é válida para a mesma pergunta é: “Sugiro um Vinho Argentino Tinto CADUS Signature Series Petit Verdot Garrafa 750ml”.

> *O termo **Stock Keeping Unit** (**SKU**) - em português **Unidade de Manutenção de Estoque** - está ligado à logística de armazém e designa os diferentes itens do estoque, estando normalmente associado a um código identificador.

## Comece aqui

Para começar no **desafio 1**, você deve seguir item a item abaixo:

1. Leia atentamente o enunciado do [Desafio](#desafio) e a [Avaliação](#avaliação).
2. Siga os [Pré-requisitos](#pré-requisitos) para poder participar do Desafio.
3. Faça o treinamento do [Watson Assistant](#treinamento-no-watson-assistant) na região de **Washington-DC**.
4. Suba a aplicação na [IBM Cloud](#aplicação-na-nuvem), em **Dallas**, com o serviço do [IBM Continuous Delivery](https://cloud.ibm.com/catalog/services/continuous-delivery) (veja o passo-a-passo abaixo) e configure com as credenciais do Watson Assistant e da Maratona.
5. Submeta o seu desafio, clicando no botão "**SUBMETER DESAFIO**".
6. Pronto! Agora é só acompanhar no ranking (100+).

## Pré-requisitos

Você deverá cumprir os seguintes itens:

- Registrar na [Maratona Behind the Code](https://ibm.biz/maratona) e confirmar o e-mail de cadastro.
- Registrar na [IBM Cloud](https://ibm.biz/BdzsFc) e confirmar o e-mail de cadastro.

## Treinamento no Watson Assistant

1. Entre na sua conta da [IBM Cloud](https://cloud.ibm.com) e acesse o [catálogo](https://cloud.ibm.com/catalog?category=ai).

2. Localize o serviço de [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) e clique sobre ele. Não há a necessidade de mudar o nome. Altere a **Região** para **`Washington-DC`**. No desafio, você treinará o Watson nessa região.

3. Clique em "Create" para criar a instância do serviço.

4. Após a criação, clique em "Launch Watson Assistant" para abrir a ferramenta de treinamento.

5. Crie a sua *Skill* e faça o treinamento, baseado na [estória acima](#desafio).

### Veja como criar um Chatbot com Watson Assistant

* Como treinar o seu assistente virtual com Watson Assistant - https://youtu.be/SjbJRpGQtZc

### Credenciais do Watson Assistant

Dentro do Watson Assistant, procure pelo Skill/Workspace criado e clique no botão com três pontinhos. Clique na opção "View API Details". Lembre-se: o `IAM_APIKEY` é o mesmo que o `PASSWORD`.

<div align="center">
    <img width="430" src="doc/source/images/Watson%20Assistant%2001.png">
    <img width="430" src="doc/source/images/Watson%20Assistant%2002.png">
</div>

## Aplicação na nuvem

Para subir a aplicação na IBM Cloud, você deve clicar no botão abaixo para subir usando o [IBM Continuous Delivery](https://cloud.ibm.com/catalog/services/continuous-delivery) (também conhecido como Delivery Pipeline). **Você deve subir a sua aplicação em Dallas**.

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/maratonadev/desafio-1)

### Veja como configurar o IBM Continuous Delivery

<!-- Assista o vídeo para aprender a configurar a sua aplicação na IBM Cloud usando o IBM Continuous Delivery, o serviço de DevOps para criar cadeias de ferramentas (ou **toolchains**). -->

1. Configure o `Toolchain Name` com `<maratona-id>-desafio1-behindthecode`, substituindo o `<maratona-id>` pelo seu ID da Maratona (Ex: 100001). Se você não souber, verifique nos emails para pegar o seu ID.

2. Configure o `App name` com a mesmo valor usado no item 1.

3. Crie uma chave (de uso interno). Basta clicar em "Create" e depois clique em "Create" novamente. Espere um instante até carregar todas os dados. Se demorar muito (mais de 5 minutos), recarregue a página e faça novamente o passo 1 e 2. **Na parte inferior (abaixo do item 2), mantenham a Região para Dallas**. 

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2001.png">
</div>

Clique em `Eclipse Orion Web IDE` para abrir a IDE para configurar a aplicação, com as credenciais da Maratona e Watson Assistant.

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2002.png">
</div>

Abaixo estão o passo-a-passo, obrigatório, para configurar a sua aplicação no [Eclipse Orion Web IDE](https://cloud.ibm.com/docs/services/ContinuousDelivery?topic=ContinuousDelivery-web_ide).

1. Crie o arquivo `.env` para colocar as credenciais do Watson Assistant e da Maratona (lembre-se de que é o mesmo código usado para indicar novos participantes na Maratona). Preencha com os dados, após o *`=`* (símbolo de igua). Lembre-se: o `IAM_APIKEY` é o mesmo que o `PASSWORD` apresentado nas imagens no [Treinamento no Watson Assistant](#treinamento-no-watson-assistant)

```
# Credenciais para o Desafio 1
DESAFIO=1
MARATONA_ID=

# Watson Assistant
SERVICE_ENDPOINT=https://gateway-wdc.watsonplatform.net/assistant/api
IAM_APIKEY=
WORKSPACE_ID=
```

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2003.png">
</div>

2. Abra o arquivo `manifest.yml` e altere o `<maratona-id>` com o seu ID da Maratona, o mesmo usado acima.

```
applications:
- name: <maratona-id>-desafio1-behindthecode
  memory: 256M
  instances: 1
```

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2004.png">
</div>

Clique em `Create new launch configuration` e crie a configuração para a sua aplicação (que está sendo criada em *background*). `Launch Config Name`, `Application Name` e `Host` devem ter o mesmo nome, com o formato `<maratona-id>-desafio1-behindthecode`, igual nos itens anteriores. Clique em "Save" para salvar as configurações.

<div align="center">
    <img width="375" src="doc/source/images/Pipeline%2005.png">
    <img width="375" src="doc/source/images/Pipeline%2006.png">
</div>

Clique em `Play` (primeiro botão na imagem) e depois, após salvar as configurações e estiver disponível, clique em `Open` (terceiro botão na imagem). Vai abrir a sua aplicação, com o chatbot para você testar e submeter, no final.

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2007.png">
</div>

## Submissão

Através da aplicação na IBM Cloud (`https://<maratona-id>-desafio1-behindthecode.mybluemix.net`), você irá clicar no botão **SUBMIT ASSISTANT**, preencher com o seu CPF e enviar para a avaliação final.

<div align="center">
    <img width="750" src="doc/source/images/App%2001.png">
</div>

Não iremos divulgar a nota no momento da submissão. Iremos divulgar o ranking dos 100+ colocados.

## Material de apoio

- [O que é a IBM Cloud e como subir a sua primeira aplicação na nuvem](https://medium.com/ibmdeveloperbr/o-que-%C3%A9-a-ibm-cloud-e-como-subir-a-sua-primeira-aplica%C3%A7%C3%A3o-na-nuvem-41bfd260a2b7?source=friends_link&sk=7944d2fe14aa940e9bade68ce0731ba0)
- [Watson Assistant: Como criar o seu chatbot usando Skills e Assistants](https://medium.com/ibmdeveloperbr/watson-assistant-como-criar-o-seu-chatbot-usando-skills-e-assistants-755b4677984b?source=friends_link&sk=19bcbdb2ef573a717f63f0cc1fd4b754)
- [Code Pattern: Assemble a pizza-ordering chatbot dialog](https://developer.ibm.com/patterns/assemble-a-pizza-ordering-chatbot-dialog/)

## Dúvidas

Acesse o slack e mande a sua dúvida: [ibm.biz/convite-slack](https://ibm.biz/convite-slack).

## PDF do Desafio

> Baixe o PDF do desafio [aqui](doc/source/pdf/Storytelling.pdf).

## License

Copyright 2019 Maratona Behind the Code

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
