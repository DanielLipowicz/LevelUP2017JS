var funkcjaZTimeouterm = function () {
    return new Promise(function (resolve, reject) {
        try {
            setTimeout(
                function () {
                    resolve("Faded Short Sleeve T-shirts");
                }, 5000)
        }catch(err) {
            reject('error');
        }
    });
};


console.log(funkcjaZTimeouterm());
funkcjaZTimeouterm().then(console.log);
// console.log(fun());

