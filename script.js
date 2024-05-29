$(document).ready(function() {
    var year = 0;    

    var nascimento = [
        "Naquela manhã fria de inverno, um bebê chorou pela primeira vez, trazendo calor ao coração dos pais.",
        "Sob o brilho das estrelas, um novo membro da família chegou, trazendo consigo uma promessa de alegria.",
        "Com o romper da aurora, um choro de bebê ecoou pela casa, sinalizando um novo começo.",
        "No meio de uma tempestade, o milagre da vida se fez presente com o nascimento de uma criança.",
        "Entre risos e lágrimas de felicidade, um bebê nasceu, completando a família com amor."
    ];    
    function randomizarNascimento() {
        var nascAleatorio = Math.floor(Math.random() * nascimento.length);
        return nascimento[nascAleatorio];
    }
    var novoNascimento = randomizarNascimento();

    $('#conteudo_ano').append(novoNascimento);

    $('.next_year--btn').on('click', function() {

        year++;

        var eventos = [
            "Texto aleatório 1",
            "Texto aleatório 2",
            "Texto aleatório 3",
            "Texto aleatório 4",
            "Texto aleatório 5"
        ];

        function randomizarTexto() {
            var indiceAleatorio = Math.floor(Math.random() * eventos.length);
            return eventos[indiceAleatorio];
        }

        var novoEvento = randomizarTexto();
        
        var novoConteudo = `
            <div class="y-game poppins-bold">Idade: <span class="poppins-bold">${year} anos</span></div>
            <p class="conteudo_ano">`+ novoEvento +`</p>
        `;
        $('.content_person').append(novoConteudo);

        console.log(novoConteudo);


        // year++;
        // $('#year').text(year + " anos");
        // $('#conteudo_ano').text("Opa!");
    });

    $("#save_name").click(function() {
        personagem = $('#nome_personagem').val();

        $('#exampleModal').modal('hide');
        $('#nome').text(personagem);
    });

    var textos = [
        "Texto aleatório 1",
        "Texto aleatório 2",
        "Texto aleatório 3",
        "Texto aleatório 4",
        "Texto aleatório 5"
    ];

    function randomizarTexto() {
        var indiceAleatorio = Math.floor(Math.random() * textos.length);
        return textos[indiceAleatorio];
    }

    $('#randomize-button').click(function() {
        var novoTexto = randomizarTexto();
        $('#text-container').append('<div>' + novoTexto + '</div>');
    });
});
