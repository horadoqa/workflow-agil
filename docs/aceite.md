Abaixo estão **critérios de aceite (Acceptance Criteria)** bem estruturados para uma **User Story de página de login**, no padrão usado em Scrum e compatível com Azure DevOps (formato Given / When / Then).

---

# ✅ Critérios de Aceite — Página de Login

## 🧾 User Story base (contexto)

**Como usuário autenticado, quero acessar o sistema através de login para utilizar suas funcionalidades com segurança.**

---

# 🔐 1. Login com credenciais válidas

**Given** que o usuário está na página de login
**When** ele informa um e-mail/usuário válido e senha correta
**And** clica em “Entrar”
**Then** o sistema deve autenticar o usuário
**And** redirecioná-lo para o dashboard correspondente ao seu perfil

---

# ❌ 2. Login com credenciais inválidas

**Given** que o usuário está na página de login
**When** ele informa credenciais incorretas
**Then** o sistema deve exibir a mensagem:
“Usuário ou senha inválidos”
**And** não deve informar qual campo está incorreto

---

# 🚫 3. Campos obrigatórios

**Given** que o usuário está na página de login
**When** ele tenta enviar o formulário com campos vazios
**Then** o sistema deve impedir o login
**And** exibir validação indicando campos obrigatórios

---

# 🔒 4. Bloqueio por tentativas inválidas

**Given** que o usuário está tentando autenticar-se
**When** ele erra a senha 5 vezes consecutivas
**Then** o sistema deve bloquear temporariamente a conta ou acesso
**And** exibir mensagem informando bloqueio temporário

---

# ⏱️ 5. Expiração de sessão

**Given** que o usuário realizou login com sucesso
**When** ele permanecer inativo pelo tempo configurado (ex: 15–30 min)
**Then** o sistema deve encerrar automaticamente a sessão
**And** redirecionar o usuário para a página de login

---

# 🔁 6. Recuperação de senha

**Given** que o usuário está na página de login
**When** ele acionar “Esqueci minha senha”
**Then** o sistema deve permitir solicitar redefinição de senha
**And** enviar link válido por tempo limitado ao e-mail cadastrado

---

# 🧑‍💼 7. Redirecionamento por perfil

**Given** que o usuário realizou login com sucesso
**When** o sistema identificar seu perfil
**Then** ele deve ser redirecionado para a área correspondente:

* Admin → painel administrativo
* Usuário comum → dashboard padrão

---

# 🔐 8. Segurança de senha

**Given** que o sistema armazena credenciais de usuários
**When** senhas forem cadastradas ou atualizadas
**Then** elas devem ser armazenadas com hash seguro
**And** nunca devem ser exibidas em texto puro

---

# 📊 9. Registro de auditoria

**Given** que qualquer tentativa de login ocorre
**When** o usuário tenta autenticar-se (sucesso ou falha)
**Then** o sistema deve registrar:

* Data e hora
* Resultado (sucesso/erro)
* IP de origem

---

# 📱 10. Interface de login funcional

**Given** que o usuário acessa a página de login
**When** a página for carregada
**Then** deve exibir:

* Campo de usuário/e-mail
* Campo de senha
* Botão “Entrar”
* Opção “Lembrar-me”

---

# 🧪 11. Proteção contra ataques básicos

**Given** que o sistema recebe inputs do usuário
**When** dados forem enviados no login
**Then** o sistema deve sanitizar entradas
**And** impedir injeção de scripts ou SQL maliciosos

---

# 📌 Se quiser evoluir isso ainda mais

Posso transformar esse conteúdo em:

* 🟦 **Work Item Azure DevOps pronto (User Story formatada)**
* 🧪 **Casos de teste QA completos**
* 🚀 **Checklist de pipeline de segurança (CI/CD)**
* 💻 **Implementação em HTML + backend real (Node, .NET ou Java)**

Só me diga o próximo nível.
