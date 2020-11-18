$(document).ready(function() {
    let arr = [localStorage.getItem('prod1'), localStorage.getItem('prod2'), localStorage.getItem('prod3')]
    console.log(arr)

    let prod1, prod2, prod3 = '';

    prod1 = '<button>remover</button><img src="../images/album.jpg">'

    prod2 = '<button>remover</button><img src="../images/banner.jpg">'

    prod3 = '<button>remover</button><img src="../images/cartao.jpg">'

    for (let i = 0; i < arr.length; i++) {
        arr[i] === '1' && i == 0 ? $(".divCart").append(prod1) : {}
        arr[i] === '1' && i == 1 ? $(".divCart").append(prod2) : {}
        arr[i] === '1' && i == 2 ? $(".divCart").append(prod3) : {}
    }
})