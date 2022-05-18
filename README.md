# m4-capstone-returning

---------------------------------

**Rotas para usuários não logados:

Os usuários não logados poderão visualizar todos os games e consoles através das rotas get destes produtos. Por exemplo:

#get BASE_URL/jogos
Lista todo os jogos disponíveis na locadora

#get BASE_URL/consoles
Lista todos od consoles disponiveis na locadora

---------------------------------

**Rota de login:

Os usuários logados poderão alugar jogos e consoles. Para fazer o login, acesse a seguinte rota:

#POST BASE_URL/login
Nesta rota o usuário cadastrado poderá fazer o login na locadora e recebrá um token para validação

Dados necessário para enviar:

{
"email":"seu_email_aqui",
"senha":"sua_senha_em_string"
}

--------------------------------- 

**Rota de criação de usuário

Para a criação de um usuário, acesse a seguinte rota:

#POST BASE_URL/novousuario

Dados necessário para enviar:

{
"email":"seu_email_aqui",
"senha":"sua_senha_aqui",
"cpf":"seu_cpf_aqui",
"nome":"seu_nome_aqui",
"telefone":"seu_telefone_aqui"
}

---------------------------------

**Rota de locação de produtos

Para alugar um produto, pode ser jogo ou console, acesse a seguinte rota:

#GET BASE_URL/alugar/:id_do_produto

Dados necessários para enviar:

Você só precisar estar logado com o seu token validado durante o login.

---------------------------------

**Rota de devolução de produtos

Para devolver um produto, acesse a seguinte rota:

#GET BASE_URL/devolver/:id_do_produto

Dados necessário para a devolução:

{
"observacao":"Descreva_aqui_se_algo_aconteceu_ou_se_não_houve_nada"
}

---------------------------------
