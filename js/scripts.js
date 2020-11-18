$(document).ready(function() {

    localStorage.setItem('lucas', 'oro');

    $("#logo_home").click(function() {
        localStorage.setItem('logado', '0');
        window.location.href = '/progWeb/index.html';
    })

    $("#login").click(function() {
        let arr = document.getElementsByClassName('loginInput');
        let credenciais = []
        for (let i = 0; i < arr.length; i++) {
            credenciais.push(arr[i].value);
        }
        if (credenciais[0] in localStorage) {
            if (localStorage.getItem(credenciais[0]) === credenciais[1]) {
                localStorage.setItem('logado', '1');
            } else {
                alert("Senha incorreta!");
            }
        } else {
            alert("Usuário não reconhecido!");
        }
        localStorage.getItem('logado') === '1' ? window.location.href = '/progWeb/index.html' : {};
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