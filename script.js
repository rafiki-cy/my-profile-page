// Aguarda que o DOM esteja completamente carregado antes de iniciar o código
document.addEventListener('DOMContentLoaded', function () {

    // Declarção de váriaveis com textos a serem exibidos
    const h1Texto = "Bem-vindo à minha página by Rafiki Dias";
    const introTexto = "Antes de tudo, é necessário que decida qual dos meus perfis deseja acessar:";
    
    // Seleção dos elementos do HTML no DOM
    const h1Elemento = document.querySelector('h1');
    const introP = document.getElementById('intro-p');
    
    // Função para animar a digitação gradual de texto em um elemento
    function typeText(text, element, delay = 100) {
      let index = 0;
  
      function type() {
        
        // Atualiza o conteúdo do elemento com uma parte do texto em cada iteração
        element.textContent = text.slice(0, index);
        index++;
  
        // Se ainda houver texto para exibir, agenda a próxima iteração
        if (index <= text.length) {
          setTimeout(type, delay); 
        }
      }

      // Inicia o processo de digitação
      type();
    }
    // Digitação do texto do cabeçalho (número referente à velocidade da digitação)
    typeText(h1Texto, h1Elemento, 70);

    // Aguarda o término da digitação no cabeçalho e, em seguida, inicia a digitação da introdução (40 milissegundos de atraso entre as letras)
    setTimeout(function () {
      typeText(introTexto, introP, 40);
    }, h1Texto.length * 100);
  });