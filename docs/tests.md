# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **LOG01 - Acessar conta**
 :--------------: | ------------
**Procedimento**  | 1)  Usuário informa nome de usuário e senha.<br>  2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-028, RF-012
**Resultado esperado** | Acessar pagina principal do logado no usuario informado.
**Dados de entrada** | Inserção de dados válidos na tela de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Orientador informa nome, sobrenome, email, senha, data de nascimento, sexo, escolaridade, profisão, aréa de interesse, telefone de contato, rua, número bairro, complemento, cep e município clica no botão "Criar".<br>  2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. Requisitos associados RF-001 Resultado esperado Prosseguir para a parte 2 do cadastro. Dados de entrada Inserção de dados válidos no formulário de cadastro.
**Requisitos associados** | RF-008, RF-001, RF-002
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Falhou.


**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001, RF-002, RF-008.
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Falhou.

**Caso de Teste** | **CTC01 - Cadastro de Curso**
 :--------------: | ------------
**Procedimento**  | 1) Orientador informa nome do curso, descrição, Início das inscrições, fim das inscrições, botão de adiconar imagens (Etiquetas), rua, número, bairro, complemento, cep e município clica no botão "Salvar".<br>  2) A aplicação cadastra o curso com todos os dados e me mostra para os usuarios. Requisitos associados RF-001 Resultado esperado Prosseguir para a parte 2 do cadastro. Dados de entrada Inserção de dados válidos no formulário de cadastro.
**Requisitos associados** | RF-009, RF-024, RF-025
**Resultado esperado** | Criação de Curso
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Falhou.

**Caso de Teste** | **WTS - Meio de Contato**
 :--------------: | ------------
**Procedimento**  | 1)  Usuário Clica no botão do WhatsApp e direcionado para o número de contato.<br>  
**Requisitos associados** | RF-029
**Resultado esperado** | Acessar pagina para entrar em tela de contato
**Dados de entrada** | N/D
**Resultado obtido** | Sucesso.

**Caso de Teste** | **TGS - Tela de Subscrição**
 :--------------: | ------------
**Procedimento**  | 1)  O responsável clica no botão editar ou cancelar.<br>  
**Requisitos associados** | RF-019
**Resultado esperado** | A edição salva com sucesso ou a edição excluída com sucesso
**Dados de entrada** | Alterações de cadastro 
**Resultado obtido** | Falha.


**Caso de Teste** | **TEGE - Tela de Gerenciamento**
 :--------------: | ------------
**Procedimento**  | 1)  O orientador clica no  botão editar onde ele pode adicionar ou remover alunos, bem como, alterar.<br>  
**Requisitos associados** | RF-006, RF-019, RF-023
**Resultado esperado** | A edição salva com sucesso ou a edição excluída com sucesso
**Dados de entrada** | Alterações de cadastro ou remoção de aluno.
**Resultado obtido** | Falha.


**Caso de Teste** | **RSP - Responsividade Mobile**
 :--------------: | ------------
**Procedimento**  | 1)  O orientador clica no  botão editar onde ele pode adicionar ou remover alunos, bem como, alterar.<br>  
**Requisitos associados** | RNF-001
**Resultado esperado** | Adaptar com todos tipos telas
**Dados de entrada** | N/A.
**Resultado obtido** | Falha.

**Caso de Teste** | **TDR - Tempo de Resposta**
 :--------------: | ------------
**Procedimento**  | 1)  O usuario clica para fazer qualquer requisição e o tempo de resposta e de no maximo  três segundos.<br>  
**Requisitos associados** | RNF-002
**Resultado esperado** | Deve processar requisições do usuário em no máximo 3s
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **TEC - HTML, CSS e Javascript**
 :--------------: | ------------
**Procedimento**  | 1)  Desenvolvedores devem usar HTML, CSS e Javascript.<br>  
**Requisitos associados** | RNF-003
**Resultado esperado** | N/A
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **INT- O sistema dever simples e intuitivo**
 :--------------: | ------------
**Procedimento**  | 1)  O sistema dever simples e intuitivo devido ao publico alvo não ter em principio um grande dominio sobre a tecnologia.<br>  
**Requisitos associados** | RNF-005
**Resultado esperado** | N/A
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **LTS- Letras Grandes**
 :--------------: | ------------
**Procedimento**  | 1)  O As letras do sistema devem ser grandes para facilitar a leitura.<br>  
**Requisitos associados** | RNF-006
**Resultado esperado** | N/A
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **RVS- Recursos visuais**
 :--------------: | ------------
**Procedimento**  | 1)  Sempre que possivel, o sistema deve possuir mais recursos visuais que escritos para facilitar o entendimento.<br>  
**Requisitos associados** | RNF-007
**Resultado esperado** | N/A
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **SP- Login Simplificado**
 :--------------: | ------------
**Procedimento**  | 1) O sistema de login pode ser simplicado com o recurso de "Permanecer conectado".<br>  
**Requisitos associados** | RNF-008
**Resultado esperado** | N/A
**Dados de entrada** | N/A.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 - O sistema deve Cadastrar Responsável. O sistema deve Cadastrar Aluno|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1MZXwK6rsV8fgX7lwYmuBd_Z5O-uYEvRU/view?usp=sharing| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisitos Associados | RF-028 - O sistema deve possuir uma tela de login onde apenas pessoas autorizadas tenham acesso. RF-030 - Na tela de login deve haver diferenciação entre de responsavel e de orientador para a criação de contas.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1yQfAf7T3WdKlJ8lMjF1yZSZT2fu9a14T/view?usp=sharing | 

|*Caso de Teste*                                 |*WTS-01 - Meio de Contato *                                         |
|---|---|
|Requisito Associado | RF-029 - O sistema devev possuir um meio de contato para o aluno atráves da tela de login|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1P3QQMTHd8ZdhhFdoATCGD1KrZ93pl4aL/view?usp=sharing| 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Cadastro de Curso

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 5.23 minutos                  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 1.5 minutos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Cadastro de Usuario 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 3.67 minutos                    |
| **Média**     | 0%           | 0                 | 0 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2.52 minutos |

Cenário 2: Edição de Curso

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 4.04 minutos                    |
| **Média**     | 0%           | 0                 | 0 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3.27 minutos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



