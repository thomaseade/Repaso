function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
var numeros = [2, 3, 5, 7, 9, 11];
var hasEvenNum = hasEven(numeros);
console.log(hasEvenNum);
function startWithM(myNames) {
    for (var i = 0; i < myNames.length; i++) {
        if (!myNames[i].startsWith("M")) {
            return false;
        }
    }
    return true;
}
var nombres = ["Maria", "Marta", "Muriel"];
var nombresM = startWithM(nombres);
console.log(nombresM);
