$(document).ready(function() {
    let arr = [localStorage.getItem('prod1'), localStorage.getItem('prod2'), localStorage.getItem('prod3')]
    console.log(arr)

    let prod1, prod2, prod3 = '';

    prod1 = '<div id="wrapper1"><button id="prod1remv">remover</button><img src="../images/album.jpg"></div>'

    prod2 = '<div id="wrapper2"><button id="prod2remv">remover</button><img src="../images/banner.jpg"></div>'

    prod3 = '<div id="wrapper3"><button id="prod3remv">remover</button><img src="../images/cartao.jpg"></div>'

    for (let i = 0; i < arr.length; i++) {
        arr[i] === '1' && i == 0 ? $(".divCart").append(prod1) : {}
        arr[i] === '1' && i == 1 ? $(".divCart").append(prod2) : {}
        arr[i] === '1' && i == 2 ? $(".divCart").append(prod3) : {}
    }

    $("#prod1remv").click(function() {
        $("#wrapper1").html(" ");
        localStorage.setItem("prod1", "0");
    })

    $("#prod2remv").click(function() {
        $("#wrapper2").html(" ");
        localStorage.setItem("prod2", "0");
    })

    $("#prod3remv").click(function() {
        $("#wrapper3").html(" ");
        localStorage.setItem("prod3", "0");
    })

    $("#concluir").click(function() {
        localStorage.getItem('prod1') === '1' || localStorage.getItem('prod2') === '1' || localStorage.getItem('prod3') === '1' ? alert("Pago!") : alert("Carrinho vazio!");
    })
})