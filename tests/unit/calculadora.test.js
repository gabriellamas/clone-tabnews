const calculadora = require("../../models/calculadora");

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("salada + 2 = 4", () => {
  const resultado = calculadora.somar("salada", 2);
  expect(resultado).toBe("Error");
});
