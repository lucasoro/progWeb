$(document).ready(function() {

    localStorage.setItem('lucas', 'oro');

    $("#logo_home").click(function() {
        window.location.href = '/progWeb/index.html';
    })

    $("#login").click(function() {
        let arr = document.getElementsByClassName('loginInput');
        let credenciais = []
        for (let i = 0; i < arr.length; i++) {
            credenciais.push(arr[i].value);
        }
        let local = localStorage.getItem('logins');
        console.log(local[0])
        for (let i = 0; i < local.length; i++) {
            local[0] === credenciais[0] && local[1] === credenciais[1] ? localStorage.setItem('logado', '1') : {}
        }

        localStorage.getItem('logado') === '1' ? window.location.href = '/progWeb/index.html' : alert("Erro! Tente novamente.");
    })

    $("#botaoRegistro").click(function() {
        let lista = document.getElementsByClassName('inputRegistro');
        if (lista[3].value === lista[4].value) {
            localStorage.setItem(lista[0].value, lista[3].value);
            localStorage.setItem('logado', '1');
            window.location.href = '/progWeb/index.html';
        } else {
            alert("Senhas não batem!");
        }
    })

    $(".userPageButton").click(function() {
        if (localStorage.getItem('logado') === '1') {
            window.location.href = '/progWeb/index.html';
        } else {
            window.location.href = '/progWeb/pages/login.html';
        }
    })

})