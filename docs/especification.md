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
|RF-001| O sistema deve Cadastrar Responsável. Cada responsavel tem um aluno. O responsavel gerencia os cursos em que seu aluno está cadastrado | ALTA |  |
|RF-002| O sistema deve cadastrar orientador   | ALTA | |
|RF-003| O sistema deve permitir que um orientador cadastre seus cursos | ALTA | |
|RF-004| Na tela principal do responsavel deve aparecer todos os cursos disponivies de todos os orientadores  | ALTA | |
|RF-005| Na tela principal do orientador deve aparecer todos os cursos que ele criou  | ALTA | |
|RF-006| O sistema deve possuir uma tela de login onde apenas pessoas autorizadas tenham acesso. Na tela de login um usuario deve ter um meio de contato direto com os responsaveis do sistema para tirar suas duvidas. Na tela de login deve haver diferenciação entre de responsavel e de orientador para a criação de contas.   | ALTA | |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Deve ser utlizado HTML, CSS e Javascript |  ALTA | 
|RNF-004| A forma de armazenamento de dados do usuario será via LocalStorage do Browser |  MEDIA | 
|RNF-005| O sistema deve ser simples e intuitivo devido ao publico alvo não ter em principio um grande dominio sobre a tecnologia |  ALTA | 
|RNF-006| As letras do sistema devem ser grandes para facilitar a leitura |  ALTA | 
|RNF-007| Sempre que possivel, o sistema deve possuir mais recursos visuais que escritos para facilitar o entendimento |  ALTA | 




## Restrições

Consideramos limitações orçamentárias e cronogramas apertados para garantir a viabilidade do projeto.
Além de oferecer suporte prático, o aplicativo também terá um foco na criação de conexões emocionais. Os idosos e os profissionais terão a oportunidade de compartilhar experiências de vida, histórias e sabedoria, promovendo uma troca intergeracional enriquecedora. Esse aspecto social é fundamental para combater a solidão e o isolamento muitas vezes enfrentados pela população idosa e facilitando até mesmo a divulgação do projeto.


