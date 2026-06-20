# Torcida+ Backend - Spring Boot 🚀

Este é o backend robusto desenvolvido para o projeto **Torcida+**, utilizando as melhores práticas do ecossistema Java com **Spring Boot 3.2.3**.

## 🛠️ Tecnologias Utilizadas

- **Java 21**: Versão LTS mais recente.
- **Spring Boot 3.2.3**: Framework base para microserviços.
- **Spring Security & JWT**: Autenticação e autorização seguras.
- **Spring Data JPA**: Abstração para persistência de dados.
- **WebSocket (STOMP)**: Comunicação em tempo real para o chat.
- **H2 Database**: Banco de dados em memória para desenvolvimento rápido.
- **Lombok**: Redução de código boilerplate.

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas para facilitar a manutenção e escalabilidade:

| Camada | Responsabilidade |
| :--- | :--- |
| **Model** | Definição das entidades do banco de dados (User, Product). |
| **Repository** | Interface de comunicação com o banco de dados. |
| **Service** | Lógica de negócio e regras da aplicação. |
| **Controller** | Exposição dos endpoints REST e WebSocket. |
| **DTO** | Objetos de transferência de dados para requisições e respostas. |
| **Config** | Configurações globais (Segurança, WebSocket, CORS). |

## 🔐 Segurança (JWT)

A autenticação é baseada em **JSON Web Tokens (JWT)**. Para acessar endpoints protegidos, o cliente deve:
1. Registrar um usuário em `/auth/register`.
2. Fazer login em `/auth/login` para receber um token.
3. Incluir o token no header `Authorization: Bearer <token>` nas requisições subsequentes.

## 💬 Chat em Tempo Real

O chat utiliza **WebSockets** com o protocolo **STOMP**.
- **Endpoint**: `/ws`
- **Topic**: `/topic/public`
- **App Prefix**: `/app/chat.sendMessage`

## 🚀 Como Executar

1. Certifique-se de ter o **Maven** e **Java 21** instalados.
2. No diretório raiz, execute:
   ```bash
   mvn spring-boot:run
   ```
3. O servidor iniciará na porta `8080`.
4. O console do banco de dados H2 estará disponível em: `http://localhost:8080/h2-console`

---
Desenvolvido por **Manus AI** para o projeto **Torcida+**.
