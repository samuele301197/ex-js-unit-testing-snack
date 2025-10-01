const isPalindrome = require("./es.js");

test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
  expect(isPalindrome("anna")).toBe(true);
  expect(isPalindrome("ciao")).toBe(false);
});
