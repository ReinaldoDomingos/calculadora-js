var Calculadora = {
    adicionar: function (num1, num2) {
        if (isNaN(num1) || isNaN(num2))
            return 0;
        return parseFloat(num1) + parseFloat(num2);
    },
    subtrair: function (num1, num2) {
        return 0;
    },
    dividir: function (num1, num2) {
        return 0;
    },
    multiplicar: function (num1, num2) {
        return 0;
    },
}
// usando require no nodejs
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Calculadora