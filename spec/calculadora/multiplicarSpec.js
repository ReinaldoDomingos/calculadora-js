describe("Suite de testes de multiplicação", function () {

    var Calculador = require("../../src/js/calculadora.js")

    it("deve retornar 6 para 2 e 3", function () {
        expect(Calculador.multiplicar(2, 3)).toEqual(6)
    })

    it("deve retornar 6 para 2 e 3 no formato texto", function () {
        expect(Calculador.multiplicar( '2', '3')).toEqual(6)
    })

    it("deve retornar 4.5 quando para 4.5 e 3", function () {
        expect(Calculador.multiplicar(1.5, 3)).toEqual(4.5)
    })

    it("deve retornar 0 quando valor 1 não for numérico", function () {
        expect(Calculador.multiplicar(undefined, 4)).toEqual(0)
    })

    it("deve retornar 0 quando valor 2 não for numérico", function () {
        expect(Calculador.multiplicar(4, undefined)).toEqual(0)
    })
})