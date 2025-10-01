const average = require("./es.js");

test("La funzione 'average' calcola la media di un array di numeri", () => {
  const result = average([2, 4, 6, 8, 10]);
  expect(result).toBe(6);
});
