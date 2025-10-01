const posts = [
  { id: 1, title: "Primo post", slug: "primo-post" },
  { id: 2, title: "Secondo post", slug: "secondo-post" },
  { id: 3, title: "Terzo post", slug: "terzo-post" },
];

function findPostById(posts, id) {
  if (!Array.isArray(posts)) throw new Error("Devi passare un array di post");
  if (typeof id !== "number") throw new Error("L'id deve essere numerico");

  return posts.find((post) => post.id === id);
}

module.exports = { posts, findPostById };
