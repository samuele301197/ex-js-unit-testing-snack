const createSlug = require("./es.js");

test("La funzione 'createSlug' restituisce una stringa in lowercase", () => {
  const result = createSlug("test di boolean");
  expect(result).toBe("test-di-boolean");
});
