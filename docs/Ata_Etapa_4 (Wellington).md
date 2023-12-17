
### Bom dia professores, 

Peço que avaliem a minha entrega separadamente do grupo. O Projeto é o mesmo mas na reta final optamos por corrigir a aplicação de maneira diferente.


Simpliquei o projeto para corrigi-lo da melhor forma possivel. Agora o sistema considera que o aluno não é capaz de mexer no sistema 
e quem mexe é apenas o responsavel. Quando o cadastro do responsavel é feito já é feito o cadastro de um aluno sob a tutela daquele responsavel.
Quando o responsavel clica no botão  "inscrever" ele automaticamente inscreve o aluno dele no curso ofertado, ou seja, o responsavel faz todo o gerenciamento da aplicação e de cursos pelo aluno que ele ajuda.

Corrigi o maximo de coisas que consegui no pouco tempo que tiver para fazer as correções:

* fiz validações de cadastro para todos os campos das telas de cadadastro de orientador, cadastro de responsavel e cadastro de curso
* padronizei os layouts para todas as telas
* corrigi o esquema de cores da aplicação
* implementei a api do vercel totalmente funcional: salva dados de cadastro do orientador, responsavel e cursos. E tambem dados da matricula quando o responsavel clica no botao "inscrever" um registro de matricula é gerado e salvo em db.json
* A tela inicial do responsavel é dinamica, carrega os dados de cursos cadastrados no sistema e a saudação inicial busca o nome do usuario daquele login registrado no banco que é salvo na sessionStorage.
* A tela inicial do orientador é dinamica, carrega os dados de todos os cursos que ele registrou no sistema.
* Os botões de audio agora funcionam e fornecem ajuda em voz quando clicados informando o que aquele botão faz.


link do vercel: https://oldconnection.vercel.app/

usuarios válidos já inseridos no sistema para teste:

* usuario:responsavel@gmail.com       senha: 123
* usuario:orientador@gmail.com        senha: 123
* usuario: orientador2@gmail.com      senha: 123
* usuario: orientador3@gmail.com      senha: 123
* usuario: orientador4@gmail.com      senha: 123


Se logarem com orientadores diferentes verão que os cursos cadastrados que aparecem para eles são diferentes. São carregados apenas os cursos que cada um criou.

* Criando as telas, testei as funções com usuarios diferentes automaticamente fiz muitos testes para ver se estava tudo funcionando.




#### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve Cadastrar Responsável. Cada responsavel tem um aluno. O responsavel gerencia os cursos em que seu aluno está cadastrado | ALTA |  |
|RF-002| O sistema deve cadastrar orientador   | ALTA | Wellington|
|RF-003| O sistema deve permitir que um orientador cadastre seus cursos | ALTA | Wellington |
|RF-004| Na tela principal do responsavel deve aparecer todos os cursos disponivies de todos os orientadores  | ALTA | Wellington |
|RF-005| Na tela principal do responsavel deve haver um botão ondé possível ver todos cursos onde ele inscreveu o aluno pelo qual ele é responsável  | ALTA | Wellington |
|RF-006| Na tela principal do orientador deve aparecer todos os cursos que ele criou  | ALTA | Wellington |
|RF-007| O sistema deve possuir uma tela de login onde apenas pessoas autorizadas tenham acesso. Na tela de login um usuario deve ter um meio de contato direto com os responsaveis do sistema para tirar suas duvidas. Na tela de login deve haver diferenciação entre de responsavel e de orientador para a criação de contas.   | ALTA | Wellington |



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



