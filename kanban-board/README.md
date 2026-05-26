# 📋 Kanban Board - Sistema de Autenticação

Quadro Scrum/Kanban inspirado no **Azure DevOps** para gerenciamento de projetos ágeis com design dark profissional.

## 🎯 Características

### ✨ Funcionalidades Principais

- **Design Azure DevOps**: Interface dark profissional idêntica ao Azure DevOps
- **Drag & Drop Suave**: Arraste e solte tasks entre colunas com validação de workflow
- **User Story Completa**: Seções para Regras de Negócio, Critérios de Aceite e Observações
- **Tasks com Status**: TO DO, DOING, DONE para cada fase do projeto
- **Sistema de Bloqueio**: Marque tasks como bloqueadas com motivo do bloqueio
- **Persistência Automática**: Todos os dados salvos no localStorage
- **Dados de Exemplo**: Carregue exemplo completo do Sistema de Autenticação
- **Workflow Validado**: Movimentações respeitam regras de cada fluxo

### 📊 Estrutura do Workflow

1. **USER STORY**
   - Regras de Negócio
   - Critérios de Aceite
   - Observações

2. **IN DEVELOPMENT**
   - Entendimento
   - Planejamento
   - Execução
   - Code Review

3. **TESTING**
   - Entendimento
   - Planejamento
   - Execução

4. **UAT (User Acceptance Test)**
   - Entendimento
   - Agendamento
   - Execução
   - Feedback

5. **DEPLOY**
   - Agendamento
   - Execução
   - Monitoramento

## 🚀 Como Usar

### Instalação

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Não requer instalação de dependências ou servidor

### Operações Básicas

#### Preencher User Story
1. Na seção **USER STORY**, preencha:
   - **Regras de Negócio**: Defina as regras que orientam o desenvolvimento
   - **Critérios de Aceite**: Liste os critérios para garantir implementação correta
   - **Observações**: Adicione notas sobre segurança e outros pontos importantes

#### Mover Tasks
1. Arraste uma task de uma coluna para outra (TO DO → DOING → DONE)
2. O sistema valida se a movimentação é permitida no workflow
3. A posição é salva automaticamente

#### Bloquear Task
1. Clique no botão **🚫 Blocked** em qualquer task
2. A task fica destacada em vermelho
3. Preencha o motivo do bloqueio no campo que aparece
4. Clique novamente para desbloquear

#### Adicionar Detalhes às Tasks
- Cada task tem um campo de texto para você adicionar:
  - Descrição detalhada
  - Links
  - Notas técnicas
  - Checklist

### Carregar Dados de Exemplo

Clique em **📋 Carregar Exemplo** para popular o quadro com:
- Regras de negócio completas do sistema de autenticação
- Critérios de aceite detalhados
- Observações de segurança
- Baseado nos documentos do projeto real

### Reset do Board

Clique em **🔄 Reset Board** para:
- Limpar todos os dados
- Resetar posições das tasks
- Voltar ao estado inicial

## 📁 Estrutura do Projeto

```
kanban-board/
├── index.html          # Estrutura HTML do quadro
├── style.css           # Estilos Azure DevOps dark theme
├── script.js           # Lógica drag & drop e persistência
└── README.md           # Documentação
```

## 🎨 Design

### Paleta de Cores (Azure DevOps Style)

- **Background Principal**: #0f172a (Azul escuro profundo)
- **Cards**: #1e293b (Azul escuro médio)
- **Destaque**: #38bdf8 (Azul claro)
- **Texto**: #e2e8f0 (Branco suave)
- **Bloqueado**: #ef4444 (Vermelho)

### Tipografia

- **Fonte**: Segoe UI (padrão Microsoft)
- **Títulos**: 18px, bold
- **Texto**: 13-14px, regular

## 🔄 Regras de Workflow

Cada task só pode ser movida dentro do seu fluxo:

- **Development**: dev-todo → dev-doing → dev-done
- **Testing**: qa-todo → qa-doing → qa-done
- **UAT**: uat-todo → uat-doing → uat-done
- **Deploy**: deploy-todo → deploy-doing → deploy-done

Tentativas de mover para colunas não permitidas são bloqueadas com alerta.

## 💾 Persistência de Dados

O sistema salva automaticamente:
- ✅ Conteúdo de todos os textareas
- ✅ Posição das tasks nas colunas
- ✅ Estado de bloqueio das tasks
- ✅ Motivo do bloqueio

Dados são armazenados no **localStorage** do navegador.

## 🔐 Segurança e Privacidade

- Todos os dados são armazenados localmente no navegador
- Nenhuma informação é enviada para servidores externos
- Os dados persistem apenas no navegador atual
- Use o botão Reset para limpar todos os dados

## 🌐 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📱 Responsividade

- **Desktop**: Layout completo com 3 colunas por card
- **Tablet/Mobile**: Colunas empilhadas verticalmente

## 🚀 Próximas Funcionalidades (Roadmap)

- [ ] Backend com Node.js ou .NET
- [ ] Banco de dados (MongoDB)
- [ ] Multiusuário em tempo real (Socket.IO)
- [ ] Adicionar/remover tasks dinamicamente
- [ ] Histórico de movimentações (auditoria)
- [ ] Exportação para JSON/PDF
- [ ] Integração com Azure DevOps API
- [ ] Notificações de tasks bloqueadas
- [ ] Comentários em tasks
- [ ] Anexos de arquivos
- [ ] Filtros e busca
- [ ] Gráficos de progresso

## 📚 Documentação de Referência

Este quadro foi desenvolvido baseado nos documentos:
- `docs/Work-Item.md` - Estrutura de work items do Azure DevOps
- `docs/regras.md` - Regras de negócio do sistema de autenticação
- `docs/aceite.md` - Critérios de aceite detalhados
- `docs/obs.md` - Observações de segurança
- `docs/steps.md` - Implementações futuras

## 🎯 Casos de Uso

### Para Desenvolvedores
- Acompanhar progresso de tasks de desenvolvimento
- Marcar bloqueios e impedimentos
- Documentar decisões técnicas

### Para QA
- Planejar e executar testes
- Documentar bugs encontrados
- Validar critérios de aceite

### Para Product Owners
- Definir regras de negócio claras
- Estabelecer critérios de aceite
- Acompanhar progresso do projeto

### Para DevOps
- Planejar deploys
- Documentar procedimentos
- Monitorar execução

## 🤝 Contribuindo

Para adicionar novas funcionalidades:
1. Edite os arquivos HTML/CSS/JS conforme necessário
2. Teste em diferentes navegadores
3. Documente as mudanças

## 📄 Licença

Projeto de uso livre para fins educacionais e comerciais.

---

**Desenvolvido com base no workflow ágil do Azure DevOps** 🚀
