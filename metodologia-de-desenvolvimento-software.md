# Metodologia para Desenvolvimento de Software

A metodologia será constituída das cinco principais fases no ciclo de vida de um projeto de software: requisitos, projeto, implementação, testes e produção.

O levantamento dos requisitos, viabilidade, especificação e definição da arquitetura do projeto serão feitas ao início do projeto e devem ser a base para as fases seguintes, já as fases de implementação, testes e produção serão realizadas conforme metodologia Scrum, contendo sprints semanais com reuniões a cada 2 dias no decorrer da sprint.

## Fase 1 - Requisitos

Definição do termo de abertura de projeto que no decorrer de entrega dos artefatos será incrementado progressivamente até a fase de implementação, afim de se obter o escopo detalhado do projeto.

- Problema
- Objetivo

Definição dos requisitos funcionais e não funcionais, conforme modelo abaixo:

| Descrição | Prioridade | Tipo | Métrica |
| --------- | ---------- | ---- | --------|

- Descrição : informações sobre o requisito.
- Prioridade: obrigatório, importante e opcional.
- Tipo: agrupamento dos requisitos em categorias.
- Métrica: parâmetro para saber se um requisito foi concluído.

## Fase 2 - Projeto

Definição das tecnologias a serem usadas para a codificação e infraestrutura do projeto.

Divisão das responsabilidades tecnológicas aos membros do projeto.

Definição da arquitetura, identificando suas partes e comunicação entre elas.

Elaboração dos diagramas do projeto.

- Casos de uso
- Sequência
- Fluxos de Trabalho
- Arquitetura do Sistema

Produção dos protótipos das interfaces do sistema (esboço das telas).

## Fase 3: Implementação

> A partir desta fase, a execução ocorrerá com o uso do Scrum. 

Antes de execução de cada sprint, deverá ocorrer o planejamento para definição, divisão e validação das tarefas que farão parte do backlog do projeto.

Reunião de Planejamento 

- Definição - levantamento da tarefa vigente e futura (se houver).
- Validação - confirmação pelos membros da equipe se a tarefa cabe na sprint.
- Divisão - delegação das tarefas aos membros da equipe.

> **Observação**: deverá ser definido a os padrões de código que devem ser seguidas pelos membros da equipe. 

No decorrer da sprint os membros se reunirão conforme descrito no inicio deste tópico, a fim de analisar o progresso do projeto e os prazos, além disso, deverá ser pontuado possíveis discussões para a próxima sprint, que virão a ser discutidas no próximo planejamento.

As tarefas serão armazenadas na aba de projetos do [repositório central](https://github.com/JonnathanLS/software-engineering-lab-work) que conterá as fases desta metodologia, com isso será possível analisar o progresso do projeto, com base na descrição da tarefa, prioridade e status.

## Fase 4 - Testes

Durante a implementação do projeto deverão ser desenvolvidos cobertura de testes unitários para garantir a qualidade dos trechos de código.

No fim de cada sprint, aquilo que foi implementado deve ser testado em um ambiente de testes.

Durante os testes serão verificadas as métricas descritas na fase de levantamento de requisitos, caso os objetivos não sejam alcançados, as tarefas devem retornar ao backlog para que o sistema possa ser aperfeiçoado.

> Deverá ser discutido a viabilidade de testes funcionais automatizados.

## Fase 5: Produção

Deve ser validado o ambiente de produção.

Nessa fase serão definidas métricas para validação do ambiente, essas métricas serão constantemente monitoradas e em casa de anormalidade, deve ser escrito um documento que descreva o problema para que possa ser analisado e corrigido.

> No fim de cada sprint a equipe deve ter produzido um sistema utilizável que será implementado no ambiente preparado. 