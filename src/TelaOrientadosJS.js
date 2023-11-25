function AparecerCursoAtivo() {
    var checkBox = document.getElementById("CheckboxCursosAtivos");
    var text = document.getElementById("cursoA");
    if (checkBox.checked == false){
      text.style.display = "none";
    } else {
      text.style.display = "flex";
    }
  }

  function AparecerCursoEncerrado() {
    var checkBox2 = document.getElementById("CheckboxCursosEncerrados");
    var text2 = document.getElementById("cursoI");
    if (checkBox2.checked == false){
      text2.style.display = "none";
    } else {
      text2.style.display = "flex";
    }
  }


  function AparecerCursoGratuito() {
    var checkBox3 = document.getElementById("CheckboxGratuitos");
    var text3 = document.getElementById("cursoG");
    if (checkBox3.checked == false){
      text3.style.display = "none";
    } else {
      text3.style.display = "flex";
    }
  }

  function AparecerCursoPago() {
    var checkBox4 = document.getElementById("CheckboxPagos");
    var text4 = document.getElementById("cursoP");
    if (checkBox4.checked == false){
      text4.style.display = "none";
    } else {
      text4.style.display = "flex";
    }
  }


  function AparecerCursoPagoInativo() {
    var checkBox4 = document.getElementById("CheckboxPagos");
    var text4 = document.getElementById("cursoP");
    if (checkBox4.checked == false){
      text4.style.display = "none";
    } else {
      text4.style.display = "flex";
    }
  }

  function excluirCurso(idCurso) {
    // Seleciona o curso pelo ID e o remove
    let curso = document.getElementById(idCurso);
    curso.remove();
}

function editarDescricao(button) {
  // encontra o elemento pra alterar (Futuramente criar um id)
  var descricao = button.parentElement.previousElementSibling.querySelector('p');

  // cria um novo elemente e vincula o novo conteudo
  var input = document.createElement('input');
  input.value = descricao.textContent;

  //style do input
  input.style.outline = "none";
  input.style.border = "none";
  input.style.backgroundColor = "#f3f3f3";
  input.style.margin = "10px";
  input.style.padding = "10px";
  input.style.borderRadius = "5px";

  // altera a descrição pelo novo texto
  descricao.textContent = '';
  descricao.appendChild(input);

  // focar no input
  input.focus();

  // quando apertar enter salva a alteração
  input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          descricao.textContent = input.value;
      }
  });
}