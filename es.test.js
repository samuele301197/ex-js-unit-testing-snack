const { posts, findPostById } = require("./es.js");

test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
  const result = findPostById(posts, 2);
  expect(result).toEqual({
    id: 2,
    title: "Secondo post",
    slug: "secondo-post",
  });
});

test("Ogni post ha le proprietà id, title e slug", () => {
  posts.forEach((post) => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("slug");
  });
});

test("L'id passato deve essere numerico", () => {
  expect(() => findPostById(posts, "2")).toThrow("L'id deve essere numerico");
});

test("Viene passato un array valido", () => {
  expect(() => findPostById("non-un-array", 1)).toThrow(
    "Devi passare un array di post"
  );
});
