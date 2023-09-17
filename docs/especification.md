# Especificações do Projeto

"Old Connection" é uma resposta crucial às lacunas presentes na sociedade atual, onde os avanços tecnológicos muitas vezes deixam para trás aqueles que têm dificuldades com a alfabetização ou que enfrentam desafios no uso de dispositivos eletrônicos. Esse projeto visa abordar a exclusão digital que afeta muitos idosos, permitindo-lhes acessar informações de forma fácil e direcionada a eles. O aplicativo será desenvolvido com uma interface intuitiva e amigável, projetada especificamente para atender às necessidades dos idosos analfabetos ou semi-analfabetos.

## Personas

Persona 1: Maria - A Aprendiz Motivada
 
- Nome: Maria da Silva
- Idade: 68 anos
- Características:
  - Maria é uma idosa com um forte desejo de aprender a ler e escrever. Ela sempre sentiu que a falta de habilidades de leitura a privou de muitas oportunidades ao longo de sua vida.
  - Embora tenha dificuldades, Maria é motivada e dedicada a superar o analfabetismo. Ela tem tempo disponível e está disposta a participar de aulas regulares ou programas de treinamento online.
  - Maria também valoriza a interação social e gostaria de fazer parte de um grupo de aprendizado com pessoas de sua idade.
 
Persona 2: João - O Idoso Isolado
 
- Nome: João Santos
- Idade: 72 anos
- Características:
  - João vive sozinho desde que sua esposa faleceu e não tem filhos que possam ajudá-lo. Ele se sente isolado e dependente de outras pessoas para tarefas simples, como ler correspondências.
  - João possui um smartphone básico e está disposto a aprender a usá-lo para melhorar suas habilidades de leitura e escrita.
  - Ele tem limitações de mobilidade e não pode frequentar aulas presenciais com facilidade, preferindo soluções online.
 
Persona 3: Ana - A Cuidadora Familiar
 
- Nome: Ana Oliveira
- Idade: 45 anos
- Características:
  - Ana é filha de uma idosa analfabeta, Maria, que mora com ela. Ela se preocupa profundamente com a mãe e deseja encontrar uma maneira eficaz de ajudá-la a superar o analfabetismo.
  - Ana tem uma agenda ocupada com o trabalho e a família, por isso precisa de uma solução que possa ser facilmente incorporada à rotina de Maria.
  - Ela está disposta a apoiar Maria em suas atividades de aprendizado, mas precisa de orientações claras sobre como fazer isso.
 
Persona 4: Felipe - O Educador Voluntário
 
- Nome: Felipe Ferreira
- Idade:** 60 anos
- Características:
  - Felipe é um aposentado que era professor antes de se aposentar. Ele tem tempo livre e deseja contribuir para a comunidade, compartilhando seus conhecimentos.
  - Ele tem experiência em ensino e está disposto a atuar como voluntário em programas de alfabetização para idosos.
  - Felipe procura uma plataforma ou organização que o conecte aos idosos que precisam de ajuda.
 
Persona 5: Luisa - A Profissional da Saúde
 
- Nome: Luisa Alves
- Idade: 38 anos
- Características:
  - Luisa é uma enfermeira que trabalha em um centro de saúde local. Ela frequentemente lida com idosos que têm dificuldades de saúde relacionadas à falta de habilidades de leitura, como entender prescrições médicas.
  - Ela procura recursos educacionais que possa recomendar aos pacientes idosos para melhorar sua autonomia e compreensão de informações de saúde.



## Histórias de Usuários

Contexto: Plataforma de Aprendizado Online
 
1. Eu, como Maria (A Aprendiz Motivada), quero acessar aulas interativas de leitura e escrita online, para melhorar minhas habilidades de alfabetização e me sentir mais independente.
 
2. Eu, como João (O Idoso Isolado), quero receber notificações e lembretes em meu smartphone sobre as lições e exercícios de alfabetização, para não perder nenhuma oportunidade de aprendizado.
 
3. Eu, como Pedro (O Educador Voluntário), quero ter uma plataforma de ensino online onde eu possa criar e compartilhar lições de alfabetização, para ajudar os idosos em seu processo de aprendizado.
 
Contexto: Suporte à Família e Cuidadores
 
4. Eu, como Ana (A Cuidadora Familiar), quero receber orientações claras sobre como apoiar minha mãe, Maria, em seu aprendizado, para poder ajudá-la de forma eficaz em casa.
 
Contexto: Integração com Serviços de Saúde
 
5. Eu, como Luisa (A Profissional da Saúde), quero poder recomendar facilmente recursos de aprendizado de alfabetização para os idosos que atendo em minha clínica, para melhorar sua compreensão de informações de saúde.
Com base nas histórias de usuário fornecidas, vou criar requisitos funcionais e não funcionais para a solução de combate ao analfabetismo entre os idosos. Os requisitos estão agrupados em dois grupos: Requisitos Funcionais (RF) e Requisitos Não Funcionais (RNF).


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



## Restrições

Consideramos limitações orçamentárias e cronogramas apertados para garantir a viabilidade do projeto.
Além de oferecer suporte prático, o aplicativo também terá um foco na criação de conexões emocionais. Os idosos e os profissionais terão a oportunidade de compartilhar experiências de vida, histórias e sabedoria, promovendo uma troca intergeracional enriquecedora. Esse aspecto social é fundamental para combater a solidão e o isolamento muitas vezes enfrentados pela população idosa e facilitando até mesmo a divulgação do projeto.


