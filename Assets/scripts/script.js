function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var dataNascimento = document.getElementById('data-nascimento').value;
    var genero = getGenero();
    var pronome = getPronome();

    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Senha: ' + senha);
    console.log('Data de Nascimento: ' + dataNascimento);
    console.log('Gênero: ' + genero);
    console.log('Pronome: ' + pronome);
}

function getGenero() {
    var generoOptions = document.getElementsByName('genero');
    for (var i = 0; i < generoOptions.length; i++) {
        if (generoOptions[i].checked) {
            return generoOptions[i].value;
        }
    }
    return null;
}

function getPronome() {
    var pronomeSelect = document.getElementById('pronome');
    return pronomeSelect ? pronomeSelect.value : null;
}

function togglePronomeContainer(displayValue) {
    var pronomeContainer = document.getElementById('pronome-container');
    pronomeContainer.style.display = displayValue;
}

document.getElementById('masculino').addEventListener('change', function () {
    togglePronomeContainer('none');
});

document.getElementById('feminino').addEventListener('change', function () {
    togglePronomeContainer('none');
});

document.getElementById('personalizado').addEventListener('change', function () {
    togglePronomeContainer(this.checked ? 'block' : 'none');
});


function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    
    console.log('Email de login: ' + email);
    console.log('Senha de login: ' + senha);

    
    window.location.href = '/index.html';
}
