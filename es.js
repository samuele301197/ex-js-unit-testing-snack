function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

module.exports = getInitials;
