# Documento de Abertura do Projeto

## Descrição do Problema 

Departamentos de Recursos Humanos de empresas de todos os tipos realizam processos de recrutamento e seleção em busca de novos colaboradores. 

Esses processos nem sempre são padronizados de forma que os mesmos passos e os mesmos critérios de avaliação sejam considerados para todos os candidatos.

A falta de um processo bem definido para recrutamento e seleção pode resultar em ineficiência, fazendo com que candidatos adequados para uma vaga não sejam considerados e que o candidato menos adequado consiga a vaga.

## Objetivo do Projeto

Elaboração de um sistema que contenha um claro processo de recrutamento e seleção para o departamento de recursos humanos.

## Premissas

O sistema deverá possibilitar o cadastro de vagas e requisitos para esta, bem como associar os responsáveis por cada etapa do processo, definindo também quais ações cada individuo envolvido deve avaliar e atuar.

Ao fim do processo de um candidato o sistema deverá gerar uma compilação de cada etapa e respectivas avaliações, bem como o avaliação geral.

## Requisitos

> **Funcionais**

|Descrição|Prioridade|Tipo|Métrica|
|---------|----------|----|-------|
|Cadastrar pessoas envolvidas no processo de Recrutamento|Alta|Cadastros|É possível inserir, atualizar e ver uma lista de Pessoas?|
|Cadastrar vagas. |Alta|Cadastros|É possível inserir, atualizar, deletar e ver uma lista de Vagas?|
|Cadastrar etapas e critérios a serem analisadas em uma vaga.|Alta|Cadastros|É possível inserir, atualizar, remover e ver uma lista de etapas e competências?|
|Cadastrar candidatos para uma vaga.|Alta|Cadastros|É possível inserir, atualizar e ver uma lista de Candidatos?|
|Cadastrar as informações profissionais de um Candidato.|Média|Cadastros|É possível registrar dados essenciais a um Candidato?|
|Exibir entrevistas e resultados de uma vaga.|Média|Processo|É possível listar as Entrevistas e resultados de uma vaga?|
|Associar responsáveis as etapas da entrevista|Alta|Processo|É possível associar e desassociar Responsáveis?|
|Para cada etapa, o responsável deve preencher a avaliação, e pontuar as qualidades do candidato para a vaga.|Alta|Processo|É possível registrar cada compe†ência de uma etapa associada a uma vaga com base em uma escala?|
|Cada critério deve ser avaliada seguindo a escala: péssimo, ruim, normal, positivo, ótimo.|Alta|Processo|É possível atualizar a avaliação e observação do critério?|
|Ao fim do processo de cada candidato deve ser possível acessar todas as Avaliações|Alta|Relatórios|Todas as avaliações feitas para o candidato são Visíveis?|


> **Não Funcionais**

|Descrição|Prioridade|Tipo|Métrica|
|---------|----------|----|-------|
|Facilidade de preenchimento de Avaliação.|Média|Usabilidade|Tempo médio para preenchimento. Número de preenchimentos Completos.|
|Disponibilidade de Avaliações.|Alta|Usabilidade|Avaliações devem ser mantidas e indexadas por tempo Indeterminado.|
|Sistema será hospedado em ambiente cloud|Alta|Infraestrutura|-|
|O sistema será em plataforma web.|Alta|Infraestrutura|Disponibilização do sistema via browser|

## Tecnologia

### Infraestrutura
- Hospedagem: [Heroku](https://www.heroku.com/)
- Servidor: Node.js
- Banco de Dados: MongoDB
- Cliente: Angular

## Responsábilidades Técnicas

- Felipe: Servidor e Banco de Dados
- Jonnathan: Hospedagem e Aplicação Cliente
