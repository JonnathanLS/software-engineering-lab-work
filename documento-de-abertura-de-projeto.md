# Documento de Abertura do Projeto

## Descrição do Problema 

Departamentos de Recursos Humanos de empresas de todos os tipos realizam processos de recrutamento e seleção em busca de novos colaboradores. 

Esses processos nem sempre são padronizados de forma que os mesmos passos e os mesmos critérios de avaliação sejam considerados para todos os candidatos.

A falta de um processo bem definido para recrutamento e seleção pode resultar em ineficiência, fazendo com que candidatos adequados para uma vaga não sejam considerados e que o candidato menos adequado consiga a vaga.

## Objetivo do Projeto

Elaboração de um sistema que contenha um claro processo de recrutamento e seleção para departamentos de recursos humanos. 

## Premissas

O sistema deverá possibilitar o cadastro de vagas e requisitos para esta, bem como associar os responsáveis por cada etapa do processo, definindo também quais ações cada individuo envolvido deve tomar. 

Ao fim do processo de um candidato o sistema deverá gerar uma compilação de cada etapa e respectivas avaliações, bem como o avaliação geral.

## Requisitos

> **Funcionais**

|Descrição|Prioridade|Tipo|Métrica|
|---------|----------|----|-------|
|Cadastrar pessoas envolvidas no processo de Recrutamento|Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de Pessoas?|
|Cadastrar vagas. |Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de Vagas?|
|Cadastrar qualidades a serem analisadas em uma vaga.|Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de Qualidades?|
|Cadastrar candidatos para uma vaga.|Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de Candidatos?|
|Cadastrar arquivo com currículo de um Candidato.|Média|Cadastros|É possível inserir, e remover um arquivo?|
|Cadastrar links associados a informações profissionais de um Candidato.|Média|Cadastros|É possível associar muitos links a um Candidato?|
|Cadastrar entrevistas e outras atividades para uma vaga.|Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de Entrevistas?|
|Associar responsáveis as suas entrevistas|Alta|Processo|É possível associar e desassociar Responsáveis?|
|Para cada entrevista, cada responsável deve preencher uma página de avaliação, onde deve pontuar as qualidades daquele candidato para aquela vaga.|Alta|Processo|É possível preencher cada qualidade associada a uma vaga segundo a Escala?|
|Cada qualidade deve ser avaliada segundo a escala: péssimo, ruim, normal, positivo, ótimo.|Alta|Processo|-|
|Ao fim do processo de cada candidato deve ser possível acessar todas as Avaliações|Alta|Relatórios|Todas as avaliações feitas para o candidato são Visíveis?|
|Valores consolidados das avaliações.|Média|Relatórios|A soma das pontuações da escala é visível para cada qualidade da Vaga?|


> **Não Funcionais**

|Descrição|Prioridade|Tipo|Métrica|
|---------|----------|----|-------|
|Facilidade de preenchimento de Avaliação.|Média|Usabilidade|Tempo médio para preenchimento. Número de preenchimentos Completos.|
|Disponibilidade de Avaliações.|Alta|Usabilidade|Avaliações devem ser mantidas e indexadas por tempo Indeterminado.|
|Sistema será hospedado em ambiente cloud|Alta|Infraestrutura|-|
|O sistema será em plataforma web.|Alta|Infraestrutura|-|

## Tecnologia

### Infraestrutura
- Hospedagem: [Heroku](https://www.heroku.com/) ou [Firebase](https://firebase.google.com/?hl=pt-br)
- Server: Node.js
- Banco de dados: PostgreSQL
- Ciente: Angular