var itemDescriptionSource = function () {
    this.data = {
        "tc1": {
            "order": 0,
            "atributteValue": "1_1"
        },
        "tc2": {
            "order": 1,
            "atributteValue": "2_1"
        },
        "tc3": {
            "order": 2,
            "atributteValue": "3_1"
        }
    }
    itemDescriptionSource.prototype.funkcja = function(){return 0}
    
}

var item = new itemDescriptionSource();

console.log(item);
console.log("");
console.log(item.data);
console.log("");

console.log(item.data.tc3.order);
