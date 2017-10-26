//uruchomic skrypt poprzez wpisanie 'node tasks\sandbox.1.js'

var using = require("jasmine-data-provider");

var data = {
    "sukienka1": {
        'nazwaSelectoraZPageObject': "SelectoRSunkienki1",
        "cena": "11",
        "opis":"vav"
    },
    "s2": {
        'nazwaSelectoraZPageObject': "SelectoRSunkienki2",
        "cena": "112",
        "opis":"safdsaf"
    },
}

var UdawanyPageObject = {
    'SelectoRSunkienki1': "#contact-link",
    'SelectoRSunkienki2': ".shopping_cart",
}
using(data,function(daneDlaJednegoTestu){

    console.log(daneDlaJednegoTestu);
    console.log(UdawanyPageObject[daneDlaJednegoTestu.nazwaSelectoraZPageObject]);


})
