const getInitials = require("./es.js");

test("La funzione 'getInitials' restituisce le iniziali di un nome completo", () => {
  const result = getInitials("Samuele Parisi");
  expect(result).toBe("SP");
});
