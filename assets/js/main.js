function consultarEndereco() {
    let cep = document.querySelector('#cep').value;

    if (cep.length < 8) {
        alert("CEP inválido! O CEP deve ter pelo menos 8 dígitos.");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response) {
        response.json().then(function(data) {
        console.log(data)
        mostrarEndereco(data)
    })
    })
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = ` <p class="dado">Endereço: ${dados.logradouro}</p>
                            <p class="dado">Complemento: ${dados.complemento}</p>
                            <p class="dado">Bairro: ${dados.bairro}</p>
                            <p class="dado">Cidade: ${dados.localidade} - ${dados.uf}</p>`
}

function formatarCEP() {
    var cepInput = document.getElementById('cep');
    var cepValue = cepInput.value;

    // pra remover qualquer traço existente
    cepValue = cepValue.replace('-', '');

    // aqui adiciono um traço após o quinto dígito
    if (cepValue.length > 5) {
        cepValue = cepValue.slice(0, 5) + '-' + cepValue.slice(5);
    }
    cepInput.value = cepValue;
}
