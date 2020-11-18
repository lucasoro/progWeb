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
        if (localStorage.getItem('logado') === '1') {
            localStorage.setItem('prod1', '1');
            alert('Produto adicionado!');
        } else {
            alert("Realize o login primeiro!");
        }
    })

    $("#prod2").click(function() {
        if (localStorage.getItem('logado') === '1') {
            localStorage.setItem('prod2', '1');
            alert('Produto adicionado!');
        } else {
            alert("Realize o login primeiro!");
        }
    })

    $("#prod3").click(function() {
        if (localStorage.getItem('logado') === '1') {
            localStorage.setItem('prod3', '1');
            alert('Produto adicionado!');
        } else {
            alert("Realize o login primeiro!");
        }
    })

    function initMap() {
        // The map, centered at Curitiba
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: { lat: -25.429, lng: -49.267 },
        });

        addMarker({
            coords: { lat: -25.439, lng: -49.237 },
            title: ' </h1> loja 1 </h1>'

        });

        addMarker({
            coords: { lat: -25.499, lng: -49.227 },
            title: '<h1> Loja 2 </h1>'

        });
        addMarker({
            coords: { lat: -25.459, lng: -49.257 },
            title: '<h1> Loja 3 </h1>'
        });

        function addMarker(props) {
            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
            });
        }
    }
    initMap()
})