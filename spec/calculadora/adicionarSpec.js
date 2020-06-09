describe("Suite de testes de adição", function () {

    var Calculador = require("../../src/js/calculadora.js")

    it("deve retornar 5 para 2 e 3", function () {
        expect(Calculador.adicionar(2, 3)).toEqual(5)
    })

    it("deve retornar 6 para 9 e -3 no formato texto", function () {
        expect(Calculador.adicionar("9", "-3")).toEqual(6)
    })

    it("deve retornar 0 quando valor 1 não for numérico", function () {
        expect(Calculador.adicionar(undefined, 10)).toEqual(0)
    })

    it("deve retornar 0 quando valor 2 não for numérico", function () {
        expect(Calculador.adicionar(10, undefined)).toEqual(0)
    })
})