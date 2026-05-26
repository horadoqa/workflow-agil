// =========================================
// KANBAN BOARD - SISTEMA DE AUTENTICAÇÃO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // ELEMENTOS PRINCIPAIS
  // =========================================

  const tasks = document.querySelectorAll(".sub-task");
  const columns = document.querySelectorAll(".sub-task-column");
  const textareas = document.querySelectorAll("textarea");
  const blockedButtons = document.querySelectorAll(".blocked-btn");
  const resetButton = document.getElementById("reset-board");
  const loadSampleButton = document.getElementById("load-sample");

  let draggedTask = null;

  // =========================================
  // FUNÇÃO: DRAG AND DROP
  // =========================================

  function initializeDragAndDrop() {

    tasks.forEach(task => {

      // -----------------------------
      // DRAG START
      // -----------------------------

      task.addEventListener("dragstart", () => {
        draggedTask = task;
        task.classList.add("dragging");
      });

      // -----------------------------
      // DRAG END
      // -----------------------------

      task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
        draggedTask = null;
      });

    });

    // -----------------------------
    // DROP ZONES
    // -----------------------------

    columns.forEach(column => {

      // Permite soltar item
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.classList.add("drag-over");
      });

      // Remove highlight visual
      column.addEventListener("dragleave", () => {
        column.classList.remove("drag-over");
      });

      // DROP DA TASK
      column.addEventListener("drop", () => {
        column.classList.remove("drag-over");

        if (!draggedTask) return;

        // =========================================
        // IDENTIFICA FLUXO DA TASK
        // =========================================

        const taskFlow = draggedTask.dataset.flow;

        // =========================================
        // IDENTIFICA COLUNA DESTINO
        // =========================================

        const targetColumn = column.dataset.column;

        // =========================================
        // COLUNAS PERMITIDAS
        // =========================================

        const allowedColumns = workflowRules[taskFlow];

        // =========================================
        // VALIDA TRANSIÇÃO
        // =========================================

        if (allowedColumns && allowedColumns.includes(targetColumn)) {
          column.appendChild(draggedTask);
          saveTaskPositions();
        } else {
          alert("Movimentação não permitida neste fluxo.");
        }

      });

    });

  }

  // =========================================
  // FUNÇÃO: PERSISTÊNCIA DOS TEXTAREAS
  // =========================================

  function initializeTextareaPersistence() {

    textareas.forEach(textarea => {

      // Gerar ID único se não existir
      if (!textarea.id) {
        textarea.id = 'textarea-' + Math.random().toString(36).substr(2, 9);
      }

      // -----------------------------
      // CARREGAR DADOS
      // -----------------------------

      textarea.value = localStorage.getItem(textarea.id) || "";

      // -----------------------------
      // SALVAR AUTOMATICAMENTE
      // -----------------------------

      textarea.addEventListener("input", () => {
        localStorage.setItem(textarea.id, textarea.value);
      });

    });

  }

  // =========================================
  // FUNÇÃO: TASK BLOQUEADA
  // =========================================

  function initializeBlockedTasks() {

    tasks.forEach(task => {

      const button = task.querySelector(".blocked-btn");
      const blockedText = task.querySelector(".blocked-text");

      // Evita erro se não existir botão
      if (!button || !blockedText) return;

      const taskId = task.id;

      // -----------------------------
      // CARREGAR ESTADO BLOQUEADO
      // -----------------------------

      const isBlocked = localStorage.getItem(taskId + "-blocked");
      const blockedReason = localStorage.getItem(taskId + "-reason");

      // -----------------------------
      // APLICAR ESTADO
      // -----------------------------

      if (isBlocked === "true") {
        task.classList.add("blocked");
      }

      // -----------------------------
      // CARREGAR MOTIVO
      // -----------------------------

      blockedText.value = blockedReason || "";

      // -----------------------------
      // TOGGLE BLOQUEIO
      // -----------------------------

      button.addEventListener("click", () => {
        task.classList.toggle("blocked");
        localStorage.setItem(
          taskId + "-blocked",
          task.classList.contains("blocked")
        );
      });

      // -----------------------------
      // SALVAR MOTIVO BLOQUEIO
      // -----------------------------

      blockedText.addEventListener("input", () => {
        localStorage.setItem(taskId + "-reason", blockedText.value);
      });

    });

  }

  // =========================================
  // FUNÇÃO: SALVAR POSIÇÃO DAS TASKS
  // =========================================

  function saveTaskPositions() {

    const tasks = document.querySelectorAll(".sub-task");

    tasks.forEach(task => {
      const parentColumn = task.parentElement;
      localStorage.setItem(task.id + "-column", parentColumn.id);
    });

  }

  // =========================================
  // FUNÇÃO: CARREGAR POSIÇÃO DAS TASKS
  // =========================================

  function loadTaskPositions() {

    const tasks = document.querySelectorAll(".sub-task");

    tasks.forEach(task => {

      const savedColumnId = localStorage.getItem(task.id + "-column");

      if (savedColumnId) {
        const targetColumn = document.getElementById(savedColumnId);

        if (targetColumn) {
          targetColumn.appendChild(task);
        }
      }

    });

  }

  // =========================================
  // FUNÇÃO: CARREGAR DADOS DE EXEMPLO
  // =========================================

  function loadSampleData() {

    const confirmLoad = confirm(
      "Deseja carregar os dados de exemplo do Sistema de Autenticação?"
    );

    if (!confirmLoad) return;

    // Dados de exemplo baseados nos documentos
    const sampleData = {
      businessRules: `1. Autenticação de usuário
- O sistema deve permitir login apenas para usuários previamente cadastrados e ativos
- O login deve ser realizado com e-mail ou nome de usuário + senha
- Usuários inativos, bloqueados ou removidos não podem autenticar-se

2. Validação de credenciais
- O sistema deve validar se o usuário existe, a senha está correta e a conta está ativa
- Caso qualquer validação falhe, deve ser exibida mensagem genérica: "Usuário ou senha inválidos"

3. Segurança de senha
- Senhas devem ser armazenadas com hash seguro (bcrypt ou equivalente)
- O sistema não deve armazenar senhas em texto puro
- Política mínima: 8 caracteres, 1 maiúscula, 1 número, 1 caractere especial

4. Tentativas de login
- Limitar tentativas de login inválidas
- Após 5 tentativas incorretas consecutivas, bloquear temporariamente a conta por 15 minutos
- Proteção contra ataques de força bruta (rate limiting)

5. Sessão de usuário
- Após login bem-sucedido, criar sessão autenticada
- Sessão deve expirar automaticamente após 15-30 minutos de inatividade
- Usuário deve ser deslogado automaticamente ao expirar a sessão`,

      acceptanceCriteria: `1. Login válido
Given: usuário está na tela de login
When: informa credenciais válidas
Then: sistema deve autenticar o usuário
And: redirecionar para o dashboard

2. Login inválido
Given: usuário está na tela de login
When: informa credenciais incorretas
Then: sistema deve exibir mensagem genérica de erro

3. Campos obrigatórios
Given: usuário está na tela de login
When: envia formulário vazio
Then: sistema deve impedir o envio

4. Bloqueio por tentativas
Given: múltiplas tentativas de login falhas
When: atingir limite de 5 tentativas
Then: sistema deve bloquear temporariamente o acesso

5. Sessão ativa
Given: login realizado com sucesso
When: autenticação for concluída
Then: sistema deve criar sessão autenticada

6. Auditoria
Given: qualquer tentativa de login
When: ocorrer autenticação
Then: sistema deve registrar log de auditoria`,

      observations: `1. Segurança é prioridade absoluta
- A página de login deve ser tratada como ponto crítico do sistema
- Qualquer falha aqui pode comprometer todo o ambiente
- Deve seguir boas práticas de segurança desde o início

2. Não expor informações sensíveis
- Mensagens de erro devem ser genéricas
- Nunca indicar se o usuário existe ou não no sistema
- Evitar vazamento de informações em logs acessíveis

3. Controle de sessão deve ser consistente
- Sessões devem expirar automaticamente por segurança
- Comportamento de "lembrar-me" deve ser opcional
- Evitar sessões indefinidas em ambientes corporativos

4. Integração com autenticação externa (opcional)
- O sistema pode futuramente integrar Azure AD, SSO corporativo
- O design da autenticação deve permitir evolução sem refatoração completa

5. Testabilidade deve ser garantida
- O login deve ser facilmente testável via usuários de teste (QA)
- Ambientes separados (DEV / HML / PRD)
- Previsibilidade no comportamento de erros e bloqueios`
    };

    // Aplicar dados aos textareas
    document.getElementById('businessRules').value = sampleData.businessRules;
    document.getElementById('acceptanceCriteria').value = sampleData.acceptanceCriteria;
    document.getElementById('observations').value = sampleData.observations;

    // Salvar no localStorage
    localStorage.setItem('businessRules', sampleData.businessRules);
    localStorage.setItem('acceptanceCriteria', sampleData.acceptanceCriteria);
    localStorage.setItem('observations', sampleData.observations);

    alert('Dados de exemplo carregados com sucesso!');
  }

  // =========================================
  // RESET BOARD
  // =========================================

  resetButton.addEventListener("click", () => {

    const confirmReset = confirm(
      "Deseja resetar o board? Todos os dados serão perdidos."
    );

    if (confirmReset) {
      // Limpa tudo
      localStorage.clear();
      // Recarrega página
      location.reload();
    }

  });

  // =========================================
  // LOAD SAMPLE
  // =========================================

  loadSampleButton.addEventListener("click", loadSampleData);

  // =========================================
  // REGRAS DE WORKFLOW
  // =========================================

  const workflowRules = {

    development: [
      "dev-todo",
      "dev-doing",
      "dev-done"
    ],

    testing: [
      "qa-todo",
      "qa-doing",
      "qa-done"
    ],

    uat: [
      "uat-todo",
      "uat-doing",
      "uat-done"
    ],

    deploy: [
      "deploy-todo",
      "deploy-doing",
      "deploy-done"
    ]

  };

  // =========================================
  // INICIALIZAÇÃO GERAL
  // =========================================

  loadTaskPositions();
  initializeDragAndDrop();
  initializeTextareaPersistence();
  initializeBlockedTasks();

});
