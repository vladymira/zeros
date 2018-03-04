module.exports = function getZerosCount(num) {
    var czero = 0;


    for (var i = 5; Math.floor(num / i) >= 1; i = i * 5) {
        czero = czero + Math.floor(num / i);

    }
    
    return czero;
}
