var itemDescriptionSource = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Faded Short Sleeve T-shirts");
            }, 5000)
    });
};
itemDescriptionSource().then(console.log);