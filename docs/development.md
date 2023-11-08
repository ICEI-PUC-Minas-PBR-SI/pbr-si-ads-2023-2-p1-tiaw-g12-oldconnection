# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-028| O sistema deve possuir uma tela de login onde apenas pessoas autorizadas tenham acesso. | ALTA | index.html |
|RF-029| Na tela de login um usuario deve ter um meio de contato direto com os responsaveis do sistema para tirar suas duvidas. | MEDIA | index.html |
|RF-030| Na tela de login deve haver diferenciação entre de responsavel e de orientador para a criação de contas. | ALTA | index.html |
|RF-009| O sistema deve permitir que o "Orientador" cadastre cursos e os reponsáveis por ministrá-lo. | ALTA | CadastroCurso.html |
|RF-010| O sistema deve permitir que um "Orientador" responsável pelo curso cadastre informações como data, duração em dias, hora de incio, hora de fim, telefone de contato, quantidade de horas, preço, ementa do curso, local de realização caso seja presencial, link de acesso caso seja virtual. | ALTA | CadastroCurso.html |
|RF-009|O sistema deve permitir que o "Orientador" cadastre cursos e os reponsáveis por ministrá-lo. | ALTA | TelaOrientador.html |
|RF-010|O sistema deve permitir que um "Orientador" responsável pelo curso classifique-o como CURSO PRESENCIAL, LIVE, LINK PARA PLATAFORMA DE STREAM| ALTA | TelaOrientador.html |
|RF-011|O sistema deve permitir que um responsável tenha acesso ao site através da tela de login e pra isso deverá fazer um cadastro| ALTA | CadastroResponsavel.html |
|RF-012|O sistema deve permitir que o aluno faça um cadastro para ter acesso somente aos cursos do site | ALTA | CadastroAluno.html |
|RF-013|O sistema deve possuir uma barra de pesquisa de nomes de cursos ou palavras chave para facilitar encontrar postagens de interesse	|MEDIA| TelaPrincipalResponsavel.html |
|RF-018|	O sistema deve possuir um botão na tela inicial onde um Responsavel ou Aluno possa ver os cursos em que se está inscrito de forma rapida, por exemplo "Atalho para meus cursos".	|MEDIA| TelaPrincipalResponsavel.html |
|RF-019|	O sistema deve possuir uma tela de gerenciamento de subscrição de cursos para o RESPONSAVEL pelo Aluno. Nessa tela é possivel Cancelar ou fazer alguma possivel alteração na subscrição	|ALTA| TelaPrincipalResponsavel.html |
|RF-008|	O sistema deve cadastrar um "Orientador" responsável pelo curso	|ALTA|
CadastroOrientador.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| usuario             | Texto  | Credencial de acesso ao sistema            | marcos_pereira                                              |
| senha         | Texto             | codigo de uso pessoal e instrasferivel para acessar o sistema                         | mp_240753#abt                                  |
| Nome_curso       | Texto             | Nome dado há um curso                       | curso de portugues - módulo I                            |
| Descricao_curso  | Texto  | Descrição do conteudo do curso | Este curso vai ensinar o basico sobre fonemas e silabas                                              |
| inicio_inscricao_curso  | Data  | Data de inicio da inscrição do curso | 22/01/2024                                              |
| fim_inscricao_curso  | Data  | Data de fim da inscrição do curso | 22/02/2024                                              |
| quantidade_vagas_curso  | Número  | Numero total de vagas ofertadas | 20                                              |
| telefone_contato_curso  | Texto  | Telefone disponivel para tirar duvidas sofre o curso | 3132220404                                              |
| lista_imagens_curso  | Lista  | Lista de imagens sobre o curso | img_01.jpg, img_02.jpg, img_03.jpg, img_04.jpg                                              |
| lista_tags_curso  | Lista  | Lista de etiquetas sobre o curso | educação, portugues                                              |
| link_video_apresentacao  | Texto  | DLink para um video em uma plataforma externa de apresentação | www.youtbe.com/sjdkjsfdldsdsdkd                                              |
| local_curso_rua  | Texto  | Endereço - rua - local do curso | Rua David Sarnoff                                              |
| local_curso_numero  | Texto  | Endereço - número - local do curso | 3423                                              |
| local_curso_complemento  | Texto  | Endereço - complemento - local do curso | Prédio B                                             |
| local_curso_bairro  | Texto  | Endereço - bairro - local do curso | Barreiro                                              |
| local_curso_municipio  | Texto  | Endereço - municipio - local do curso | Belo Horizonte                                              |
| local_curso_cep  | Texto  | Endereço - cep - local do curso | 30495000                                              |
|Cursos ativos/Encerrados | CheckBox | Identificador De cursos ativos encerrados | (x)Curso Ativo ()Curso Encerrados              |
| Boas vindas    | Texto             | Mensagem de boas vindas para orientador   | Bem-VIndo, Orientaodor                         |
| Gratuitos/Pagos| CheckBox          | Identificador de cursos pagos/gratuitos   | (x)Curso Pago ()Curso Gratuito                 |
| Add Cursos     | input             | Campo para adicionar os cursos do orientador | [img] Curso de Português                    |
| usuario  | input        | usuario de acesso ao curso | gabriel_22                                           |
|senha    | input            | campo para digitar senha de entrada ao curso |6518674168                   |
|repita sua senha    | input             | comfirmação de senha |6518674168                 |
| email     | input             | para confimação de usuario |gabriel.22@gmail.com                   |
| confirmação de email   | input             | confimar seu email |gabriel.22@gmail.com                   |
| nome completo   | input             |campo para digitação do nome completo |Gabriel Gomes Ferreira                    |
|data de nascimento    | input             |data de nascimento do usuario |25/08/1998                  |
|sexo    | input             |indentificação do sexo do usuário |masculino                    |
| escolaridade    | input             |indentificar a escolaridade de cada um | ensino superior incompleto                 |
| profissão    | input             | dados de profissões  |estagiário                    |
| rua     | input             | localizar a rua do usuario | av afonso vaz de melo                   |
| numero   | input             | numero da casa / ap do usuario |50                   |
| complemento     | input             | facil identificação do endereço (opcional)|em frente a Puc Minas                    |
| bairro   | input             | indentificar o bairro | vila da paz                    |
| municipio   | input             | indentificar municipio| Belo Horizonte                   |
| CEP  | input             | para facilitar localizar o endereço |30675459                    |
| voltar    | button             | voltar para tela de login | (sem ex)                  |
| confirmar   | button           | ir para os cursos  | (sem ex)                    |
| id do responsavel   | input          | indentificar quem e responsacel por aquele aluno | julio22                   |
|possui necessidade especial, descreva:   | textarea        | indentificar necessidades de cada usuario  | auxilio de cadeiras de rodas                 |
| Mostra os cursos disponiveis para podem ser adquiridos | Indentificar os cursos que cada aluno tem |                     |
| Atalho para os Cursos Possuidos | Filtro de Cursos adquiridos |                             |
| Gerenciamento de subcrição de curso | Cancelamento ou alteração |                        |
