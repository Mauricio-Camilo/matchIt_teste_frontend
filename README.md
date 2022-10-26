# matchIt_teste_frontend

## Como rodar a aplicação
1. Rode o backend da aplicação que se encontra no seguinte repositório
```bash
https://github.com/Mauricio-Camilo/matchIt_teste_backend
```
2. Clonar o repositório
```bash
git clone https://github.com/Mauricio-Camilo/matchIt_teste_frontend.git
```
3. Instalar as dependências
```bash
npm i
```
4. Rodar a aplicação
```bash
npm run start
```
5. Para criar uma nova empresa na aplicação, deve-se seguir o seguinte modelo:
```bash
    Nome: "Nome da empresa",
    CNPJ: "XX.XXX.XXX/0001-XX",
    Endereço: "Endereço da empresa"
```
Todos os campos devem ser preenchidos, os campos "Nome" e "Endereço" não apresentam restrição sobre o conteúdo digitado.

O campo "CNPJ" precisa ser digitado no formato mostrado acima, senão a aplicação não permite a criação de uma empresa.
