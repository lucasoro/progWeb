$(document).ready(function() {

    localStorage.setItem('lucas', 'oro');


    $("#botaoCadastrar").click(function() {
        window.location.href = '/pages/register.html';
    })

    $("#logo_home").click(function() {
        localStorage.setItem('logado', '0');

        localStorage.setItem('prod1', '0');
        localStorage.setItem('prod2', '0');
        localStorage.setItem('prod3', '0');

        window.location.href = '/index.html';
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
        localStorage.getItem('logado') === '1' ? window.location.href = '/index.html' : {};
    })

    $("#botaoRegistro").click(function() {
        let lista = document.getElementsByClassName('inputRegistro');
        if (lista[3].value === lista[4].value) {
            localStorage.setItem(lista[0].value, lista[3].value);
            localStorage.setItem('logado', '1');
            window.location.href = '/index.html';
        } else {
            alert("Senhas não batem!");
        }
    })

    $(".userPageButton").click(function() {
        if (localStorage.getItem('logado') === '1') {
            window.location.href = '/index.html';
        } else {
            window.location.href = '/pages/login.html';
        }
    })
    $(".cartPageButton").click(function() {
        if (localStorage.getItem('logado') === '1') {
            window.location.href = '/pages/cart.html';
        } else {
            window.location.href = '/pages/login.html';
        }
    })
    $(".prod").click(function() {
        window.location.href = '/pages/products.html';
    })
    $(".serv").click(function() {
        window.location.href = '/pages/services.html';
    })
    $(".cont").click(function() {
        window.location.href = '/pages/contact.html';
    })

    $("#prod1").click(function() {
        localStorage.setItem('prod1', '1');
        alert('Produto adicionado!');
    })

    $("#prod2").click(function() {
        localStorage.setItem('prod2', '1');
        alert('Produto adicionado!');
    })

    $("#prod3").click(function() {
        localStorage.setItem('prod3', '1');
        alert('Produto adicionado!');
    })
})