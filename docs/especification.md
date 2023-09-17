# Especificações do Projeto

"Old Connection" é uma resposta crucial às lacunas presentes na sociedade atual, onde os avanços tecnológicos muitas vezes deixam para trás aqueles que têm dificuldades com a alfabetização ou que enfrentam desafios no uso de dispositivos eletrônicos. Esse projeto visa abordar a exclusão digital que afeta muitos idosos, permitindo-lhes acessar informações de forma fácil e direcionada a eles. O aplicativo será desenvolvido com uma interface intuitiva e amigável, projetada especificamente para atender às necessidades dos idosos analfabetos ou semi-analfabetos.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve Cadastrar Responsável | ALTA |  |
|RF-002| O sistema deve Cadastrar Aluno   | ALTA | |
|RF-003| O sistema deve permitir que um Responsável gerencia 1 ou N Alunos   | ALTA | |
|RF-004| O sistema deve permitir que um Responsável também seja aluno (quando o Aluno já for capaz de utlizar a interface do sistema sozinho)  | ALTA | |
|RF-005| O sistema deve permitir que um Responsável crie uma lista de assuntos de interesse para filtro de cursos  | ALTA | |
|RF-006| O sistema deve ter uma tela de gerenciamento para o responsável onde ele pode adicionar ou remover alunos, bem como, alterar informações do cadastro  | ALTA | |
|RF-007| O sistema deve permitir que um "Orientador" crie uma lista de tags de aréa de conhecimento referentes aos cursos que ele vai disponiblizar na plataforma  | ALTA | |
|RF-008| O sistema deve cadastrar um "Orientador" responsável pelo curso  | ALTA | |
|RF-009| O sistema deve permitir que o "Orientador" cadastre cursos e os reponsáveis por ministrá-lo.  | ALTA | |
|RF-010| O sistema deve permitir que um "Orientador" responsável pelo curso classifique-o como CURSO PRESENCIAL, LIVE, LINK PARA PLATAFORMA DE STREAM  | ALTA | |
|RF-011| O sistema deve permitir que um "Orientador" responsável pelo curso cadastre informações como data, duração em dias, hora de incio, hora de fim, telefone de contato, quantidade de horas, preço, ementa do curso, local de realização caso seja presencial, link de acesso caso seja virtual  | ALTA | |
|RF-012| O sistema deve possuir uma tela inicial de facil visualização dos cursos oferecidos de forma simples e intuitiva. A ideia inicial é um scroll infinito de postagens como é no facebook ou instagram | ALTA | |
|RF-013| O sistema deve possuir uma barra de pesquisa de nomes de cursos ou palavras chave para facilitar encontrar postagens de interesse | MEDIA | |
|RF-014| O sistema deve possuir um sistema de likes em cada postagem de curso que é um indicativo de aprovação daquele conteudo  | MEDIA | |
|RF-015| O sistema deve possuir um sistema de rating em cada postagem de curso que é um indicativo de qualidade daquele conteudo  | MEDIA | |
|RF-015| O sistema deve garantir que uma postagem postagem de curso que só apareça se o ainda estiver ativo e com inscrições abertas. Quando a matricula for encerrada ou o curso nao estiver mais disponivel nao poderá aparecer na tela principal de oferta  | ALTA | |
|RF-016| O sistema deve possuir uma tela de historico de todos os cursos ja ofertados e que não estão mais disponiveis. O objetivo é permitir que o usuário tenha conhecimento de que tipo de atividades ja foram ofertadas e que podem voltar a ser ofertadas no futuro.  | BAIXA | |
|RF-017| O sistema deve possuir uma tela de inscrição do aluno em um curso.   | ALTA | |
|RF-018| O sistema deve possuir um botão na tela inicial onde um Responsavel ou Aluno possa ver os cursos em que se está inscrito de forma rapida, por exemplo "Atalho para meus cursos".   | MEDIA | |
|RF-019| O sistema deve possuir uma tela de gerenciamento de subscrição de cursos para o RESPONSAVEL pelo Aluno. Nessa tela é possivel Cancelar ou fazer alguma possivel alteração na subscrição   | ALTA | |
|RF-020| O sistema deve permitir o envio de mensagens de texto para o Orientador do curso afim de pedir alguma informação na tela de "GERENCIAMENTO DE SUBSCRIÇÃO"   | BAIXA | |
|RF-021| O sistema deve permitir o envio de comentarios dos alunos em cada postagem de cada curso. É importante que os alunos saibam a opiniao uns dos outros.   | MEDIA | |
|RF-022| O sistema deve possuir uma tela de "Gerenciamento de curso" onde seja possivel ver estatisticas uteis como a quantidade de alunos.    | ALTA | |
|RF-023| O sistema deve possuir na de "Gerenciamento de curso" meios de alterar dados do curso como Nome, preço, publico alvo, categoria, Data, Hora, local caso seja presencial. Caso seja online, link do canal de stream caso.    | ALTA | |
|RF-024| O sistema deve permitir que seja adicionada pelo menos uma imagem chamativa de apresentação do curso na tela inicial.    | ALTA | |
|RF-025| O sistema deve permitir que sejaM adicionadas varias fotos que o "Orientador" considere relevantes para atrair o publico alvo    | MEDIA | |
|RF-026| O sistema deve permitir que o "Orientador" faça a indicação de links de videos que demonstrem mais detalhes sobre o curso. Esses recursos visuais sao especialmente uteis para os Alunos que tem dificuldade em ler e escrever    | MEDIA | |
|RF-027| O sistema deve permitir que o "Orientador" faça o upload de videos para dentro da plataforma que demonstrem mais detalhes sobre o curso. Esses recursos visuais sao especialmente uteis para os Alunos que tem dificuldade em ler e escrever    | BAIXA | |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Deve ser utlizado HTML, CSS e Javascript |  ALTA | 
|RNF-004| A forma de armazenamento de dados será via LocalStorage do Browser |  ALTA | 
|RNF-005| O sistema dever simples e intuitivo devido ao publico alvo não ter em principio um grande dominio sobre a tecnologia |  ALTA | 
|RNF-006| As letras do sistema devem ser grandes para facilitar a leitura |  ALTA | 
|RNF-007| Sempre que possivel, o sistema deve possuir mais recursos visuais que escritos para facilitar o entendimento |  ALTA | 
|RNF-008| O sistema de login pode ser simplicado com o recurso de "Permanecer conectado"  |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Consideramos limitações orçamentárias e cronogramas apertados para garantir a viabilidade do projeto.
Além de oferecer suporte prático, o aplicativo também terá um foco na criação de conexões emocionais. Os idosos e os profissionais terão a oportunidade de compartilhar experiências de vida, histórias e sabedoria, promovendo uma troca intergeracional enriquecedora. Esse aspecto social é fundamental para combater a solidão e o isolamento muitas vezes enfrentados pela população idosa e facilitando até mesmo a divulgação do projeto.


> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
