//$(document).ready (function () {//esse comando diz que assim que estiver o jquery e js carregado, mandar alert
 //   alert("Olá Jquery")//tudo que for fazer no jquery tem que ser dentro desse escopo
//})

//$(document).ready(function(){
//    console.log(document.querySelector("header button"));//essa é a maneira de fazer sem o jquery 
 //   console.log ($('header button'));//aqui é com jquery, podemos selecionar qquer elemento
//})
// com console.log, visualizamos no dev tools mensagens oque esta retornando

$(document).ready(function(){
    $('header button').click(function(){//Isso vincula uma função de callback ao evento de clique nos botões que estão dentro de um elemento <header>. Quando um desses botões é clicado, a função é acionada.
        $('form').slideDown();//Isso vincula uma função de callback ao evento de clique nos botões que estão dentro de um elemento <header>. Quando um desses botões é clicado, a função é acionada.
    })

    $('#reset').click(function(){//Aqui, é adicionado um manipulador de evento de clique ao elemento com o ID "reset". Quando esse elemento é clicado, a função de callback é executada.
        $('form').slideUp();//Quando o elemento com o ID "reset" é clicado, esta linha faz com que o formulário (<form>) deslize para cima, ocultando-o. O efeito slideUp é utilizado para criar uma animação suave durante o ocultamento do formulário.
    })

    $('form').on('submit', function(e) {//Este trecho adiciona um manipulador de evento para o evento de envio do formulário (submit). Quando o formulário é enviado, a função de callback é executada.
        e.preventDefault();//evita o comportamento padrão do formulário, que seria recarregar a página.
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div 
            class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real
                </a>
        </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn (1000);
            $('#endereco-imagem-nova').val('')
        })
    })


