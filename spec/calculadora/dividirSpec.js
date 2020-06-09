describe("Suite de testes de dividir", function () {

    var Calculador = require("../../src/js/calculadora.js")

    it("deve retornar 2 para 6 e 3", function () {
        expect(Calculador.dividir(6, 3)).toEqual(2)
    })

    it("deve retornar 2 para 6 e 3 no formato texto", function () {
        expect(Calculador.dividir( '6', '3')).toEqual(2)
    })

    it("deve retornar 1.5 quando para 4.5 e 3", function () {
        expect(Calculador.dividir(4.5, 3)).toEqual(1.5)
    })

    it("deve retornar 'Erro' para divisão por zero", function () {
        expect(Calculador.dividir(5, 0)).toEqual('Erro')
    })

    it("deve retornar 0 quando valor 1 não for numérico", function () {
        expect(Calculador.dividir(undefined, 5)).toEqual(0)
    })

    it("deve retornar 0 quando valor 2 não for numérico", function () {
        expect(Calculador.dividir(5, undefined)).toEqual(0)
    })
})