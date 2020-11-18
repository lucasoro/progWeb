$(document).ready(function() {
    var logins = [];
    var logado = 0;

    $("#logo_home").click(function() {
        window.location.href = '/progWeb/index.html';
    })

    $("#login").click(function() {
        let arr = document.getElementsByClassName('loginInput');
        let credenciais = []
        for (let i = 0; i < arr.length; i++) {
            credenciais.push(arr[i].value);
        }
        logins.forEach(function(item) {
            item[0] === credenciais[0] && item[1] === credenciais[1] ? logado > 0 : {}
        })
        logado > 0 ? window.location.href = '/progWeb/index.html' : alert("Erro! Tente novamente.");
    })

    $("#botaoRegistro").click(function() {
        let lista = document.getElementsByClassName('inputRegistro');
        console.log(lista);
        lista[3].value === lista[4].value ? logins.push([lista[0].value, lista[3].value]) : alert("Senhas não batem!");
        logado = 1;
        window.location.href = '/progWeb/index.html';
    })

    $(".userPageButton").click(function() {
        window.location.href = '/progWeb/pages/login.html';
    })

})