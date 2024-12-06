### **Gerenciador de Arquivos**

Este projeto é uma compilação de conceitos de *back-end*, abrangendo autenticação, NodeJS, MongoDB, Redis, paginação e processamento em segundo plano.

O objetivo é construir uma plataforma simples para upload e visualização de arquivos com as seguintes funcionalidades:

- **Autenticação de usuário** via token.  
- **Listagem de todos os arquivos**.  
- **Upload de novos arquivos**.  
- **Alteração de permissões de um arquivo**.  
- **Visualização de arquivos**.  
- **Geração de miniaturas para imagens**.  

---

### **Tecnologias principais**

- **Node.js**: Para construção do servidor e APIs.  
- **MongoDB**: Banco de dados não relacional para armazenar informações dos usuários e arquivos.  
- **Redis**: Utilizado para armazenamento em cache e gerenciamento de filas para tarefas em segundo plano.  
- **JWT (JSON Web Tokens)**: Para autenticação e autorização segura de usuários.  
- **Fila de tarefas**: Para processamento assíncrono, como a geração de miniaturas de imagens.  
- **Express.js**: Framework para criação de rotas e organização do servidor.  
- **Multer**: Middleware para manipulação de upload de arquivos.  

