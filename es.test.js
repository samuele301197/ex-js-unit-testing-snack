const createSlug = require("./es.js");

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlug("")).toThrow("Titolo non valido");
  expect(() => createSlug("   ")).toThrow("Titolo non valido");
  expect(() => createSlug(null)).toThrow("Titolo non valido");
  expect(() => createSlug(123)).toThrow("Titolo non valido");
});
