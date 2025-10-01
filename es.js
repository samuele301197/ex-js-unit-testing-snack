function createSlug(title) {
  if (!title || typeof title !== "string" || title.trim() === "") {
    throw new Error("Titolo non valido");
  }

  return title.toLowerCase().trim().replace(/\s+/g, "-");
}

module.exports = createSlug;
