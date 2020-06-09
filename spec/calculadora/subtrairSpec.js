describe("Suite de testes de subtrair", function () {

    var Calculador = require("../../src/js/calculadora.js")

    it("deve retornar 5 para 8 e 3", function () {
        expect(Calculador.subtrair(8, 3)).toEqual(5)
    })

    it("deve retornar 5 para 8 e 3 no formato texto", function () {
        expect(Calculador.subtrair('8', '3')).toEqual(5)
    })

    it("deve retornar 4 quando para 5.5 e 1.5", function () {
        expect(Calculador.subtrair(5.5, 1.5)).toEqual(4)
        expect(Calculador.subtrair('5.5', '1.5')).toEqual(4)
    })

    it("deve retornar 0 quando valor 1 não for numérico", function () {
        expect(Calculador.subtrair(undefined, 5)).toEqual(0)
    })

    it("deve retornar 0 quando valor 2 não for numérico", function () {
        expect(Calculador.subtrair(5, undefined)).toEqual(0)
    })
})