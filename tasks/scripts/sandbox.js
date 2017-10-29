var itemDescriptionSource = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Faded Short Sleeve T-shirts");
            }, 5000)
    });
};

var fun = function(){
    return setTimeout(
        function () {
            return "Faded Short Sleeve T-shirts";
        }, 5000)
}

itemDescriptionSource().then(console.log);
console.log("print")
console.log(fun());