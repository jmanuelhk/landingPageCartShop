
var productList = [
    {
        "name":"Cubrebocas",
        "price": 150.00
    },
    {
        "name":"Guantes",
        "price": 20.00
    },
    {
        "name":"Caretas",
        "price": 85.00
    },

]
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', loadList(productList))
} else {
    loadList(productList)
}

function loadList(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        console.log(element.name);
        console.log(element.price);

    }
}