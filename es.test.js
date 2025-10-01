const createSlug = require("./es.js");

test("La funzione 'createSlug' restituisce una stringa in lowercase", () => {
  const result = createSlug("BOOLEAN");
  expect(result).toBe("boolean");
});
