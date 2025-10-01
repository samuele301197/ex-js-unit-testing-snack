function createSlug(text) {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
}

module.exports = createSlug;
