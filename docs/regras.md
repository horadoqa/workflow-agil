Abaixo estão **regras de negócio bem estruturadas e realistas** para a criação de uma página de login, no padrão usado em sistemas corporativos (incluindo contextos compatíveis com Azure DevOps, segurança e boas práticas modernas).

---

# 🔐 Regras de Negócio — Página de Login

## 1. Autenticação de usuário

* O sistema deve permitir login apenas para usuários previamente cadastrados e ativos.
* O login deve ser realizado com **e-mail ou nome de usuário + senha**.
* Usuários inativos, bloqueados ou removidos não podem autenticar-se.

---

## 2. Validação de credenciais

* O sistema deve validar se:

  * O usuário existe
  * A senha está correta
  * A conta está ativa
* Caso qualquer validação falhe, deve ser exibida mensagem genérica:

  * “Usuário ou senha inválidos”
    *(sem indicar qual campo está incorreto, por segurança)*

---

## 3. Segurança de senha

* Senhas devem ser armazenadas com **hash seguro (ex: bcrypt ou equivalente)**.
* O sistema não deve armazenar senhas em texto puro.
* A senha deve ter política mínima de segurança:

  * Mínimo de 8 caracteres
  * Pelo menos 1 letra maiúscula
  * Pelo menos 1 número
  * Pelo menos 1 caractere especial

---

## 4. Tentativas de login

* O sistema deve limitar tentativas de login inválidas:

  * Após 5 tentativas incorretas consecutivas, bloquear temporariamente a conta ou sessão por X minutos (ex: 15 min).
* Deve haver proteção contra ataques de força bruta (rate limiting).

---

## 5. Sessão de usuário

* Após login bem-sucedido, o sistema deve criar uma sessão autenticada.
* A sessão deve expirar automaticamente após inatividade (ex: 15–30 minutos).
* O usuário deve ser deslogado automaticamente ao expirar a sessão.

---

## 6. Autenticação multifator (MFA) *(se aplicável)*

* Para usuários críticos ou administradores, deve ser exigido segundo fator de autenticação:

  * Código por e-mail
  * Aplicativo autenticador (TOTP)
  * SMS (menos recomendado)

---

## 7. Recuperação de senha

* O sistema deve permitir recuperação de senha via e-mail cadastrado.
* O link de redefinição deve:

  * Ser único
  * Ter validade limitada (ex: 15 minutos a 1 hora)
  * Ser de uso único

---

## 8. Regras de acesso

* Após login, o usuário deve ser direcionado de acordo com seu perfil:

  * Admin → painel administrativo
  * Usuário comum → dashboard padrão
* Usuários sem permissão não devem acessar rotas protegidas.

---

## 9. Auditoria e logs

* O sistema deve registrar:

  * Tentativas de login (sucesso e falha)
  * Data e hora
  * IP de origem
  * Dispositivo/browser (quando possível)
* Logs devem ser usados para auditoria e detecção de fraude.

---

## 10. Experiência do usuário

* O formulário de login deve conter:

  * Campo de usuário/e-mail
  * Campo de senha
  * Botão “Entrar”
  * Opção “Lembrar-me” (persistência de sessão)
* O sistema deve exibir feedback claro para:

  * Campos obrigatórios
  * Senha incorreta
  * Conta bloqueada

---

## 11. Regras de integridade

* O login não deve ser possível com campos vazios.
* Inputs devem ser sanitizados para evitar:

  * SQL Injection
  * XSS (Cross-site scripting)

---

## 12. Regras de conformidade (LGPD / privacidade)

* O sistema deve informar que dados de autenticação são tratados conforme políticas de privacidade.
* O usuário deve ter acesso à política de privacidade antes ou durante o login.
* Dados pessoais devem ser minimizados e protegidos.

---


