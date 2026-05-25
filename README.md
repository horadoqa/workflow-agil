# Workflow Ágil

Um workflow profissional utilizado em times ágeis.

Suporta facilmente:
- Scrum
- Kanban
- Métricas de throughput
- Lead time
- SLA entre DEV e QA
- Automações em Jira/Azure DevOps

--------------------------------------------------

## 1 - TO DO

US (User Story)

- Regras de Negócio
- Critérios de Aceite

--------------------------------------------------

## 2 - IN DEVELOPMENT

Tasks:
- Entendimento
- Planejamento
- Execução
- Code Review
- Dev Done

Possíveis status:
- Blocked

--------------------------------------------------

## 3 - READY FOR QA

Quando:
- Desenvolvimento concluído
- Merge realizado
- Ambiente disponível para testes

--------------------------------------------------

## 4 - IN QA

Tasks:
- Entendimento
- Planejamento dos Testes
- Execução dos Testes

Resultado:
- QA Failed
    └── Retorna para IN DEVELOPMENT (Rework/Bug Fix)
- Retest
- QA Approved
- QA Done

--------------------------------------------------

## 5 - UAT (User Acceptance Test)

Quando o item precisa ser validado por:
- Cliente
- Product Owner
- Usuário de negócio
- Área solicitante

Objetivo:
- Validar regras de negócio
- Validar comportamento funcional
- Aprovação do negócio

Resultado:
- UAT Failed
    └── Retorna para IN DEVELOPMENT

- UAT Approved

--------------------------------------------------

## 6 - READY FOR DEPLOY

Quando:
- DEV aprovou
- QA aprovou
- UAT aprovou
- Falta apenas publicação/deploy

Muito comum quando:
- Deploy é manual
- Existe janela de publicação
- Depende de DevOps/SRE
- Existe aprovação de release

--------------------------------------------------

## 7 - DONE

Entrega finalizada.

--------------------------------------------------

## DEFINITION OF DONE (DoD)

Não é uma coluna/status.
É uma regra de qualidade para considerar a US concluída.

Uma US só pode ser DONE quando:
- Desenvolvimento concluído
- Code Review aprovado
- Testes realizados
- QA aprovado
- UAT aprovado
- Sem bugs críticos
- Deploy realizado
- Documentação atualizada
- Critérios de aceite atendidos