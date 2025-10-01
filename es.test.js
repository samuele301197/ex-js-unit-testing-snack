const somma = require("./es.js");

test("La funzione 'somma' restituisce la somma di due numeri", () => {
  const result = somma(1, 1);
  expect(result).toBe(2);
});
